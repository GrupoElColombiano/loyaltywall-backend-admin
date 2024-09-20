import { Injectable, NotFoundException } from '@nestjs/common';
import { PointValue } from '../entities/point-value.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../entities/event.entity';
import { ExpireTimePoint } from '../entities/expire_point.entity';
import { Cluster } from '../entities/cluster.entity';
import { Site } from 'src/sites/entities/site.entity';
import { EventCluster } from '../entities/event_cluster.entity';
import { ClusterPenalization } from '../entities/cluster_penalization.entity';
import { PointsEvents } from 'src/puntos_usuario/entity/points_events.entity';
import cluster from 'cluster';
import { EventsPointsSite } from 'src/common/entity/events-points-site.entity';
import { color } from 'console-log-colors';
// import { CreateGamificationDto } from './dto/create-gamification.dto';
// import { UpdateGamificationDto } from './dto/update-gamification.dto';

@Injectable()
export class GamificationService {
  constructor(
    @InjectRepository(PointValue)
    private pointValueRepository: Repository<PointValue>,
    @InjectRepository(Event) private eventRepository: Repository<Event>,
    @InjectRepository(ExpireTimePoint)
    private expireTimePointRepository: Repository<ExpireTimePoint>,
    @InjectRepository(Cluster) private clusterRepository: Repository<Cluster>,
    @InjectRepository(Site) private siteRepository: Repository<Site>,
    @InjectRepository(EventCluster)
    private eventClusterRepository: Repository<EventCluster>,
    @InjectRepository(ClusterPenalization)
    private clusterPenalizationRepository: Repository<ClusterPenalization>,
    @InjectRepository(PointsEvents)
    private pointsEventsRepository: Repository<PointsEvents>,
    @InjectRepository(EventsPointsSite)
    private eventsPointsSiteRepository: Repository<EventsPointsSite>,
  ) { }

  create(createGamificationDto: any) {
    return 'This action adds a new gamification';
  }

  // SETEO DE VALOR MONETARIO DEL PUNTO Y FECHA EXPIRACION

  // 1- Obiene el valor unitario (en pesos) del punto
  async findPointValueBySite(idSite: any) {
    console.log('entro al servicio');
    const pointValue = await this.pointValueRepository
      .createQueryBuilder('point_value')
      .select(['point_value.value'])
      .where('id_site = :id_site', { id_site: idSite })
      .getMany();

    console.log('pointValue', pointValue);
    return {
      point_value: pointValue[0].value,
    };
  }

  // 2- Edita el valor unitario (en pesos) del punto
  async updatePointValueBySite(idSite: any, body: any) {
    const { point_value } = body;
    const pointValue = await this.pointValueRepository
      .createQueryBuilder('point_value')
      .update(PointValue)
      .where('id_site = :id_site', { id_site: idSite })
      .set({ value: point_value })
      .execute();

    //Si pointValue no existe, crearlo
    if (pointValue.affected === 0) {
      const newPointValue = new PointValue();
      const site = new Site();
      site.idSite = idSite;
      newPointValue.site = site;
      newPointValue.value = point_value;

      await this.pointValueRepository.save(newPointValue);
      return {
        message: 'Valor unitario del punto creado',
        value: point_value,
        idSite: idSite,
      }
    }

    return {
      message: 'Valor unitario del punto actualizado',
      value: point_value,
      idSite: idSite,
    };
  }

  // 3- Actualiza fecha de expiracion
  async createNewExpireTimeAndDeactivateCurrent(
    siteId: number,
    expireTime: number,
  ): Promise<ExpireTimePoint[]> {
    // Desactivar todos los valores actuales ligados a ese sitio
    const currentExpireTimePoints = await this.expireTimePointRepository.find({
      where: { site: { idSite: siteId } },
    });

    const updatedCurrentExpireTimePoints = await Promise.all(
      currentExpireTimePoints.map(async (point) => {
        point.is_active = false;
        return this.expireTimePointRepository.save(point);
      }),
    );

    // Crear un nuevo registro con la nueva fecha de expiración y activo
    const newExpireTimePoint = new ExpireTimePoint();
    const site = new Site();
    site.idSite = siteId;
    newExpireTimePoint.site = site;
    newExpireTimePoint.expire_time = expireTime;
    newExpireTimePoint.is_active = true;

    await this.expireTimePointRepository.save(newExpireTimePoint);

    return updatedCurrentExpireTimePoints;
  }

  // 4- Obtiene fecha de expiracion activa
  async listActiveExpireTimePointsBySiteId(
    siteId: number,
  ): Promise<ExpireTimePoint[]> {
    return this.expireTimePointRepository.find({
      where: { site: { idSite: siteId }, is_active: true },
    });
  }

  // SETEO DE EVENTOS PARA PUNTOS EN TERMINOS MONETARIOS Y CONFIG DE CLUSTERS

  // 1- Creacion de eventos por la api
  async createEvent(body: any) {
    const { name, description, points, idSite } = body;
    const event = await this.eventRepository
      .createQueryBuilder('event')
      .insert()
      .into(Event)
      .values([{ name, description, points, sites: [{ idSite }] }])
      .execute();

    return {
      message: 'Evento creado',
      event,
    };
  }

  // 2- Listar todos los eventos (Monetario y cluster)
  async findAllEvent() {
    const events = await this.eventRepository
      .createQueryBuilder('event')
      // .leftJoinAndSelect('event.sites', 'sites')
      .select([
        'event.id_event',
        'event.name',
        'event.description',
        'event.points',
        'event.event_repeats',
        'event.porcentual_value',
      ])
      .getMany();

    return {
      events,
    };
  }

  // 3- Listar eventos con puntos (Monetario)
  async findEventsWithPoints(idSite: any) {
    const events = await this.eventsPointsSiteRepository
      .createQueryBuilder('events_points_site')
      .leftJoinAndSelect('events_points_site.event', 'event')
      .where('events_points_site.siteIdSite = :idSite', { idSite: idSite })
      .andWhere('events_points_site.points > 0')
      .getMany();

    return {
      total: events.length,
      events,
    };
  }

  // 4- Actualizar puntos evento por id
  async updateEvent(id_event: number, body: any) {
    const { points, idSite } = body;

    // Encuentra y actualiza los puntos del evento específico
    const eventPoints = await this.eventsPointsSiteRepository.createQueryBuilder('events_points_site')
    .where('events_points_site.eventIdEvent = :id_event', { id_event: id_event })
    .andWhere('events_points_site.siteIdSite = :idSite', { idSite: idSite })
    .getOne()

    //Mirar que tipo de dato es id_event en un console.log
    console.log('id_event', body)

    console.log(color.red('eventPoints'), eventPoints, id_event)
    if(!eventPoints) {
      console.log('entro al if', id_event)
      const newObj: any = {
        eventIdEvent: id_event,
        event: id_event,
        siteIdSite: idSite,
        points: points,
        expiration_date: new Date()
      }
      console.log('newObj', newObj)
      const newEventPoints = this.eventsPointsSiteRepository.create(newObj)
      const eventPoints = await this.eventsPointsSiteRepository.save(newEventPoints)

      return {
        message: 'Evento creado',
        event: eventPoints
      }
    }
    console.log('no ingresó')

    const updatedEvent = await this.eventsPointsSiteRepository.update({
      eventIdEvent: id_event,
      siteIdSite: idSite,
      event: { id_event }
    }, { points })

    return updatedEvent
        ? { message: 'Evento actualizado', event: updatedEvent }
        : { message: 'Evento no encontrado' };
}

  // 5- Eliminar puntos evento por id (Monetario)
  async removeEvent(id_event: any, idSite: any) {
    const event = await this.eventsPointsSiteRepository.createQueryBuilder('events_points_site')
      .delete()
      .from(EventsPointsSite)
      .where('eventIdEvent = :id_event', { id_event: id_event })
      .andWhere('siteIdSite = :idSite', { idSite: idSite })
      .execute();

    return {
      message: 'Eliminado configuración de eventos',
      event,
    };
  }

  // 6- Actualiza repeticiones del evento (cluster)
  async updateEventRepeats(id_event: any, body: any) {
    const { event_repeats } = body;
    const eventRepeats = await this.eventRepository
      .createQueryBuilder('event')
      .where('id_event = :id_event', { id_event: id_event })
      .update(Event)
      .set({ event_repeats: event_repeats })
      .execute();

    return {
      message: 'Cantidad de veces que se puede repetir un evento actualizado',
      eventRepeats,
    };
  }

  // 7- Actualiza valor porcentual del evento (cluster)
  async updatePorcentualValue(id_event: any, body: any) {
    const { porcentual_value } = body;
    const porcentualValue = await this.eventRepository
      .createQueryBuilder('event')
      .where('id_event = :id_event', { id_event: id_event })
      .update(Event)
      .set({ porcentual_value: porcentual_value })
      .execute();

    return {
      message: 'Valor porcentual actualizado',
      porcentualValue,
    };
  }

  // 8- Obtener Cluster con sus eventos
  async getEventForCluster(id_cluster: any, idSite: any) {
    //cargar relaciones de muchos a muchos
    console.log('id_cluster', id_cluster)
    console.log('idSite', idSite)
    try {
      const cluster = await this.eventClusterRepository.createQueryBuilder('event_cluster')
        .leftJoinAndSelect('event_cluster.events', 'events')
        .leftJoinAndSelect('event_cluster.clusters', 'clusters')
        .where('clusters.id_cluster = :id_cluster', { id_cluster: id_cluster })
        .andWhere('event_cluster.site = :idSite', { idSite: idSite })
        .getMany();

        console.log('entro al if', cluster)
      if (cluster.length === 0) {
        throw new NotFoundException('Clúster no encontrado');
      }

      return cluster;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // Ligar un Cluster con Eventos
  async createClusterEvent(id_cluster: any, body: any) {
    const { id_event, event_repeats, porcentual_value } = body;
    try {
      const queryBuilder = this.eventClusterRepository.createQueryBuilder('event_cluster')
        .insert()
        .values([{ event_repeats, porcentual_value, events: id_event, clusters: id_cluster }])
        .execute();

      return {
        message: 'Evento ligado al clúster',
        queryBuilder,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // 9- Actualizar cluster con sus eventos
  async updateEventCluster(id_cluster: any, body: any) {
    console.log('body entrante', body);

    const { events, event_repeats, porcentual_value, site } = body;

    //Verificar si clusters y event existen la tabla intermedia (event_cluster) filtrar por id_cluster, id_event y idSite
    const eventCluster = await this.eventClusterRepository.createQueryBuilder('event_cluster')
      .where('event_cluster.clusters = :id_cluster', { id_cluster: id_cluster })
      .andWhere('event_cluster.events = :id_event', { id_event: events })
      .andWhere('event_cluster.site = :site', { site: site })
      .getOne();

    //si no existe crear el registro
    console.log('eventCluster a editar', eventCluster)
    if (!eventCluster) {
      body.clusters = id_cluster;
      console.log('body a guardar', body)
      //Guardar el body sin el id_cluster en la tabla event_cluster
      const eventCluster = await this.eventClusterRepository.save(body);

      const eventClusterSave = eventCluster.queryBuilder;

      const message = eventCluster.message;
      //Retornar eventCluster creada
      return {
        message: 'Evento ligado al clúster',
      };
    }
    console.log('eventCluster', eventCluster)


    //si existe actualizar los campos event_repeats y porcentual_value
    const queryBuilder = this.eventClusterRepository.createQueryBuilder('event_cluster')
      .update(EventCluster)
      .set({ event_repeats, porcentual_value })
      .where('id_cluster = :id_cluster', { id_cluster: id_cluster })
      .andWhere('id_event = :id_event', { id_event: events })
      .andWhere('site.idSite = :idSite', { idSite: site })
      .execute();

    return {
      message: 'Evento actualizado',
    };
  }

  // 10- Eliminar cluster con sus eventos
  async removeEventFromCluster(id_cluster: any, id_event: any) {

    try {
      const queryBuilder = this.eventClusterRepository.createQueryBuilder('event_cluster')
        .delete()
        .from(EventCluster)
        .where('id_cluster = :id_cluster', { id_cluster: id_cluster })
        .andWhere('id_event = :id_event', { id_event: id_event })
        .execute();

      return {
        message: `Evento ${id_event} eliminado del clúster ${id_cluster}`,
        data: id_event,
      };
    } catch (error) {
      throw new NotFoundException();
    }
  }
  // Sin controlador
  // async findEventClouster() {
  //   const eventCluster = await this.eventRepository
  //     .createQueryBuilder('event_cluster')
  //     .getMany();

  //   return {
  //     eventCluster,
  //   };
  // }

  //PENALIZACIONES DE CLUSTER
  async createClusterPenalization(body: any): Promise<any> {
    const { penaltyClusters, idSite } = body;

    const queryBuilder = this.clusterPenalizationRepository.createQueryBuilder('cluster_penalization')
      .insert()
      .values([{ penaltyClusters, site: idSite }])
      .execute();

    return {
      message: 'Penalización de clúster creada',
    };
  }

  async updateClusterPenalization(body: any): Promise<any> {
    const { penaltyClusters, idSite } = body;
    //Revisar si existe la penalización de un sitio
    const clusterPenalization = await this.clusterPenalizationRepository.findOne({
      where: { site: { idSite } },
    });

    //Si no existe, crearlo
    if (!clusterPenalization) {
      const clusterPenalization = await this.createClusterPenalization(body);

      const message = clusterPenalization.message;

      return {
        message,
      };
    }

    //Si existe, actualizarlo
    const queryBuilder = this.clusterPenalizationRepository.createQueryBuilder('cluster_penalization')
      .update(ClusterPenalization)
      .set({ penaltyClusters })
      .where('idSite = :idSite', { idSite: idSite })
      .execute();

    return {
      message: 'Penalización de clúster actualizada',
    };
  }

  async getAllClusterPenalization(): Promise<any> {
    const clusterPenalization = await this.clusterPenalizationRepository.createQueryBuilder('cluster_penalization')
      .leftJoinAndSelect('cluster_penalization.site', 'site')
      .select([
        'cluster_penalization.id_cluster_penalization',
        'cluster_penalization.penaltyClusters',
        'site',
      ])
      .getMany();

    return {
      clusterPenalization,
    };
  }

  async getOneClusterPenalization(idSite: any): Promise<any> {
    const clusterPenalization = await this.clusterPenalizationRepository.createQueryBuilder('cluster_penalization')
      .leftJoinAndSelect('cluster_penalization.site', 'site')
      .select([
        'cluster_penalization.id_cluster_penalization',
        'cluster_penalization.penaltyClusters',
        'site',
      ])
      .where('site.idSite = :idSite', { idSite: idSite })
      .getOne();

    return {
      clusterPenalization,
    };
  }

  async agruparEventosPorNombre(eventos: any) {
    const resultado = [];
    const eventosAgrupados = {};

    // Agrupamos los eventos por su id_event
    eventos.forEach((evento: any) => {
      if (!eventosAgrupados[evento.id_event]) {
        eventosAgrupados[evento.id_event] = {
          cluster: evento.cluster,
          name: evento.name,
          count: 0,
          events: []
        };
      }
      eventosAgrupados[evento.id_event].count++;
      eventosAgrupados[evento.id_event].events.push(evento);
    });

    // Convertimos el objeto agrupado en un array para el resultado final
    for (const [id_event, data] of Object.entries(eventosAgrupados)) {
      const dataInte: any = data;
      resultado.push({
        id_event: parseInt(id_event),
        cluster: dataInte.cluster,
        name: dataInte.name,
        count: dataInte.count,
        events: dataInte.events
      });
    }

    return resultado;
  }

  async getAdvanceCluster(idSite: any, idKeycloak: any): Promise<any> {

    let clusterLevel: any;
    let userEvents = [];
    let clusterAdvance = 0;
    let eventosAgrupadosCluster1 = [];
    let eventosAgrupadosCluster2 = [];
    //traer todos los clusters_events de un sitio
    const clusters = await this.eventClusterRepository.createQueryBuilder('event_cluster')
      .leftJoinAndSelect('event_cluster.clusters', 'clusters')
      .leftJoinAndSelect('event_cluster.events', 'events')
      .leftJoinAndSelect('event_cluster.site', 'site')
      .where('site.idSite = :idSite', { idSite: idSite })
      .getMany();

    //Traer todos los eventos de un usuario
    const userPoints = await this.pointsEventsRepository.createQueryBuilder('points_events')
      .leftJoinAndSelect('points_events.event', 'event')
      .where('points_events.userId = :idKeycloak', { idKeycloak: idKeycloak })
      .getMany();

    //Cluster 1
    clusters.forEach((cluster) => {
      const clusterPoint: any = cluster.clusters;
      if (clusterPoint.name === 'Cluster 1') {
        userPoints.forEach((userPoint) => {
          const clusterName: any = cluster.events
          if (clusterName.name === userPoint.event.name) {
            userEvents.push({
              cluster: clusterPoint.name,
              id_event: userPoint.event.id_event,
              name: userPoint.event.name,
            });
          }
        });
      }
    });
    eventosAgrupadosCluster1 = await this.agruparEventosPorNombre(userEvents);
    clusters.forEach((cluster) => {
      const clusterPoint: any = cluster.clusters;
      const clusterEvent: any = cluster.events;
      if (clusterPoint.name === 'Cluster 1') {
        let cuent = 0;
        eventosAgrupadosCluster1.forEach((eventoAgrupado) => {
          if (clusterEvent.name === eventoAgrupado.name) {
            cuent++;
            // console.log('cluster1', clusterEvent.name);
            // console.log('eventoAgrupado', eventoAgrupado.name);
            // console.log('Verdader o falso', clusterEvent.name === eventoAgrupado.name)
            // console.log('CLUSTER', cluster.event_repeats)
            // console.log('numero event_repeats', eventoAgrupado.count)
            // console.log(' eventoAgrupado >= cluster', eventoAgrupado.count >= cluster.event_repeats)
            // console.log('numero de veces', cuent)
            // console.log('porcentual_value', cluster.porcentual_value)
            // console.log('<======================================================>')
            if (eventoAgrupado.count >= cluster.event_repeats) {
              console.log('######entro al if###### .....')
              clusterAdvance = clusterAdvance + cluster.porcentual_value;
            }
          }
        });
      }
    });
    clusterLevel = 'Cluster 1'
    console.log('clusterAdvance Cluster 1', clusterAdvance);

    //Cluster 2
    if (clusterAdvance >= 100) {
      userEvents = [];
      clusterAdvance = 0;
      clusters.forEach((cluster) => {
        const clusterPoint: any = cluster.clusters;
        if (clusterPoint.name === 'Cluster 2') {
          userPoints.forEach((userPoint) => {
            // console.log('########################################CLUSTER 2#####################################', userPoint);
            const clusterName: any = cluster.events
            // console.log('cluster2', clusterName.name);
            // console.log('userPoint', userPoint.event.name);
            // console.log('Nombres iguales', clusterName.name === userPoint.event.name)
            if (clusterName.name === userPoint.event.name) {
              userEvents.push({
                cluster: clusterPoint.name,
                id_event: userPoint.event.id_event,
                name: userPoint.event.name,
              });
            }
          });
        }
      });
      eventosAgrupadosCluster2 = await this.agruparEventosPorNombre(userEvents);
      console.log('eventosAgrupadosCluster2', eventosAgrupadosCluster2);
      clusters.forEach((cluster) => {
        const clusterPoint: any = cluster.clusters;
        const clusterEvent: any = cluster.events;
        if (clusterPoint.name === 'Cluster 2') {
          let cuent = 0;
          eventosAgrupadosCluster2.forEach((eventoAgrupado) => {
            console.log('########################################CLUSTER 2#####################################');
            console.log('cluster2', clusterEvent.name);
            console.log('eventoAgrupado', eventoAgrupado.name);
            console.log('Verdader o falso', clusterEvent.name === eventoAgrupado.name)
            if (clusterEvent.name === eventoAgrupado.name) {
              console.log('CLUSTER', cluster.event_repeats)
              console.log('numero event_repeats', eventoAgrupado.count)
              console.log(' eventoAgrupado >= cluster', eventoAgrupado.count >= cluster.event_repeats)
              cuent++;
              console.log('numero de veces', cuent)
              console.log('porcentual_value', cluster.porcentual_value)
              console.log('<======================================================>')
              if (eventoAgrupado.count >= cluster.event_repeats) {
                console.log('######entro al if######')
                clusterAdvance = clusterAdvance + cluster.porcentual_value;
              }
            }
          });
        }
      });
      clusterLevel = 'Cluster 2'
    }
    console.log('clusterAdvance Cluster 2', clusterAdvance);

    //Cluster 3
    if (clusterAdvance >= 100) {
      userEvents = [];
      clusterAdvance = 0;
      clusters.forEach((cluster) => {
        const clusterPoint: any = cluster.clusters;
        if (clusterPoint.name === 'Cluster 3') {
          userPoints.forEach((userPoint) => {
            const clusterName: any = cluster.events
            if (clusterName.name === userPoint.event.name) {
              userEvents.push({
                cluster: clusterPoint.name,
                id_event: userPoint.event.id_event,
                name: userPoint.event.name,
              });
            }
          });
        }
      });
      eventosAgrupadosCluster2 = await this.agruparEventosPorNombre(userEvents);
      clusters.forEach((cluster) => {
        const clusterPoint: any = cluster.clusters;
        const clusterEvent: any = cluster.events;
        if (clusterPoint.name === 'Cluster 3') {
          let cuent = 0;
          eventosAgrupadosCluster2.forEach((eventoAgrupado) => {
            if (clusterEvent.name === eventoAgrupado.name) {
              cuent++;
              if (eventoAgrupado.count >= cluster.event_repeats) {
                clusterAdvance = clusterAdvance + cluster.porcentual_value;
              }
            }
          });
        }
      });
      clusterLevel = 'Cluster 3'
    }
    console.log('clusterAdvance Cluster 3', clusterAdvance);

    return {
      clusterLevel,
      clusterAdvance,
    }
  }

}
