import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { PointsMovement } from './entity/points_movement.entity';
import { PointsEvents } from './entity/points_events.entity';
import { UserPoints } from './entity/user_points.entity';
import { UserAdminEntity } from '../users/entities/user.entity';
import { UserPlan } from 'src/common/entity/user-plan.entity';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
import { PaymentTransaction } from 'src/registerlog/entity/payment-log.entity';
import { EventsPointsSite } from 'src/common/entity/events-points-site.entity';
import { Site } from 'src/sites/entities/site.entity';
import { Event } from 'src/gamification/entities/event.entity';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PuntosUsuarioService {

  constructor(
    @InjectRepository(PointsMovement)
    private pointsMovementRepository: Repository<PointsMovement>,
    @InjectRepository(PointsEvents)
    private pointsEventsRepository: Repository<PointsEvents>,
    @InjectRepository(UserPoints)
    private userPointsRepository: Repository<UserPoints>,
    @InjectRepository(UserAdminEntity)
    private userAdminRepository: Repository<UserAdminEntity>,
    @InjectRepository(UserPlan)
    private userPlanRepository: Repository<UserPlan>,
    @InjectRepository(PaymentTransaction)
    private paymentTransactionRepository: Repository<PaymentTransaction>,
    private registerLogService: RegisterlogService,
    private entityManager: EntityManager,
    private httpService: HttpService
  ) { }

  //Servicios de PonitsEvents(Historial de puntos para un usuario por sitio), PaymenTransaction
  async findAll(body: any): Promise<any> {
    console.log('body', body)
    const { idKeycloak, site } = body;
    const userEvent: any = [];
    try {
    const queryResult = await this.pointsEventsRepository.createQueryBuilder('points_events')
    .leftJoinAndSelect('points_events.event', 'event')
    .where('points_events.user = :idKeycloak', { idKeycloak: idKeycloak })
    .getMany();

    queryResult.forEach((element: any) => {
      const { points, registration_date, expiration_date, event } = element;

      const obj = {
        points: points,
        registration_date: registration_date,
        expiration_date: expiration_date,
        event: event.name
      };

      userEvent.push(obj);
    });
      const totalEvents = queryResult.length;

      return {
        totalEvents,
        user_events: userEvent
      };

    } catch (error) {
      console.error(error);
      throw new Error('Error al recuperar los eventos');
    }
  }

  async findOne(idKeycloak: string): Promise<any> {
    const queryBuilder = await this.pointsEventsRepository.createQueryBuilder('points_events')
      .leftJoinAndSelect('points_events.site', 'site')
      .leftJoinAndSelect('points_events.event', 'event')
      .where('points_events.userId = :idKeycloak', { idKeycloak: idKeycloak })
      .getOne();

    return queryBuilder;
  }

  async create(body: any): Promise<any> {
    return await this.pointsEventsRepository.save(body);
  }

  async update(id: number, body: any): Promise<any> {
    return await this.pointsEventsRepository.update(id, body);
  }

  async delete(id: number): Promise<any> {
    return await this.pointsEventsRepository.delete(id);
  }

  //Servicios de PointsMovement
  async findAllPointsMovement(body: any): Promise<any> {
    const { idKeycloak, site } = body;
    const user_consumed: any = [];

    console.log('ingresamos a pymentTransaction', idKeycloak);
    try {
      const query = await this.paymentTransactionRepository.createQueryBuilder('payment_transaction')
      .where('payment_transaction.userId = :idKeycloak', { idKeycloak: idKeycloak })
      .andWhere('payment_transaction.status = true')
      .getMany();

      query.forEach((element: any) => {
        console.log('element: ', element);
        const { amount, createdAt, product } = element;

        // const
        const obj = {
          points: amount,
          system_date: createdAt,
          product: product
        };
        user_consumed.push(obj);
      });

      return {
        totalConsumed: query.length,
        user_consumed: user_consumed
      };

    } catch (error) {
      console.log(error);
    }
  }

  async findOnePointsMovement(id: number): Promise<PointsMovement> {
    return await this.pointsMovementRepository.findOne({
      where: { id: id }
    });
  }

  async createPointsMovement(body: any): Promise<any> {
    return await this.pointsMovementRepository.save(body);
  }

  //Crearé función que valide cuántos dias faltan para fecha de expiración
  async dateExpiration(date_expire: Date): Promise<any> {
    // console.log('fecha de expiración: ', date_expire)
    const dateNow = new Date();
    const dateExpire = new Date(date_expire);
    // console.log('dateExpire: ', dateExpire);
    const dateDiff = dateExpire.getTime() - dateNow.getTime();
    // console.log('dateDiff: ', dateDiff);
    const days = Math.round(dateDiff / (1000 * 60 * 60 * 24));
    console.log('days: ', days);
    // return days;
  }

  // Servicios de puntos a expirar
  // async findAllPointsToExpire(email: any): Promise<any> {
  //   // const dateExpiration = new Date('2024-01-10T00:00:00.000Z');
  //   // this.dateExpiration(dateExpiration);
  //   //Variable para sumar los puntos a expirar
  //   let pointsToExpire = 0;
  //   let dateToExpire: Array<any> = [];
  //   try {
  //     const queryBuilderPointsToExpire = await this.pointsEventsRepository.createQueryBuilder('points_events')
  //       // .leftJoinAndSelect('points_events.user', 'user')
  //       // .where('user.email = :email', { email: email })
  //       .getMany();

  //     //Recorrer el arreglo de puntos a expirar para sumarlos
  //     queryBuilderPointsToExpire.forEach(async (element: any) => {
  //       console.log('element: ', element)
  //       let dateNow = new Date();
  //       let dateExpire = new Date(element.expiration_date);
  //       let dateDiff = dateExpire.getTime() - dateNow.getTime();
  //       let daysToExpire = Math.round(dateDiff / (1000 * 60 * 60 * 24));
  //       if (daysToExpire <= 3) {
  //         pointsToExpire += element.points;

  //         //Si los dias son igual o mayor a uno, agregar al array
  //         if (daysToExpire >= 1) {
  //           dateToExpire.push(element.expiration_date);
  //         }
  //       }
  //     });

  //     console.log('fecha más proxima de expiración: ', dateToExpire)

  //     return {
  //       total_points_to_expire: pointsToExpire,
  //       date_to_expire: dateToExpire[0]
  //     }

  //   } catch (error: any) {
  //     throw new NotFoundException(error.message);
  //   }
  // }
  async findAllPointsToExpire(idKeycloak: string): Promise<any> {

    try {
    //   const rawQuery = `
    //       SELECT
    //     "points_events"."id" AS "id",
    //     "points_events"."points" AS "points",
    //     "points_events"."expiration_date" AS "expiration_date"
    // FROM
    //     "points_events"
    // WHERE
    //     "points_events"."userId" = $1
    //     AND points_events.expiration_date <= CURRENT_DATE + interval '8 days'
    //     `;
        // AND points_events.expiration_date >= CURRENT_DATE;

      // const dateToExpire = await this.pointsEventsRepository.query(rawQuery, [idKeycloak]);

      //Recorrer el arreglo de puntos a expirar para sumarlos

    //   const dateToExpire = await this.pointsEventsRepository.createQueryBuilder('points_events')
    // .where('points_events.userId = :idKeycloak', { idKeycloak: idKeycloak })
    // // .andWhere("points_events.expiration_date <= NOW() + INTERVAL '8 days'")
    // .getMany();

      // let pointsToExpire = 0;
      // // console.log('dateToExpire: ', dateToExpire)
      // dateToExpire.forEach((element: any) => {
      //   pointsToExpire += element.points;
      // });

      // console.log('fecha más proxima de expiración: ', dateToExpire);


//Debo utilizar Axios para hacer la petición a la API de https://api-cliente.loyaltywall.com/gamification/point_tobe_addressed/idKeycloak
      const response = await this.httpService.get(`https://api-cliente.loyaltywall.com/gamification/point_tobe_addressed/${idKeycloak}`).toPromise();
      // console.log('response: ', response.data);

      //Recorrer el arreglo de puntos a expirar para sumarlos
      let pointsToExpire = 0;
      response.data.forEach((element: any) => {
        pointsToExpire += element.points;
      });
      // console.log('pointsToExpire: ', pointsToExpire);

      //Recorrer el array y obtener la fecha más proxima al presente al compararla con la fecha actual y guardarla en un campo let dateToExpire
      let registrationDate: any = '';
      if (response.data.length > 0 && response.data[0].registration_date) {
        const parts = response.data[0].registration_date.split('/');
        if (parts.length === 3) { // Asegura que la fecha esté en formato DD/MM/YYYY
            const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`; // Cambia a formato YYYY-MM-DD
            const regDate = new Date(formattedDate);
            console.log('formatted date', regDate);
            registrationDate = await this.formatDateTime(regDate); // Asume que tienes una función formatDateTime
            console.log('registrationDate: ', registrationDate)
        }
    }

      return {
        total_points_to_expire: pointsToExpire,
        date_to_expire: [{expiration_date: registrationDate}]
      };

    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async formatDateTime(date: any) {
    console.log('date: ', date)
    const pad = (num: number): string => num.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
           `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.` +
           `${date.getMilliseconds().toString().padEnd(6, '0')}+00`; // Asume zona horaria +00
}

  async findPointTotalUser(body: any): Promise<any> {
    const { idKeycloak, site, id_user, clientIp, userAgent } = body;

    const plans: any = [];

    try {
      // Obtener el total de puntos de un usuario en la tabla points_events
      const queryBuilder = await this.pointsEventsRepository.createQueryBuilder('points_events')
        .where('points_events.userId = :idKeycloak', { idKeycloak: idKeycloak })
        .select('SUM(points_events.points)', 'total_points');
      const total_puntos = await queryBuilder.getRawOne();

      // Filtrar en la tabla user_plan por idKeycloak
      const queryBuilderUser = await this.userPlanRepository.createQueryBuilder('user_plan')
    .leftJoinAndSelect('user_plan.plan', 'plan')
    .andWhere('user_plan.idUser = :idKeycloak', { idKeycloak: idKeycloak })
    .andWhere("plan.userType NOT IN (:...excludedUserTypes)", { excludedUserTypes: ['Anónimo'] }) // Excluye 'Anónimo' y 'Registrado'
    .andWhere("plan.userType NOT LIKE :prefix", { prefix: 'Registrado%' }) // Excluye 'Registrado%'
    .getMany();
        console.log('queryBuilderUser: ', queryBuilderUser)

      queryBuilderUser.forEach((element: any) => {
        const { name, description, isActive } = element.plan;
        console.log('element: ', element);
        let obj = {
          name: name,
          description: description,
          isActive: element.isActive,
          price: '12.700'
        }
        plans.push(obj);
      });
      //Pasar el objeto total_puntos a string
      const total_puntos_string = JSON.stringify(total_puntos);

      //Traer el total de puntos redimidos o gastados de payment_transaction
      const queryBuilderPointsConsumed = await this.paymentTransactionRepository.createQueryBuilder('payment_transaction')
        .where('payment_transaction.userId = :idKeycloak', { idKeycloak: idKeycloak })
        .select('SUM(payment_transaction.amount)', 'total_points_consumed')
        .getRawOne();

        // console.log('queryBuilderPointsConsumed: ', queryBuilderPointsConsumed)

      //Usar el ConsoleLog para ver por qué me sale "Cannot read properties of null (reading 'total_points')"
      const register_logs: any = {
        "id_user": id_user,
        "roleID": 1,
        "activityType": "Puntos",
        "activity": "Consulta de puntos y plan",
        "description": "Consulta de puntos y planes de un usuario",
        "affectedObject": total_puntos_string,
        "success": true,
        "ipAddress": clientIp,
        //Dejar userAgent opcional
        "userAgent": userAgent? userAgent: 'App Movil',
        "timestamp": new Date(),
        "error": '',
        "url": "/puntos-usuario/points_movement/point_total",
        "token": "token",
      }

      //Registrar el log
      await this.registerLogService.create(register_logs);

      //A total_puntos.total_points se le resta lo consumido
      total_puntos.total_points = total_puntos.total_points - queryBuilderPointsConsumed.total_points_consumed;
      return {
        message: 'Consulta exitosa',
        total_points: total_puntos?.total_points,
        user: plans
      }
    } catch (error) {
      console.log('Ocurrió un error: ', error);
      throw new NotFoundException(error.message);
    }
  }

  //Lista total de puntos y movimientos de un usuario
  async findTotalPointsUser(idKeycloak: any): Promise<any> {
    console.log('Se ejecuta el servicio')
    const total_points: Array<any> = [];

    try {
      //Tarer lista de puntos por evento
      console.log('idKeycloak: ', idKeycloak)
      const rawQuery = `
      SELECT
      "points_events"."id" AS "id",
      "points_events"."points" AS "points",
      "points_events"."registration_date" AS "registration_date",
      "points_events"."expiration_date" AS "expiration_date",
      "event"."name" AS "name",
      "event"."id_event" AS "id_event"
    FROM "points_events" "points_events"
    LEFT JOIN "user_admin_entity" "user" ON "user"."idKeycloak" = "points_events"."userId"
    LEFT JOIN "events_points_site" ON "events_points_site"."eventIdEvent" = "points_events"."eventIdEvent"
    LEFT JOIN "event" ON "event"."id_event" = "events_points_site"."eventIdEvent"
    WHERE "points_events"."userId" = $1
        `;

      // Ejecutar la consulta SQL
      const queryBuilderPointsEvents = await this.pointsEventsRepository.query(rawQuery, [idKeycloak]);

      //Recorrer el arreglo de puntos por evento y agregarlo al otro array
      console.log('queryBuilderPointsEvents: ', queryBuilderPointsEvents)
      queryBuilderPointsEvents.map((element: any) => {
        const { id, points, registration_date, expiration_date, name, id_event } = element;
        let obj = {
          id: id,
          points: points,
          registration_date: registration_date,
          expiration_date: expiration_date,
          name: name,
          id_event: id_event
        };

        total_points.push(obj);
        console.log('total_points: ', total_points)
      });

      //Traer lista de puntos por movimiento
      const queryBuilderPointsMovement = await this.userPointsRepository.createQueryBuilder('user_points')
        // .leftJoinAndSelect('user_points.user', 'user')
        .leftJoinAndSelect('user_points.site', 'site')
        .leftJoinAndSelect('user_points.event', 'event')
        .where('user_points.idKeycloak = :idKeycloak', { idKeycloak: idKeycloak })
        .select(['user_points.id_user_points', 'user_points.product', 'user_points.idProduct', 'user_points.system_date', 'user_points.points', 'event.name'])
        .getMany();

        //Traer todo de la tabla payment_transaction por su userId
        const queryBuilderPaymentTransaction = await this.paymentTransactionRepository.createQueryBuilder('payment_transaction')
        .where('payment_transaction.userId = :idKeycloak', { idKeycloak: idKeycloak })
        .select(['payment_transaction.id', 'payment_transaction.amount', 'payment_transaction.createdAt', 'payment_transaction.product'])
        .getMany();

      //Recorrer el arreglo de puntos por movimiento y agregarlo al otro array
      queryBuilderPaymentTransaction.forEach((element: any) => {
        //Crear un objeto para agregarlo al array
        console.log('element: ', element)
        const { amount, createdAt, product } = element;
        let obj = {
          points: amount,
          registration_date: createdAt,
          expiration_date: null,
          name: product
        };

        total_points.push(obj);
      });

      return {
        total: total_points.length,
        total_movement_points: total_points
      }
    }
    catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async ListPointsToBeAddressed(userId: any) {

    const queryBuilder = this.entityManager
      .createQueryBuilder()
      .select([
        'a.points as points',
        'b.name as event',
        `TO_CHAR(a.registration_date, 'DD/MM/YYYY') as registration_date`,
      ])
      .from(PointsEvents, 'a')
      .leftJoin(Event, 'b', 'b.id_event = a."eventIdEvent"')
      .leftJoin(EventsPointsSite, 'c', 'c.eventIdEvent = a."eventIdEvent"')
      .leftJoin(Site, 'd', 'd.idSite = a."siteIdSite"')
      .where('a.userId = :userId', { userId })
      .groupBy('a.points, b.name, a.registration_date')
      .andHaving(
        `EXTRACT(DAY FROM  CURRENT_DATE -(a.registration_date::date + (
          SELECT expire_time
          FROM expire_time_point
          WHERE create_at = (SELECT MAX(create_at) FROM expire_time_point)
      ) * INTERVAL '1 day')
        ) >= 2`,
      );
    const result = await queryBuilder.getRawMany();
    return result;
  }
}
