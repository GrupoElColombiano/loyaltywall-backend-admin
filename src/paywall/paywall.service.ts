import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaywallDto } from './dto/create-paywall.dto';
import { UpdatePaywallDto } from './dto/update-paywall.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
 
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/common/entity/event.entity';
import { Site } from 'src/common/entity/site.entity';

import { PointsEvents } from 'src/common/entity/points-events.entity';
import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { EventsPointsSite } from 'src/common/entity/events-points-site.entity';
import { UserPlan } from 'src/common/entity/user-plan.entity';
// import { PaywallDocument } from './entities/paywall.model';
import { Paywall, PaywallDocument } from './entities/paywall.schema';
import { Plan, PlanDocument } from './entities/plan.schema';
import { Segment, SegmentDocument } from './entities/segment.schema';

import {
  PaywallData,
  PaywallDataDocument,
  PaywallDataSchema,
} from './entities/paywall-data.schema';

@Injectable()
export class PaywallService {
  constructor(
    @InjectRepository(UserPlan) 
    private readonly userPlanRepository: Repository<UserPlan>,
    @InjectRepository(Site)
    private readonly siteRpo: Repository<Site>,
    @InjectRepository(Event)
    private readonly eventsRpo: Repository<Event>,
    @InjectRepository(PointsEvents)
    private readonly pointsValueRepo: Repository<PointsEvents>,
    @InjectRepository(EventsPointsSite)
    private readonly eventsPointsSite: Repository<EventsPointsSite>,
    private entityManager: EntityManager,
    @InjectModel(Paywall.name) private paywallModel: Model<PaywallDocument>,
    @InjectModel(Plan.name) private planModel: Model<PlanDocument>,
    @InjectModel(Segment.name) private segmentModel: Model<SegmentDocument>,
  ) {}

  create(createPaywallDto: CreatePaywallDto) {
    return 'This action adds a new paywall';
  }

  findAll() {
    return `This action returns all paywall`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paywall`;
  }

  update(id: number, updatePaywallDto: UpdatePaywallDto) {
    return `This action updates a #${id} paywall`;
  }

  remove(id: number) {
    return `This action removes a #${id} paywall`;
  }

  async addMetadataPaywall(obj: any): Promise<any> {
    /*let permissions = { template: '', style: '', permissiones: 0, pages: {} };
    const template =
      "<div id='miModal' class='modal'>" +
      "<div class='modal-content'>" +
      "<span class='close' onclick='cerrarModal()'>&times;</span>" +
      '<p>Debe aquirir un plan para el sitio</p>' +
      "<div class='color-box red'>Plan 1</div>" +
      "<div class='color-box green'>Plan 2</div>" +
      "<div class='color-box blue'>Plan 3</div>" +
      '</div>' +
      '</div>';
    const style = ` 
      .color-box {
        width: 31%;
        height: 100px;
        display: inline-block;
        margin-right: 10px;
      }
      .red {
        background-color: red;
      }
      .green {
        background-color: green;
      }
      .blue {
        background-color: blue;
      }
    `;

    const metadata = obj.metadata;
    const uniqueId = obj.uniqueId;
    const keyData = 'paywall-' + obj.site;

    await this.redis.get(keyData + '-' + uniqueId, (error, resredis) => {
      if (error == null) {
        if (resredis === null) {
          // console.log("this.redis ", this.redis);
          // this.redis.set('key', JSON.stringify(obj));

          this.redis.set(
            keyData + '-' + uniqueId,
            JSON.stringify({
              paywall: [
                {
                  cromaId: metadata.cromaId,
                  headline: metadata.headline,
                  articleUrl: metadata.articleUrl,
                  datePublished: metadata.datePublished,
                  articleSection: metadata.articleSection,
                },
              ],
            }),
          );
        } else if (resredis.toString() !== 'undefined') {
          const objJsonParameter = JSON.parse(resredis.toString());
          const existingCromaIds = objJsonParameter['paywall'].map(
            (item) => item.cromaId,
          );

          if (objJsonParameter['paywall'].length <= 3) {
            // Verifica si cromaId ya existe en el arreglo
            if (!existingCromaIds.includes(metadata.cromaId)) {
              objJsonParameter['paywall'].push({
                cromaId: metadata.cromaId,
                headline: metadata.headline,
                articleUrl: metadata.articleUrl,
                datePublished: metadata.datePublished,
                articleSection: metadata.articleSection,
              });
              this.redis.set(
                keyData + '-' + uniqueId,
                JSON.stringify(objJsonParameter),
              );
            }
            permissions = {
              template: '',
              style: '',
              permissiones: 0,
              pages: {},
            };
          } else {
            permissions = {
              template: template,
              style: style,
              permissiones: 1,
              pages: JSON.stringify(objJsonParameter),
            };
            console.log(
              'El cromaId ya existe en el arreglo, no se registra de nuevo.',
            );
          }
        } else {
          this.redis.set(
            keyData + '-' + uniqueId,
            JSON.stringify({
              paywall: [
                {
                  cromaId: metadata.cromaId,
                  headline: metadata.headline,
                  articleUrl: metadata.articleUrl,
                  datePublished: metadata.datePublished,
                  articleSection: metadata.articleSection,
                },
              ],
            }),
          );
          permissions = { template: '', style: '', permissiones: 0, pages: {} };
        }
      } else {
        console.log('OCURRIO UN ERROR !!! ', error);
      }
    });

    return permissions;*/
  }

  async addMetadataPaywallMongo(obj: any): Promise<any> {

    console.log(" ================ addMetadataPaywallMongo =================");
    const registrado = "Registrado";
    const anonimo = "Anónimo";  

    let permissions = { template: '', style: '', permissiones: 0, pages: {} };

    const { metadata, uniqueId, userType, site } = obj;

    const paywallEntry = await this.paywallModel.findOne({
      uniqueId,
      userType,
      site,
    });

    console.log(" EMPIEZA ", paywallEntry)
    if (!paywallEntry) {
      // Si no existe una entrada para esta combinación de uniqueId y sitio, crea una nueva.
      await this.paywallModel.create({
        uniqueId,
        userType,
        site,
        paywallData: [
          {
            identifier: metadata.identifier,
            isAccessibleForFree: metadata.isAccessibleForFree,
            createDate: metadata.createDate,
            week: metadata.week,
            category: metadata.category,
            allProduct: metadata.allProduct
          },
        ],
      });

      console.log(" EL USER TYPE ES ", userType)
        console.log(" EL USER TYPE ES registrado:: ", registrado)

      if( userType != anonimo ){
        this.registerPointsEvent( { userId:uniqueId, nameSite: site, eventoId: 2 } );
      }
    } else {

      console.log(" EL REGISTRO ES ESTE VE:::: ")
      const paywallEntryCurrentMeta = await this.paywallModel.aggregate([
        {
          $match: {
            uniqueId,
            userType,
            site,
          },
        },
        {
          $unwind: '$paywallData', // Desenrollar el array paywallData
        },
        {
          $match: {
            'paywallData.identifier': metadata.identifier,
            'paywallData.week': metadata.week,
          },
        },
        {
          $project: {
            _id: 0,
            uniqueId: 1,
            userType: 1,
            site: 1,
            paywallData: 2,
          },
        },
      ]);
      console.log('paywallEntryCurrentMeta ', paywallEntryCurrentMeta);

      if (paywallEntryCurrentMeta.length == 0) {
        // Crear una instancia del modelo PaywallData
        // Crear una instancia de PaywallData
        const newData = new PaywallData();
        newData.identifier = metadata.identifier;
        newData.isAccessibleForFree = metadata.isAccessibleForFree;
        newData.createDate = metadata.createDate;
        newData.week = metadata.week;
        newData.category = metadata.category;
        newData.allProduct= metadata.allProduct
        paywallEntry.paywallData.push(newData as PaywallDataDocument); // Realizar la conversión
        await paywallEntry.save();

        console.log(" EL USER TYPE ES ", userType)
        console.log(" EL USER TYPE ES registrado:: ", registrado)

        if( userType != anonimo ){
          this.registerPointsEvent( { userId:uniqueId, nameSite: site, eventoId: 2 } );
        }
       

      } else {
        // Si el cromaId ya existe o el límite se ha alcanzado, puedes manejarlo como desees.
        console.log(
          'El cromaId ya existe en el arreglo o se ha alcanzado el límite.',
        );
        permissions = {
          template: '',
          style: '',
          permissiones: 1,
          pages: JSON.stringify(paywallEntry),
        };
      }
    }

    const paywallEntryCurrent = await this.paywallModel.findOne({
      uniqueId,
      userType,
      site,
    });
    
    permissions.pages = JSON.stringify(paywallEntryCurrent);
    // Devuelve los datos de permisos o lo que desees.
    return permissions;
  }

  async getMetadataPaywall(
    uniqueId: string,
    userType: string,
    site: string,
    isAccessibleForFree: boolean,
    amount: number,
    category: string,
    duration: number,
    unlimited: boolean,
    allProduct: boolean,
    identifier: number,
  ): Promise<any> {
    const permissions = {
      template: '',
      style: '',
      avalaible: 0,
      pages: {},
      unlimited,
    };

    // Obtener el timestamp actual en milisegundos
    const fechaActualEnMilisegundos = Date.now();
    // Crear un objeto de fecha a partir de la fecha actual
    const fechaActual = new Date(fechaActualEnMilisegundos);

    // Establecer la hora, minutos y segundos a 23:59:59
    fechaActual.setHours(23, 59, 59, 999);
    const timestampHasta = fechaActual.getTime();

    // Crear un objeto de fecha a partir de la fecha actual
    const fechaActualInit = new Date(fechaActualEnMilisegundos);

    // Establecer la hora, minutos, segundos y milisegundos a 0 para obtener el comienzo del día
    fechaActualInit.setHours(0, 0, 0, 0);
    const timestampDesde = fechaActualInit.getTime();

    // Obtener el timestamp de la fecha actual menos 7 días
    const durationParam = duration * 24 * 60 * 60 * 1000;
    const timestampSemanaAnterior = timestampDesde - durationParam;

    // Obtener el timestamp de la fecha actual menos 6 días (menos un día de la semana anterior)
    const timestampSemanaAnteriorMenosUnDia =
      timestampSemanaAnterior + 1 * 24 * 60 * 60 * 1000;

    // Obtener los timestamps para las fechas de inicio y fin en milisegundos
    const desdeFecha = timestampSemanaAnteriorMenosUnDia;
    const hastaFecha = timestampHasta;

    console.log('======= getMetadata ======== ');
    console.log('======= getMetadata ======== ');
    console.log('======= getMetadata ======== ');
    console.log('uniqueId::: ', uniqueId);
    console.log('usertype::: ', userType);
    console.log('site::: ', site);
    console.log(' durationParam ', durationParam);
    console.log(' timestampSemanaAnterior ', timestampSemanaAnterior);
    console.log('category::: ', category);
    console.log('amount::: ', amount);
    console.log('allProduct::: ', allProduct);
    console.log( ' identifier:::  ', identifier);
    

    // eslint-disable-next-line no-var
    var avalaible = 0;

    const paywallEntryCurrent = await this.paywallModel.aggregate([
      {
        $match: {
          uniqueId,
          userType,
          site,
        },
      },
      {
        $unwind: '$paywallData', // Desenrollar el array paywallData
      },
      {
        $match: {
          'paywallData.createDate': {
            $gte: desdeFecha,
            $lte: hastaFecha,
          },
        },
      },
      {
        $project: {
          _id: 0,
          uniqueId: 1,
          userType: 1,
          site: 1,
          paywallData: 2,
        },
      },
    ]);

    console.log(' ======>>> paywallEntryCurrent <<<<===', paywallEntryCurrent);
    if (paywallEntryCurrent) {
      // Filtrar el arreglo por el rango de fechas
      const metaLastWeek = paywallEntryCurrent;
      console.log('metaLastWeek ', metaLastWeek);
      const categoryIsAccesibleFreeCiclica = metaLastWeek.filter(
        (element) => element.paywallData.category === category,
      ).length;

      const categoryIsAccesibleSubscribedCiclica = metaLastWeek.filter(
        (element) => element.paywallData.category === category,
      ).length;

      console.log('isAccessibleForFree ', isAccessibleForFree);
      if (String(isAccessibleForFree).toLowerCase() == 'true') {
        console.log(
          '===== categoryIsAccesibleFreeCiclica ===== ',
          categoryIsAccesibleFreeCiclica,
        );

        // eslint-disable-next-line no-var
        avalaible = amount - categoryIsAccesibleFreeCiclica;

        console.log('1) avalaible ', avalaible);
        console.log('2) categoryIsAccesible.amount ', amount);

        if (avalaible > 0) {
        }
      }

      console.log('isAccessibleForFree ', isAccessibleForFree);
      if (String(isAccessibleForFree).toLowerCase() === 'false') {
        console.log(
          '===== categoryIsAccesibleSubscribedCiclica ===== ',
          categoryIsAccesibleSubscribedCiclica,
        );

        // eslint-disable-next-line no-var
        avalaible = amount - categoryIsAccesibleSubscribedCiclica;

        console.log('3) avalaible ', avalaible);
        console.log('4) categoryIsAccesible.amount ', amount);

        if (avalaible > 0) {
        }
      }
      console.log('ENTRO POR AQUIII ');
      // permissions.avalaible = avalaible;
    } else {
      console.log('ENTRO POR ESTA BNIENNN  ');
      // permissions.avalaible = amount;
    }
    console.log(' ======>>> paywallEntryCurrent <<<<===', paywallEntryCurrent);
    /*if (paywallEntryCurrent) {
      // Filtrar el arreglo por el rango de fechas
      const metaLastWeek = paywallEntryCurrent;
      console.log('metaLastWeek ', metaLastWeek);

      const categoryOrIdentifier =  (String(allProduct).toLowerCase() === 'true') ? 'category' : 'paywallData.category';
      const valueToValidate = (String(allProduct).toLowerCase() === 'true') ? category : identifier;


      const categoryIsAccesibleFreeCiclica = metaLastWeek.filter(
        (element) => element.paywallData[categoryOrIdentifier] === valueToValidate// element.paywallData.category === category,
      ).length;

      const categoryIsAccesibleSubscribedCiclica = metaLastWeek.filter(
        (element) => element.paywallData[categoryOrIdentifier] === valueToValidate//element.paywallData.category === category,
      ).length;

      console.log('isAccessibleForFree ', isAccessibleForFree);
      console.log(' categoryIsAccesibleFreeCiclica:::: ===>>> ', categoryIsAccesibleFreeCiclica);
      if (String(isAccessibleForFree).toLowerCase() == 'true') {
        console.log(
          '===== categoryIsAccesibleFreeCiclica ===== ',
          categoryIsAccesibleFreeCiclica,
        );

        // eslint-disable-next-line no-var
        avalaible = amount - categoryIsAccesibleFreeCiclica;

        console.log('1) avalaible ', avalaible);
        console.log('2) categoryIsAccesible.amount ', amount);

        if (avalaible > 0) {
        }
      }

      console.log('isAccessibleForFree ', isAccessibleForFree);
      if (String(isAccessibleForFree).toLowerCase() === 'false') {
        console.log(
          '===== categoryIsAccesibleSubscribedCiclica ===== ',
          categoryIsAccesibleSubscribedCiclica,
        );

        // eslint-disable-next-line no-var
        avalaible = amount - categoryIsAccesibleSubscribedCiclica;

        console.log('3) avalaible ', avalaible);
        console.log('4) categoryIsAccesible.amount ', amount);

        if (avalaible > 0) {
        }
      }
      console.log('ENTRO POR AQUIII ');
      // permissions.avalaible = avalaible;
    } else {
      console.log('ENTRO POR ESTA BNIENNN  ');
      // permissions.avalaible = amount;
    }*/

    permissions.avalaible = avalaible;
    permissions.unlimited = unlimited;
    // permissions.pages = JSON.stringify(paywallEntryCurrent);
    // Devuelve los datos de permisos o lo que desees.
    return permissions;
  }

  async addPlanPaywallMongo(obj: any): Promise<any> {
    
    console.log(" DIOS ES BUENO AMEN ", obj)
    let response = { permissiones: 0, plan: {} };
    const { plan, nameSite, usertype } = obj;

    console.log('nameSite::: ', nameSite);
    console.log('usertype::: ', usertype);
    console.log('PLAN ACTUAL ASI QUE PILAS PUES ::: ', plan);
    const planEntry = await this.planModel.findOne({ nameSite, usertype });
    console.log('planEntry::: ', planEntry);
    if (!planEntry) {
      // Si no existe una entrada para esta combinación de uniqueId y sitio, crea una nueva.
      await this.planModel.create({
        nameSite,
        usertype,
        plansProductsCategory: plan.plansProductsCategory,
        userPlans: plan.userPlans,
        // userPlans
      });
    } else {
      console.log('El plan ya existe en el arreglo');
      response = {
        permissiones: 1,
        plan: planEntry,
      };
    }

    return response;
  }

  async registerPointsEvent(obj: any): Promise<any> {

    const { userId, nameSite, eventoId } = obj;
    let response = { result: false, event: {} };
    let statusRegisterUser = false
    // Obtener el evento con id 1 del sitio qhubobogota desde EventsPointsSite
    const eventoSitio =  await this.entityManager
      .createQueryBuilder()
      .select([
        'c.*',
      ])
      .from(EventsPointsSite, 'c')
      // .innerJoinAndSelect('c.pointsEvents', 'pointsEvents')
      .where('c.siteIdSite IN (SELECT "idSite" FROM Site WHERE name = :siteName)', { siteName: nameSite })
      .andWhere('c.eventIdEvent = :eventId', { eventId: eventoId })
      .getRawOne(); 

      if( eventoId == 6){

        const pointsEventCurrent =  await this.entityManager
        .createQueryBuilder()
        .select([
          'c.*',
        ])
        .from(PointsEvents, 'c')
        // .innerJoinAndSelect('c.pointsEvents', 'pointsEvents')
        .where('c.siteIdSite IN (SELECT "idSite" FROM Site WHERE name = :siteName)', { siteName: nameSite })
        .andWhere('c.eventIdEvent = :eventId', { eventId: eventoId })
        .andWhere('c.userId = :userId', { userId: userId })
        .getRawOne(); 


        if(pointsEventCurrent){
          statusRegisterUser = true
        }

      }

      console.log(" eventoSitio ", eventoSitio)
      if(eventoSitio){

        
        const paramsInsert = new PointsEvents();
        paramsInsert.userId = userId;
        paramsInsert.eventIdEvent = eventoId;
        paramsInsert.siteIdSite = 1;
        paramsInsert.points = eventoSitio.points;
        paramsInsert.registration_date = new Date();
        paramsInsert.expiration_date = new Date();

        console.log(" statusRegisterUser ", statusRegisterUser);
        if(!statusRegisterUser){
          if ((await this.pointsValueRepo.insert(paramsInsert)).raw.length > 0) {
            response = {result: true, event: eventoSitio};
          }
        }
        

      }

      return response;
  }

  async getPlanByUserId(obj: any): Promise<any> {
    const { userId } = obj;
    if (userId) {
      const result = await this.userPlanRepository
        .createQueryBuilder('userPlan')
        .where('userPlan.id_user = :idUser', { idUser: userId })
        .andWhere('userPlan.is_active = :isActive', { isActive: true })
        .getOne();

      return result;
    } 
    throw new NotFoundException("The userId field was not found");
  }

  async getPlanInfo(obj: any): Promise<any> {
    const { planId } = obj;
    if (planId) {
      const planEntry = await this.planModel.findOne({ planId });
      return planEntry;
    } 
    throw new NotFoundException("The planId field was not found");
  }

  async getSegmentInfo(obj: any): Promise<any> {
    const { planId, categoryId } = obj;
    if (planId && categoryId) {
      const segmentEntry = await this.segmentModel.findOne({ planId, categoryId });
      return segmentEntry;
    }
    throw new NotFoundException("The planId field or categoryId was not found");
  }

}
