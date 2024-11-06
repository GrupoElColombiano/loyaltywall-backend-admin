import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from './entity/plan.entity';
import { Subscription } from './entity/subscription.entity';

import { Category } from '../category/entity/category.entity';
import { PlansProductCategory } from '../common/entity/plans-products-categories.entity';
import { Rate } from 'src/common/entity/rate.entity';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlanVersion } from './schema/plan-version.schema';
import { PlanVersion as Version } from '../plans/entity/plan-versions.entity';
import { CategorysAccess } from 'src/common/entity/categorys-access.entity';
import { Segment } from 'src/common/entity/segment.entity';
import { UserPlan } from 'src/common/entity/user-plan.entity';
// import { PlanHistory } from './schema/plan-history.schema'
import { classToPlain } from 'class-transformer';

import { And, EntityManager, EntityRepository, In, Repository, DataSource } from 'typeorm';
import { getConnection } from 'typeorm'; // Asegúrate de importar la función necesaria
// import { Product } from 'src/product/entity/product.entity';
import { PlanTemplate } from './entity/plan-template.entity';
import { Template } from 'src/template-manager/chemma/template.schema';
import { PaywallService } from '../paywall/paywall.service';
import { Event } from 'src/common/entity/event.entity';
import { Site } from 'src/common/entity/site.entity';

import { PointsEvents } from 'src/common/entity/points-events.entity';

import { EventsPointsSite } from 'src/common/entity/events-points-site.entity';
import { color } from 'console-log-colors';
import { PlanHistory } from './schema/plan-history.schema';
import { PlanUserHistory } from './entity/plan_user_history.entity';


import { Paywall, PaywallDocument } from '../paywall/entities/paywall.schema';
import { PlanVersion as PplanVersion, PlanVerDocument } from '../paywall/entities/plan-version.schema';
import { Versioning } from '../paywall/entities/versioning.schema';
import { UserPlans, UserPlansDocument } from 'src/paywall/entities/user-plans.schema';
import { PlanData, PlanDataDocument, Product } from 'src/paywall/entities/plan-data.schema';
import { Plan as PlanMongo } from 'src/paywall/entities/plan.schema';

/*import {
  PaywallData,
  PaywallDataDocument,
  PaywallDataSchema,
} from '../paywall/entities/paywall-data.schema';*/

@Injectable()
export class PlansService {
  constructor(
    @InjectRepository(Plan) private readonly planRepository: Repository<Plan>,
    @InjectRepository(Subscription) private readonly subscriptionRepository: Repository<Subscription>,
    @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
    @InjectRepository(PlansProductCategory)
    private readonly plansProductCategoryRepository: Repository<PlansProductCategory>,
    @InjectRepository(Rate) private readonly rateRepository: Repository<Rate>,
    private readonly registerlogService: RegisterlogService,
    @InjectModel(PlanVersion.name) private readonly versionPlanModel: Model<PlanVersion>,
    @InjectModel(PlanMongo.name) private readonly planModel: Model<PlanMongo>,
    @InjectModel(PlanHistory.name) private readonly planHistoryModel: Model<PlanHistory>,
    @InjectRepository(CategorysAccess) private readonly categorysAccessRepository: Repository<CategorysAccess>,
    @InjectRepository(Segment) private readonly SegmentRepository: Repository<Segment>,
    //@InjectRepository(Product)
    //private readonly product: Repository<Product>,
    @InjectRepository(Version) private readonly version: Repository<Version>,
    @InjectRepository(UserPlan) private readonly userPlanRepository: Repository<UserPlan>,
    @InjectModel(Template.name) private readonly templateModel: Model<Template>,
    @InjectRepository(PlanTemplate) private readonly planTemplateRepository: Repository<PlanTemplate>,
    //  private readonly paywallService: PaywallService,
    @InjectRepository(Site)
    private readonly siteRpo: Repository<Site>,
    @InjectRepository(Event)
    private readonly eventsRpo: Repository<Event>,
    @InjectRepository(PointsEvents)
    private readonly pointsValueRepo: Repository<PointsEvents>,
    @InjectRepository(EventsPointsSite)
    private readonly eventsPointsSite: Repository<EventsPointsSite>,
    private entityManager: EntityManager,
    @InjectRepository(PlanUserHistory) private readonly planUserHistoryRepository: Repository<PlanUserHistory>,
    private readonly dataSource: DataSource,
    @InjectModel(Versioning.name) private versioningModel: Model<Versioning>,

  ) { }

  /**
   * Create a new plan.
   * @param plan - Plan data to create.
   * @returns {Promise<any>} A promise that resolves to the created plan.
   */
  async create(plan: any): Promise<any> {
    let newCategoriesPromises = [];
    try {
      // Verificar si ya existe un plan con el mismo nombre
      const planExists = await this.planRepository.findOne({
        where: { name: plan.name, idSite: plan.id},
      });
      console.log("🚀 ~ PlansService ~ create ~ planExists:", planExists)

      //Verifica si el plan existe y si se requiere activar el plan
      if (planExists && planExists?.isActive !== plan.isActive) {
        console.log("|||||||||||||");
        await this.planRepository.update(
          { idPlan: planExists?.idPlan },
          { isActive: plan.isActive }
        );
      }
      // Inicializar el objeto de plan editado
      const planEdited: any = {
        userType: plan.userType,
        name: plan.name,
        description: plan.description,
        isActive: plan.isActive,
        site: plan.idSite ? plan.idSite : 1,
      };
      console.log("🚀 ~ PlansService ~ create ~ planEdited: - 114 ", planEdited)
      // Si el userType es 'Anónimo' y isActive es true, desactivar otros planes 'Anónimos'
      if (plan.userType === 'Anónimo' && plan.isActive === true) {
        const response = await this.planRepository
          .createQueryBuilder()
          .update(Plan)
          .set({ isActive: false })
          .where('userType = :userType', { userType: 'Anónimo' })
          .andWhere('idPlan != :idPlan', { idPlan: planExists?.idPlan || '' })
          .execute();
        console.log(":: response - 124 ::", response);
      }

      // Si el userType es 'Registrado sin pago' y isActive es true, desactivar otros planes 'Registrado sin pago'
      if (plan.userType === 'Registrado sin pago' && plan.isActive === true) {
        const response = await this.planRepository
          .createQueryBuilder()
          .update(Plan)
          .set({ isActive: false })
          .where('userType = :userType', { userType: 'Registrado sin pago' })
          .andWhere('idPlan != :idPlan', { idPlan: planExists?.idPlan || '' })
          .execute();
        console.log(":: response - 135 ::", response);
      }

      // Guardar el nuevo plan en la base de datos
      // const newPlan = await this.planRepository.save(planEdited);
      // Mapear y guardar las configuraciones de categorias, planes y productos en plansProductCategories
      if (plan.categories && plan.categories.length > 0) {
        newCategoriesPromises = plan.categories.map(async (item: any) => {
          // console.log('===>>>', item)
          const planProductCategory: any = {
            plan: planExists?.idPlan,
            sites: item.sites,
            product: item.idProduct,
          };

          const idPlansProductCategory = await this.plansProductCategoryRepository.save(planProductCategory);
          // console.log('===>>>', idPlansProductCategory, item);

          const categorysAccess = {
            category: item.idCategory,
            plansProductCategory: idPlansProductCategory.idPlansProductCategory,
            amount: item.amount,
            unlimited: item.unlimited,
            frequency: item.frequency,
            typeDuration: item.typeDuration,
            duration: item.duration,
          }

          // console.log('categorysAccess', categorysAccess);

          const categorysAccessCreated = await this.categorysAccessRepository.save(categorysAccess);

        });
      }
      console.log("💊 plan.rates - 168 🧯", plan.rates)
      // Mapear y guardar las tarifas del plan
      const newRatesPromises = plan.rates.map(async (item: any) => {
        const newItems: any = {
          plan: planExists.idPlan,
          time: item.time,
          rate: item.rate,
          rate_special: item.rate_special,
          rate_special_renewal: item.rate_special_renewal,
          rate_renewal: item.rate_renewal,
          duration: item.duration,
          is_special: item.is_special,
          date_start: item.date_start,
          date_end: item.date_end,
          idPlan: planExists.idPlan,
        };
        console.log("🧯 newItems - 183 🧯", newItems)
        const rates = await this.rateRepository.save(newItems);
        console.log("🚀 ~ PlansService ~ newRatesPromises ~ rates: 185", rates)
        return rates;
      });

      // Esperar a que todas las promesas se resuelvan antes de continuar
      // await Promise.all([...newCategoriesPromises, ...newRatesPromises]);

      // Crear un registro de actividad
      const registerLog: any = {
        userId: 123,
        roleId: 456,
        activityType: 'create plan',
        description: 'User create to plan successfully.',
        affectedObject: 'plan',
        success: true,
        ipAddress: '192.168.1.1',
        userAgent: 'Mozilla/5.0',
        timestamp: '2023-09-13T12:34:56.789Z',
      };

      const registerLogCreated = await this.registerlogService.create(registerLog);

      return {
        message: 'Plan created successfully',
        newPlan: planExists,
        newRatesPromises,
        newCategoriesPromises,
      };
      // }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async createPlanAnonimo(plan: any): Promise<any> {
    //Verificar si el plan existe en la base de datos
    const planExists = await this.planRepository.findOne({
      where: { name: plan.name },
    });

    //Verificar si existe un plan con el mismo nombre
    if (planExists) {
      throw new NotFoundException(`Plan with name ${plan.name} already exists`);
    }

    // Inicializar el objeto de plan editado
    const planEdited: any = {
      userType: plan.userType,
      name: plan.name,
      description: plan.description,
      isActive: plan.isActive,
      site: plan.idSite ? plan.idSite : 1,
    };

    // Si el userType es 'Anónimo' y isActive es true, desactivar otros planes 'Anónimos'
    if (plan.userType === 'Anónimo' && plan.isActive === true) {
      await this.planRepository
        .createQueryBuilder()
        .update(Plan)
        .set({ isActive: false })
        .where('userType = :userType', { userType: 'Anónimo' })
        .execute();
    }

    // Si el userType es 'Registrado sin pago' y isActive es true, desactivar otros planes 'Registrado sin pago'
    if (plan.userType === 'Registrado sin pago' && plan.isActive === true) {
      await this.planRepository
        .createQueryBuilder()
        .update(Plan)
        .set({ isActive: false })
        .where('userType = :userType', { userType: 'Registrado sin pago' })
        .execute();
    }

    // Guardar el nuevo plan en la base de datos
    const newPlan = await this.planRepository.save(planEdited);

    // Mapear y guardar las configuraciones de productos y categorias en plansProductCategories
    const newCategoriesPromises = plan.products.map(async (item: any) => {
      const planProductCategory: any = {
        plan: newPlan.idPlan,
        sites: item.sites,
        product: item.idProduct,
      };

      const idPlansProductCategory = await this.plansProductCategoryRepository.save(planProductCategory);

      const categorysAccess = {
        category: item.idCategory,
        plansProductCategory: idPlansProductCategory.idPlansProductCategory,
        amount: item.amount,
        unlimited: item.unlimited,
        frequency: item.frequency,
        typeDuration: item.typeDuration,
        duration: item.duration,
      }

      const categorysAccessCreated = await this.categorysAccessRepository.save(categorysAccess);
    });

    return {
      message: 'Plan created successfully',
      newPlan,
    };
  }

  async getProductsCategoriesPlan(planId: number): Promise<any> {
    console.log("Executed getProducts categories")

    

    const result = await this.categorysAccessRepository
      .createQueryBuilder('a')
      .select([
        'a.id',
        'a.amount',
        'a.unlimited',
        'a.duration',
        'a.idCategory',
        'a.idPlansProductCategory',
        'b.name', // Category name
        'b.description', // Category description
        'b.rules', // Category rules
        'c.idProduct',
        'd.name', // Product name
        'd.description', // Product description
      ])
      .innerJoin('a.category', 'b')
      .innerJoin('a.plansProductCategory', 'c')
      .innerJoin('c.product', 'd')
      .where('c.idPlan = :planId', { planId })
      .getRawMany();

    console.log("🔥 ::result:: 🔥", JSON.stringify(result));

    

    if (result.length === 0) {
      throw new NotFoundException(`No products found for plan ID ${planId}`);
    }

    // Transformar los resultados en el formato deseado
    // const groupedResults = result.reduce(async(acc, row) => {
    //   const productId = row.idProduct;
    //   const product = acc.find(p => p.idProduct === productId);
    //   console.log("💊💊💊💊💊💊💊💊💊💊💊")
    //   let segments = [];
    //   console.log({ planId, categoryId: row.idCategory })
    //   try {
    //     console.log("1")
    //     const response = await this.SegmentRepository.find({
    //       where: {
    //         planId,
    //         categoryId: row.idCategory
    //       }
    //     });  
    //     console.log({ response });
    //     console.log("2")
    //   } catch (error) {
    //     console.log(color.red(`error - ${error} `))
    //   }
      
    //   console.log("🧯🧯🧯🧯🧯🧯")
    //   const categoryAccess = {
    //     id: row.a_id,
    //     amount: row.a_amount,
    //     unlimited: row.a_unlimited,
    //     duration: row.a_duration,
    //     idPlansProductCategory: row.idPlansProductCategory,
    //     category: {
    //       idCategory: row.idCategory,
    //       name: row.b_name,
    //       description: row.b_description,
    //       rules: row.b_rules,
    //     },
    //   };

    //   if (product) {
    //     product.category_access.push(categoryAccess);
    //   } else {
    //     acc.push({
    //       idProduct: productId,
    //       name: row.d_name,
    //       description: row.d_description,
    //       category_access: [categoryAccess],
    //     });
    //   }

    //   return acc;
    // }, []);

    const groupedResults = [];

    for (const row of result) {
      const productId = row.idProduct;
      const product = groupedResults.find(p => p.idProduct === productId);

      let segments = [];
      console.log({ planId, categoryId: row.idCategory });

      try {
        console.log('✅ ✅ ✅ ✅ ✅ ✅ ✅')
        segments = await this.SegmentRepository.find({
          where: {
            planId: Number(planId),
            categoryId: row.idCategory
          }
        });
      } catch (error) {
        console.log(color.red(`error 400 - ${error}`));
      }

      const categoryAccess = {
        id: row.a_id,
        amount: row.a_amount,
        unlimited: row.a_unlimited,
        duration: row.a_duration,
        idPlansProductCategory: row.idPlansProductCategory,
        segments,
        category: {
          idCategory: row.idCategory,
          name: row.b_name,
          description: row.b_description,
          rules: row.b_rules,
        },
      };

      if (product) {
        product.category_access.push(categoryAccess);
      } else {
        groupedResults.push({
          idProduct: productId,
          name: row.d_name,
          description: row.d_description,
          category_access: [categoryAccess],
        });
      }
    }


    return groupedResults;

  }

  async setProductCategoriesPlan(params: any): Promise<any> {
    console.log("==================== setProductCategoriesPlan ====================  ", JSON.stringify(params));
    const { categories, planId, name, description, userType, idSite, productId } = params;
    let alreadyLinkedCategories: any[] = [];
    let newCategories: any[] = [];
    let planMongo: any;
    // Ejecutar las operaciones dentro de una transacción
    return this.dataSource.transaction(async manager => {
      try {

        console.log(" ESTADO DEL ID DEL PLAN ACTUALMENTE ", planId);
        // Verificar si ya existe un plan con el mismo nombre
        if (!planId) {
          const existingPlan = await manager.findOne(Plan, { where: { name } });
          if (existingPlan) {
            throw new Error('El nombre del plan ya está en uso');
          }
        }

        // Crear y guardar el registro en PlansProductCategory
        const site = await manager.findOne(Site, { where: { idSite: idSite } });

        if (!site) {
          throw new Error('Site not found');
        }

        let plan: Plan;
        

        if (!planId) {
          // Crear un nuevo plan si planId es nulo
          const newPlan = new Plan();
          newPlan.name = name;
          newPlan.description = description;
          newPlan.isActive = false;  // O cualquier otro valor predeterminado
          newPlan.userType = userType;  // Agregar userType u otros parámetros adicionales aquí
          newPlan.site = idSite;
          newPlan.idSite = idSite;

          plan = await manager.save(newPlan);

          const newPlanMongo = {
            nameSite: site.name,
            usertype: userType,
            plansProductsCategory: [],
            planId: plan.idPlan
          }
          console.log({ newPlanMongo });
          planMongo = await this.planModel.create(newPlanMongo);
          console.log("🚀 ~ updatePlanFinal ~ plan:", JSON.stringify(planMongo));

        } else {
          // Buscar el plan existente
          plan = await manager.findOne(Plan, { where: { idPlan: planId } });

          if (!plan) {
            throw new Error('Plan not found');
          }
        }

        // Obtener el id del plan
        const newPlanId = planId ? planId : plan.idPlan;

        let plansProductCategories;

        if (planId) {
          // Obtener los idPlansProductCategory del plan solo si planId no es nulo
          plansProductCategories = await manager.find(PlansProductCategory, {
            where: {
              plan: { idPlan: planId },
              product: { idProduct: productId },
            },
            relations: ['plan', 'product'],
          });

          const idsPlansProductCategory = plansProductCategories.map(p => p.idPlansProductCategory);

          // Obtener los categorys_access para estos idsPlansProductCategory
          const existingCategoriesAccess = await manager.find(CategorysAccess, {
            where: { plansProductCategory: In(idsPlansProductCategory) },
            relations: ['category', 'plansProductCategory'],
          });

          const existingCategories = existingCategoriesAccess.map(ca => ca.category.idCategory);

          console.log("5))) Lista de existingCategories::: ", existingCategories);

          console.log(" categories:::: ", categories);
          // Verificar si las categorías ya están registradas
          for (const category of categories) {
            const categoryId = Number(category.category); // Convertir a número
            const matchingCategoryAccess = existingCategoriesAccess.find(ca => ca.category.idCategory === categoryId);

            if (matchingCategoryAccess) {
              alreadyLinkedCategories.push(matchingCategoryAccess);
            } else {
              newCategories.push(category);
            }
          }
        } else {
          newCategories = categories;
        }

        // Guardar las nuevas categorías
        for (const category of newCategories) {
          const newPlansProductCategory: any = {
            sites: site,
            plan: plan,
            product: productId,
          };

          const savedPlansProductCategory = await manager.save(PlansProductCategory, newPlansProductCategory);

          const categorysAccess = {
            category: category.category,
            plansProductCategory: savedPlansProductCategory.idPlansProductCategory,
            amount: category.amount,
            unlimited: category.limited,
            frequency: '',
            typeDuration: '',
            duration: category.duration,
          };

          const savedCategoryAccess = await manager.save(CategorysAccess, categorysAccess);
        }
        console.log("🚀 ~ setProductCategoriesPlan ~ plansProductCategories:", plansProductCategories)
        return {
          message: 'Operación completada',
          alreadyLinkedCategories,
          planId: newPlanId,
        };
      } catch (error) {
        console.log(" EL ERROR ACTUALLL ", error)
        return { message: error.message };
      }
    }).then(result => {
      console.log(" 1) EJECUTADA TODA ", result)
      console.log(" 2) EJECUTADA TODA::: planId ", result.planId);

      this.setPlanVersioning({ idPlan: result.planId, alreadyLinkedCategories: alreadyLinkedCategories, planMongo });

      return {
        message: 'Operación completada',
        alreadyLinkedCategories,
        planId: result.planId,
      };
    });
  }

  async deleteCategory(planId: number, idPlansProductCategory: number): Promise<void> {

    console.log("==== deleteCategory ==== ", planId);
    console.log("==== deleteCategory ==== ", idPlansProductCategory);
    console.log("==== deleteCategory ==== ");


    await this.dataSource.transaction(async manager => {
      // Eliminar registros en categorys_access
      await manager.delete(CategorysAccess, { plansProductCategory: idPlansProductCategory });

      // Eliminar registros en PlansProductCategory
      await manager.delete(PlansProductCategory, { idPlansProductCategory });

    });

    await this.setPlanVersioning({idPlan: planId, alreadyLinkedCategories:[]});
  }

  async deleteCategoryProduct(idPlan: number,  idProduct: number): Promise<void> {

    const plansProductCategories = await this.plansProductCategoryRepository.find({
      where: {
          plan: { idPlan: idPlan},
          product: { idProduct: idProduct }
      },
      relations: ['plan', 'product']
    });

    const idsPlansProductCategory = plansProductCategories.map(p => p.idPlansProductCategory);
    //const idsString = idsPlansProductCategory.join(', ');

    await this.dataSource.transaction(async manager => {
      // Eliminar registros en categorys_access
      await manager.delete(CategorysAccess, { plansProductCategory: In(idsPlansProductCategory) });
      // Eliminar registros en PlansProductCategory
      await manager.delete(PlansProductCategory, {

        plan: { idPlan: idPlan},
        product: { idProduct: idProduct }

      });

    });
    await this.setPlanVersioning({idPlan: idPlan, alreadyLinkedCategories:[]});
  }

  async updatePlanFinal(id: number, updatedPlan: any): Promise<any> {
    //Agregarle color red al console.log con la librería que instalé
    // console.log(color.red('updatedPlan'), updatedPlan)
    console.log("updatedPlan: " + JSON.stringify(updatedPlan));
    console.log("id: " + JSON.stringify(id));
    let newVersion: any;
    try {
      //Traer el plan que se va a actualizar
      const planToUpdate = await this.planRepository.createQueryBuilder('plan')
        .leftJoinAndSelect('plan.rates', 'rates')
        // .leftJoinAndSelect('plan.site', 'site')
        .leftJoinAndSelect('plan.plansProductsCategory', 'plansProductsCategory')
        .leftJoinAndSelect('plansProductsCategory.product', 'product')
        .leftJoinAndSelect('plansProductsCategory.sites', 'sites')
        .leftJoinAndSelect('plansProductsCategory.categorysAccess', 'categorysAccess')
        .leftJoinAndSelect('categorysAccess.category', 'category')
        .where('plan.idPlan = :id', { id })
        .getOne();

        //Versionar el plan, si el usertype es Suscrito
        if (planToUpdate.userType === 'Suscrito') {
          console.log(color.red('Plan que debo guardar en MongoDB'), planToUpdate)
        }

        if (!planToUpdate) {
          throw new NotFoundException(`Plan with ID ${id} not found`);
        }

        /**
         * ACÁ AGREGAR LO QUE LLEVO DE VERSIONAMIENTO DE PLANES
         */
        if (planToUpdate.userType === 'Suscrito') {
          console.log(color.green('Plan que debo guardar en MongoDB'), planToUpdate)
          //Guardar plan en el schema PlanHistoryModel
          const newPlanHistory = {
            idVersionPlan: planToUpdate.idVersionPlan,
            idPlan: planToUpdate.idPlan,
            description: planToUpdate.description,
            name: planToUpdate.name,
            userType: planToUpdate.userType,
            isActive: planToUpdate.isActive,
            createdAt: planToUpdate.createdAt,
            updatedAt: planToUpdate.updatedAt,
            rates: planToUpdate.rates,
            // site: planToUpdate.site,
            plansProductsCategory: planToUpdate.plansProductsCategory,
          }
          // const planHistory = await this.planHistoryModel.create(newPlanHistory);
          const planVersion: any = await this.versionPlanModel.create(newPlanHistory);
          // await this.versionPlanModel.create(newPlanHistory);
          // console.log(color.red('planHistory'), planHistory);

          //Guardar el _id de planHistory en una variable idVersionPlan
          // console.log(color.gray('planVersion'), planVersion);

          const idVersionPlan = planVersion._id.toString();

          const newVersionPlan: any = {
            name: planToUpdate.name,
            idVersionPlan: idVersionPlan,
            plan: planToUpdate.idPlan,
          }
          // const versionPlan = await this.version.save(newVersionPlan);
          
          // console.log(color.yellow("🚀 ~ updatePlanFinal ~ versionPlan:"), versionPlan)

          //Traer todos los usuarios ligados a ése plan de la tabla userPlanRepository
          const userPlan = await this.userPlanRepository.createQueryBuilder('userPlan')
            .leftJoinAndSelect('userPlan.plan', 'plan')
            .where('plan.idPlan = :id', { id })
            .getMany();
          console.log(color.yellow("userPlan"), userPlan);
          if(userPlan.length > 0) {
            this.setPlanVersioning({ idPlan: id });

            const idUsers = [];
            for (let i = 0; i < userPlan.length; i++) {
              idUsers.push(userPlan[i].idUser);
            }

            const newPlanUserHisty: any = idUsers.map(async (userId) => {
              const usersId: any = {
                userId: userId,
                planHistoryId: idVersionPlan.toString(),
              }
  
              await this.planUserHistoryRepository.save(usersId);
              
            });
            console.log(color.yellow("🚀 ~ constnewPlanUserHisty:any=idUsers.map ~ newPlanUserHisty:"), newPlanUserHisty)
            newVersion = planToUpdate.idVersionPlan + 1;
          }
        }
        //Editar los campos del plan con los valores proporcionados
        const planEditedOld: any = {
          name: updatedPlan.name,
          description: updatedPlan.description,
          isActive: updatedPlan.isActive,
          site: updatedPlan.idSite,
          idVersionPlan: newVersion,
        };

      // Si el userType es 'Anónimo' y isActive es true, desactivar otros planes 'Anónimos'
      if (updatedPlan.userType === 'Anónimo' && updatedPlan.isActive === true) {
        await this.planRepository
          .createQueryBuilder()
          .update(Plan)
          .set({ isActive: false })
          .where('userType = :userType', { userType: 'Anónimo' })
          .execute();
      }

      // Si el userType es 'Registrado sin pago' y isActive es true, desactivar otros planes 'Registrado sin pago'
      if (updatedPlan.userType === 'Registrado sin pago' && updatedPlan.isActive === true) {
        await this.planRepository
          .createQueryBuilder()
          .update(Plan)
          .set({ isActive: false })
          .where('userType = :userType', { userType: 'Registrado sin pago' })
          .execute();
      }
      // console.log('Plan listo para editar', planEditedOld)
      //Actualizar el plan en la base de datos
      const updatedPlanFinal = await this.planRepository.update(id, planEditedOld);
      console.log(color.yellow('updatedPlanFinal'), updatedPlanFinal)

      //Actualizar las tarifas del plan
      // console.log(color.red('TARIFAS AFUERA'), updatedPlan)
      if(updatedPlan.rates.length > 0) {
        //Eliminar todos los rates del plan, y crearlos nuevamente
        const deletedRates = await this.rateRepository.createQueryBuilder('rates')
          .delete()
          .from(Rate)
          .where('idPlan = :id', { id })
          .execute();
        console.log(color.yellow('deletedRates'), deletedRates)

          //Crear los rates nuevamente
          for(const rate of updatedPlan.rates) {
            const newRate: any = {
              time: rate.time,
              rate: rate.rate,
              rate_special: rate.rate_special,
              rate_special_renewal: rate.rate_special_renewal,
              rate_renewal: rate.rate_renewal,
              duration: rate.duration,
              is_special: rate.is_special,
              date_start: rate.date_start,
              date_end: rate.date_end,
              plan: id,
              idPlan: id
            }
            console.log(color.red('newRate'), newRate)

            const savedRate = await this.rateRepository.save(newRate);
            console.log(color.yellow('savedRate'), savedRate)
          }
      }

      if(updatedPlan.segments.length > 0) {
        function generateUUID() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0,
              v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          });
        }
        //Crear los rates nuevamente
        for (const segment of updatedPlan.segments) {
          console.log("🚀 ~ updatePlanFinal ~ segment:", segment)
          for (const category of segment.data) {
            console.log("🚀 ~ updatePlanFinal ~ category:", category)
            const newSegment: any = {
              id: generateUUID(),
              name: category.segment,
              value: category.segment,
              quantity: category.quantity,
              priority: category.priority,
              categoryId: segment.categoryId.toString(),
              planId: id,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            }
            console.log({ newSegment });
            // console.log(color.red('newRate'), newRate)
  
            const foundSegment = await this.SegmentRepository.findOne({
              where: { planId: id, categoryId: segment.categoryId, value: category.segment },
            });
            console.log({ foundSegment });
            if (!foundSegment) {
              try {
                const savedSegment = await this.SegmentRepository.save(newSegment);
                console.log(color.green('savedSegment'), savedSegment)
              } catch (error) {
                console.log(color.red('error - 771'), error);
              }
              
            } else {
              try {
                const response = await this.SegmentRepository.createQueryBuilder()
                  .update(Segment)
                  .set({
                    updatedAt: new Date().toISOString(),
                    quantity: category.quantity,
                    priority: category.priority
                  })
                  .where('userType = :userType', { userType: 'Anónimo' })
                  .andWhere('value = :value', { value: category.segment })
                  .andWhere('categoryId = :categoryId', { categoryId: segment.categoryId })
                  .execute();
                console.log(color.green('savedRate'), response);
              } catch (error) {
                console.log(color.red('error - 789'), error);
              }
            }
            // const savedSegment = await this.SegmentRepository.save(newSegment);
          }
        }
      }

      //Logica si updatedPlan.categories tiene longitud > 0 Eliminar
      // console.log(color.red('ELIMINANDO...'), updatedPlan.categories.length)
      if (updatedPlan.categories.length >= 0) {
        // console.log(color.yellow('ELIMINANDO...'))

        //Recorrer el planToUpdate.plansProductsCategory y eliminar los registros que coincidan con el id del plan, el id del producto y idSite
        for (const plansProductCategory of planToUpdate.plansProductsCategory) {
          // console.log(color.blue('PLAN A ACTUALIZAR'), planToUpdate.plansProductsCategory[i])
          const { sites, product, categorysAccess } = plansProductCategory;
          const productAsObject = product as unknown as { idProduct: number };
          // console.log(color.yellow('sites'), sites)
          // console.log(color.blue('product'), productAsObject.idProduct)
          // console.log(color.red('categorysAccess'), categorysAccess)

          //Capturar el idPlansProductCategory de planToUpdate.plansProductsCategory[i]
          const idPlansProductCategory = plansProductCategory.idPlansProductCategory;
          const idProduct: any = productAsObject.idProduct;
          const idSite = sites.idSite;

          //Recorrer el categorysAccess y eliminar los registros que coincidan con el id del idPlanProductCategory y el id del category_access
          // console.log('no ha ingresado!!!')
          if(categorysAccess.length > 0) {
            for (let j = 0; j < categorysAccess.length; j++) {
              const idCategoryAccess = categorysAccess[j].id;
              // console.log('acá ingresó!!', idCategoryAccess)
              const categorysAccessDelete = await this.categorysAccessRepository.createQueryBuilder('categorys_access')
                .where('categorys_access."id" = :idCategoryAccess', { idCategoryAccess })
                .andWhere('categorys_access."idPlansProductCategory" = :idPlansProductCategory', { idPlansProductCategory })
                .delete()
                .execute();
              // console.log(color.green('categorysAccessDelete'), categorysAccessDelete)
            }
          }

          //Eliminar los registros en plansProductCategory que coincidan con el idPlansProductCategory
          // console.log('por acá vamos mano')
          const deletedPlan = await this.plansProductCategoryRepository.
            createQueryBuilder('plansProductsCategory')
            .delete()
            .from(PlansProductCategory)
            .where('idPlansProductCategory = :idPlansProductCategory', { idPlansProductCategory })
            .execute();

          // console.log(color.green('deletedPlan'), deletedPlan)
        }
      }

      //Si updatedPlan.categories tiene longitud > 0 Insertar
      // console.log('UPDATED PLAN', updatedPlan)
      if(updatedPlan.categories.length > 0) {
        const { categories } = updatedPlan
      //  console.log(color.red('REGISTRANDO NUEVAMENTE...'), categories)

        //Recorrer updatedPlan.categories y guardar los registros en plansProductCategory y categorysAccess
        for(const category of categories) {
          const newPlansProductCategory: any = {
            sites: category.sites,
            plan: id,
            product: category.idProduct,
          }

          const savedPlansProductCategory = await this.plansProductCategoryRepository.save(newPlansProductCategory);

          const categorysAccess = {
            category: category.idCategory,
            plansProductCategory: savedPlansProductCategory.idPlansProductCategory,
            amount: category.amount,
            unlimited: category.unlimited,
            frequency: category.frequency,
            typeDuration: category.typeDuration,
            duration: category.duration,
          }
          // console.log(color.green('categorysAccess'), categorysAccess)
          const savedCategoryAccess = await this.categorysAccessRepository.save(categorysAccess);
          // console.log(color.green('savedCategoryAccess'), savedCategoryAccess)
        }
      }

      
      return {
        message: 'Plan updated successfully',
      };
    } catch {
      // throw new
    }
  }

  /**
   * Find all plans.
   * @returns {Promise<any>} A promise that resolves to a list of plans.
   */
  async findAllPlans(): Promise<any> {
    try {
      const plans = await this.planRepository.find();
      const totalPlans = await this.planRepository.count();
      return {
        data: plans,
        totalPlans,
      };
    } catch (error) { }
  }

  /**
   * Find all plans with pagination support.
   * @param page - Page number.
   * @param limit - Number of items per page.
   * @returns {Promise<any>} A promise that resolves to a paginated list of plans.
   */
  async findAll(page: number, limit: number): Promise<Plan[] | any> {
    try {
      const skip = (page - 1) * limit;
      const [plans, totalPlans] = await this.planRepository.findAndCount({
        skip,
        take: limit,
      });
      const totalPages = Math.ceil(totalPlans / limit);

      if (page > totalPages) {
        throw new NotFoundException('Number of page is not valid');
      }

      return {
        data: plans,
        totalPlans,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Find a plan by its ID.
   * @param id - Plan ID.
   * @returns {Promise<Plan>} A promise that resolves to the found plan.
   */
  async findOne(siteName: string, userId: string, id: any): Promise<Plan | any> {

    try {
      let planQueryBuilder = await this.planRepository
        .createQueryBuilder('plan');

      if (id == "Anónimo" || id == "Registrado") {
        planQueryBuilder = planQueryBuilder.where('plan.userType = :id', { id })
          .andWhere('site.name = :siteName', { siteName: siteName }) // Filtrar por el nombre del sitio
          .andWhere('plan.isActive = true');

      } else {
        planQueryBuilder = planQueryBuilder.where('plan.idPlan = :id', { id })
      }


      const plan = await planQueryBuilder
        .leftJoinAndSelect('plan.rates', 'rates')
        .leftJoinAndSelect('plan.site', 'site')
        .leftJoinAndSelect('plan.plansProductsCategory', 'plansProductsCategory')
        .leftJoinAndSelect('plansProductsCategory.product', 'product')
        .leftJoinAndSelect('plansProductsCategory.sites', 'sites')
        .leftJoinAndSelect('plansProductsCategory.categorysAccess', 'categorysAccess')
        .leftJoinAndSelect('categorysAccess.category', 'category')
        .getOne();
      if (!plan) {
        throw new NotFoundException(`Plan with ID ${id} not found`);
      }

      if (id == "Registrado") {
        this.registerPointsEvent({ userId: userId, nameSite: siteName, eventoId: 1 });
      }

      return {
        message: 'Plan retrieved successfully',
        plan,
      };

      return plan; // Devolver el plan mapeado con categorías y tarifas
    } catch (error) {

      throw new NotFoundException(error.message);

    }
  }

  async getPlanUser(planName: string, idUser: string): Promise<Plan | any> {

    try {

      const plan = await this.planRepository
        .createQueryBuilder('plan')
        .where('site.name = :name', { name: planName })
        .andWhere('userPlans.isActive = :isActive', { isActive: true }) // Filtra por isActive = true
        .andWhere('userPlans.idUser = :idUser', { idUser: idUser })
        .leftJoinAndSelect('plan.rates', 'rates')
        .leftJoinAndSelect('plan.site', 'site')
        .leftJoinAndSelect('plan.plansProductsCategory', 'plansProductsCategory')
        .leftJoinAndSelect('plansProductsCategory.product', 'product')
        .leftJoinAndSelect('plansProductsCategory.sites', 'sites')
        .leftJoinAndSelect('plansProductsCategory.categorysAccess', 'categorysAccess')
        .leftJoinAndSelect('categorysAccess.category', 'category')
        .leftJoinAndSelect('plan.userPlans', 'userPlans') // Agrega la relación con UserPlan
        .getOne();

        console.log(" EL PLAN ACTUAL ES ", plan)
      if (!plan) {
        throw new NotFoundException(`Plan with Name ${planName} and user idUser ${idUser} not found`);
      }

      this.registerPointsEvent({ userId: idUser, nameSite: planName, eventoId: 1 });
      return {
        message: 'Plan retrieved successfully',
        plan,
      };

    } catch (error) {
      throw new NotFoundException(error.message);
    }

  }

  /**
   * Update the isActive status of a plan.
   * @param id - Plan ID.
   * @param isActive - New isActive status.
   * @returns {Promise<Plan | any>} A promise that resolves to the updated plan.
   */
  async updateIsActive(id: number, isActive: any): Promise<Plan | any> {
    try {
      const planToUpdate = await this.planRepository.findOne({
        where: { idPlan: id },
      });

      if (!planToUpdate) {
        throw new NotFoundException(`Plan with ID ${id} not found`);
      }

      if (isActive === true) {
        //validar si userType es de typo Anónimo
        if (planToUpdate.userType === 'Anónimo') {
          await this.planRepository.createQueryBuilder()
            .update(Plan)
            .set({ isActive: false })
            .where('userType = :userType', { userType: 'Anónimo' })
            .execute();
        }

        //validar si userType es de typo Registrado sin pago
        if (planToUpdate.userType === 'Registrado sin pago') {
          await this.planRepository.createQueryBuilder()
            .update(Plan)
            .set({ isActive: false })
            .where('userType = :userType', { userType: 'Registrado sin pago' })
            .execute();
        }
      }

      // Actualizar el campo isActive con el nuevo valor
      planToUpdate.isActive = isActive;

      // Guardar los cambios en la base de datos
      const updatedPlan = await this.planRepository.save(planToUpdate);

      const registerLog: any = {
        "userId": 123,                // El ID del usuario afectado
        "roleId": 456,                // El ID del rol del usuario
        "activityType": "update status plan",      // El tipo de actividad (por ejemplo, "Inicio de sesión")
        "description": "User update status to plan successfully.", // Una descripción de la actividad
        "affectedObject": "plan",     // El objeto afectado (puede ser "User", "Document", etc.)
        "success": true,              // Si la actividad fue exitosa o no (true o false)
        "ipAddress": "192.168.1.1",  // La dirección IP del usuario
        "userAgent": "Mozilla/5.0",   // La información del agente de usuario del navegador
        "timestamp": "2023-09-13T12:34:56.789Z" // La marca de tiempo en formato ISO 8601
      }

      const registerLogCreated = await this.registerlogService.create(registerLog);

      return {
        message: 'Plan updated successfully',
        updatedPlan,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Find plans based on filtering criteria.
   * @param query - Filtering criteria.
   * @returns {Promise<Plan[]>} A promise that resolves to a list of filtered plans.
   */
  async findByFilter(query: any): Promise<Plan[]> {
    const { name, rate, idSite } = query;

    try {
      const queryBuilder = this.planRepository.createQueryBuilder('plan')
        .leftJoinAndSelect('plan.rates', 'rates').innerJoinAndSelect('plan.site', 'site')
        .where('site.idSite = :idSite', { idSite: idSite })
        .select(['plan.idPlan', 'plan.name', 'plan.isActive', 'plan.description', 'plan.userType', 'plan.idVersionPlan', 'site', 'rates']);

      if (name) {
        queryBuilder.andWhere('LOWER(plan.name) LIKE :name', {
          name: `%${name.toLowerCase()}%`,
        });
      }

      //Filtrar rate; rate es number
      if (rate) {
        queryBuilder.andWhere('rates.rate = :rate', { rate: rate });
      }

      const plans = await queryBuilder.getMany();
      return plans;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  //Unión entre findByFilter y findAll
  /**
   * Find plans based on filtering criteria with pagination support.
   * @param query - Filtering and pagination criteria.
   * @returns {Promise<any>} A promise that resolves to a paginated list of filtered plans.
   */
  async findByFilterAndPagination(query: any): Promise<any> {
    const categorys = [];
    const { name, rate, page, limit, idSite, idPlan } = query;

    try {
      const skip = (page - 1) * limit;
      const queryBuilder = this.planRepository
        .createQueryBuilder('plan')
        .leftJoinAndSelect('plan.plansProductsCategory', 'plansProductsCategory')
        .leftJoinAndSelect('plansProductsCategory.product', 'product')
        // .leftJoinAndSelect('plansProductsCategory.sites', 'sites')
        // .leftJoinAndSelect('plansProductsCategory.categorysAccess', 'categorysAccess')
        // .leftJoinAndSelect('categorysAccess.category', 'category')
        // .leftJoinAndSelect('plan.rates', 'rates')
        // .leftJoinAndSelect('plan.planVersions', 'planVersions')
        .where('plan.idSite = :idSite', { idSite: idSite })
        .skip(skip)
        .take(limit);

        // console.log( " queryBuilder::: "+ queryBuilder.getSql());
        if (name) {
          queryBuilder.andWhere('LOWER(plan.name) LIKE :name', {
            name: `%${name.toLowerCase()}%`,
          });
        }

        if (rate) {
          queryBuilder.andWhere('rates.rate = :rate', { rate: rate });
        }

        console.log(" LISTA DE PLANES ES ", idPlan);
        if (idPlan) {
          // Convertir el string de idPlan a un array
          const idPlanArray = idPlan.split(',').map(id => Number(id.trim()));
          queryBuilder.andWhere('plan.idPlan IN (:...idPlanArray)', { idPlanArray });
        }

        const [plans, totalPlans] = await queryBuilder.getManyAndCount();
        //Traer planes ligados a la tabla
        // const plansVerionados

        const totalPages = Math.ceil(totalPlans / limit);

        if (page > totalPages) {
          throw new NotFoundException('No se encontraron registros');
        }

        //Crear bucle for oara recorrer plans
        /*const planVersionado: any = [];
        for (let i = 0; i < plans.length; i++) {
          console.log('Plan version', plans[i].idPlan, plans[i].planVersions);
        if(plans[i].planVersions.length > 0) {
          for(let j = 0; j < plans[i].planVersions.length; j++) {
            // console.log('Plan version', plans[i].planVersions[j]);
            if(plans[i].planVersions[j].idVersionPlan !== null) {
              const idplanVersionado = plans[i].planVersions[j].idVersionPlan;
              // console.log('Id del Plan Versionado', plans[i].planVersions[j]);
              const promise = await this.versionPlanModel.findOne({ _id: "66212db6aa21cd075bb6b45f" }).exec();
              let x = 0;
              if(promise) {
                x = x + 1;
                // console.log('veces ingresadas', x)
                // console.log('Plan Versionado', promise);
                planVersionado.push(promise);
              }
            }
          }
        }
      }*/

      return {
        totalPlans: totalPlans ,
        data: [...plans],
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async createVersionPlan(plan: any): Promise<any> {
    try {
      const planCreated = await this.planRepository.findOne({
        where: { name: plan.name },
      });

      if (planCreated) {
        throw new NotFoundException(
          `Plan with name ${plan.name} already exists`,
        );
      }

      const planVersionCreated = await this.versionPlanModel.create(plan);

      return {
        message: 'Plan created successfully',
        planVersionCreated,
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  //Filtrar versionamiento de planes en PlansVersion por name, isActive, createdAt
  async findByFilterVersionPlan(query: any): Promise<any> {
    try {
      const { name, isActive, createdAt, skip, limit, idPlan } = query;

      const conditions: any = {}; // Objeto para almacenar las condiciones de búsqueda

      // Agregar condiciones según los parámetros proporcionados en la consulta
      if (idPlan !== undefined) conditions.idPlan = idPlan;
      if (createdAt !== undefined) conditions.createdAt = new Date(createdAt);
      if (isActive !== undefined) conditions.isActive = isActive;
      if (name !== undefined) conditions.name = { $regex: name, $options: 'i' };

      // Obtener los planes que coincidan con las condiciones de búsqueda y paginarlos.
      const [plans, totalPlans] = await Promise.all([
        this.versionPlanModel.find(conditions).skip(skip).limit(limit),
        this.versionPlanModel.countDocuments(conditions),
      ])

      const totalPages = Math.ceil(totalPlans / limit);

      if (skip > totalPlans) {
        throw new NotFoundException('No se encontraron registros');
      }

      return {
        data: plans,
        totalPlans,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  //Obtener todos los rates
  async findAllRates(): Promise<any> {
    try {
      const rates = await this.rateRepository.find();
      const totalRates = await this.rateRepository.count();
      return {
        data: rates,
        totalRates,
      };
    } catch (error) { }
  }

  //Obtener las configuración de planes con sus categorías y productos
  async findAllPlansWithCategoriesAndProducts(): Promise<any> {
    try {
      const plansProductsCategory = await this.plansProductCategoryRepository.createQueryBuilder('plansProductsCategory')
        .leftJoinAndSelect('plansProductsCategory.product', 'product')
        .leftJoinAndSelect('plansProductsCategory.sites', 'sites')
        .leftJoinAndSelect('plansProductsCategory.plan', 'plan')
        .leftJoinAndSelect('plansProductsCategory.categorysAccess', 'categorysAccess')
        .leftJoinAndSelect('categorysAccess.category', 'category')
        .addSelect(['product', 'sites', 'plan'])
        .getMany();

      const totalPlansProductsCategory = await this.plansProductCategoryRepository.count();
      return {
        data: plansProductsCategory,
        totalPlansProductsCategory,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  //Función para crear las configuraciones de planes con sus categorías y productos
  //Esta función se utiliza en el metodo de CREATE
  async transformDataToRequiredStructure(dataFromBackend: any) {
    const result = {
      products: [],
    };

    const productMap: Record<number, any> = {};

    dataFromBackend.forEach((item: any) => {
      const { idProduct, amount, unlimited, frequency, typeDuration, duration, idCategory } = item;

      if (productMap[idProduct]) {
        productMap[idProduct].category_access.push({
          amount,
          unlimited,
          frequency,
          typeDuration,
          duration,
          category: {
            idCategory: idCategory,
            name: "categoria prueba",
            description: "descruocuiob",
            rules: "miflelalslasa",
          },
        });
      } else {
        const newProduct = {
          product: {
            idProduct: idProduct,
            name: "Nombre del producto",
            description: "Descripción del producto",
            isActive: true,
            createdAt: "2023-08-11T02:47:30.682Z",
            updatedAt: "2023-08-11T02:47:30.682Z",
          },
          category_access: [
            {
              amount,
              unlimited,
              frequency,
              typeDuration,
              duration,
              category: {
                idCategory: idCategory,
                name: "categoria prueba",
                description: "descruocuiob",
                rules: "miflelalslasa",
              },
            },
          ],
        };
        productMap[idProduct] = newProduct;
        result.products.push(newProduct);
      }
    });

    return result;
  }

  async getVersionsPlan(idPlan: number): Promise<any> {
    try {
      const queryBuilder = this.version.createQueryBuilder('version')
        .where('versionamiento.plan = :idPlan', { idPlan: idPlan })
        .getMany();

      const results = await queryBuilder;

      //Por cada idMongo, buscar en la base de datos de mongo, y traer el objeto completo.
      const versions = results.map(async (item: any) => {
        const version = await this.versionPlanModel.findOne({
          where: { _id: item.idVersionPlan },
        });
        return version;
      });
      return {
        data: versions,
        totalPlans: results.length,
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  //Servicio para crear relación entre plan y template en la tabla planTemplateRepository
  async createPlanTemplate(body: any): Promise<any> {
    const { id_template, plans } = body;

    // Utiliza Promise.all para esperar a que todos los planes se procesen
    const savedPlanTemplates = await Promise.all(plans.map(async (plan: any) => {
      console.log('Plan a ligar con el template', plan.idPlan)
        const newPlanTemplate: any = {
            id_template: id_template,
            plan: { idPlan: plan.idPlan}, // Asegúrate de que esta es la propiedad correcta para el ID del plan
        };
        return await this.planTemplateRepository.save(newPlanTemplate);
    }));

    // console.log para ver todos los PlanTemplates guardados
    console.log('savedPlanTemplates', savedPlanTemplates);

    return {
        message: 'Plan y Template relacionados correctamente',
        data: savedPlanTemplates, // Devuelve todos los PlanTemplates guardados
    };
}

  //Obtener planes o por el idPlan o por el id_template
  async getPlanTemplate(id_template: string): Promise<any> {
    //Crear un array a retornar
    const plans = [];
    const queryBuilder = this.planTemplateRepository.createQueryBuilder('planTemplate')
      .leftJoinAndSelect('planTemplate.plan', 'plan')
      .where('planTemplate.id_template = :id_template', { id_template: id_template })
      .getMany();

    const results = await queryBuilder;

    //recorrer el array de reulst y guardar siempre el campo plan en el array a retornar plans
    results.map((item: any) => {
      plans.push(item.plan);
    });

    return {
      id_template: id_template,
      totalPlans: plans.length,
      plans: plans,
    }
  }

  async registerPointsEvent(obj: any): Promise<any> {

    console.log(" n==== registerPointsEvent ====== ")
    const { userId, nameSite, eventoId } = obj;
    console.log(" obj ", obj)
    let response = { permissiones: 0, plan: {} };
    // Obtener el evento con id 1 del sitio qhubobogota desde EventsPointsSite
    const eventoSitio = await this.entityManager
      .createQueryBuilder()
      .select([
        'c.*',
      ])
      .from(EventsPointsSite, 'c')
      // .innerJoinAndSelect('c.pointsEvents', 'pointsEvents')
      .where('c.siteIdSite IN (SELECT "idSite" FROM Site WHERE name = :siteName)', { siteName: nameSite })
      .andWhere('c.eventIdEvent = :eventId', { eventId: eventoId })
      .getRawOne();

      console.log(" === eventoSitio === ")
      console.log(eventoSitio)
    if (eventoSitio) {

      const paramsInsert = new PointsEvents();
      paramsInsert.userId = userId;
      paramsInsert.eventIdEvent = eventoId;
      paramsInsert.siteIdSite = 1;
      paramsInsert.points = eventoSitio.points;
      paramsInsert.registration_date = new Date();
      paramsInsert.expiration_date = new Date();

      console.log(" EL EVENTO DEL SITIO ES ESTE VE =====>>>> ", paramsInsert)
      if (
        (await this.pointsValueRepo.insert(paramsInsert))
          .raw > 0
      ) {
        console.log(" SE REGISTRO EFECTIVAMENTE ...")
        // response = {permissiones: 1,plan: planEntry,};
      } else {
        console.log(" NO SE REGISTRO EFECTIVAMENTE ...")

      }

    }
    return response;
  }

  async updateCategoryAccess(idPlansProductCategory: number, body: any): Promise<CategorysAccess> {

    const categoryAccess = await this.categorysAccessRepository.findOne({
      where: { plansProductCategory: { idPlansProductCategory } },
      relations: ['plansProductCategory'],
    });

    if (!categoryAccess) {
      throw new NotFoundException('Category access not found');
    }

    const updateData: Partial<CategorysAccess> = {
      amount: body.amount,
      unlimited: body.unlimited,
      duration: body.duration,
    };

    await this.categorysAccessRepository.update({ id: categoryAccess.id }, updateData);

    return this.categorysAccessRepository.findOne({ where: { id: categoryAccess.id } });
  }


  async updatePlanState(planId: number, body: any): Promise<void> {

    if (body.userType === 'Registrado sin pago') {
      var userType = body.userType;
      if(body.status){
        await this.planRepository.update(
          { userType, isActive: true,  site: { idSite: body.idSite } },
          { isActive: false },
        );
      }

      await this.planRepository.update(planId, { isActive: body.status });
    }

    if (body.userType === 'Anónimo') {
      // Primero, desactivamos todos los planes para userType 'anonimo'
      var userType = body.userType;
      if(body.status){
        await this.planRepository.update(
          { userType, isActive: true,  site: { idSite: body.idSite } },
          { isActive: false },
        );
      }

      await this.planRepository.update(planId, { isActive: body.status });

    }

    // Luego, activamos el plan con el id especificado

    if (body.userType === 'Suscrito') {
      console.log("================================================");
      console.log("=== Suscrito === ", body);
      // Primero, desactivamos todos los planes para userType 'anonimo'
      var userType = body.userType;
      // if(body.status){
        const response = await this.planRepository.update(
          { userType, idPlan: planId,  site: { idSite: body.idSite } },
          { isActive: body.status },
        );
        console.log("=== response === ", response);
      // }

      // await this.planRepository.update(planId, { isActive: body.status });

    }

  }

  // Se valida
  // 1) Si el plan se encuentra relacionado a una suscripcion se va y se valida si existe en mongo
  // se procede a Consultar si el plan con el id N ya se encuentra registrado en MONGO
  // si no existe en mongo se registra
  // si existe , se busca la version maxima que tiene entre todos los registros con id del plan actual
  // y se procede a realizar un nuevo registro del plan pero aumentando 1 la version
  // Si el plan no se encuentra relacionado a una suscripcion activa entonces no se versiona el plan

  async setPlanVersioning(body: any): Promise<Plan | any> {

    console.log(" ==== setPlanVersioning:::  body ", body);
    const { idPlan, alreadyLinkedCategories, planMongo } = body;

    try {
      let planQueryBuilder = await this.planRepository
        .createQueryBuilder('plan');

        planQueryBuilder = planQueryBuilder.where('plan.idPlan = :idPlan', { idPlan })

      const planCurrent = await planQueryBuilder
        .leftJoinAndSelect('plan.rates', 'rates')
        .leftJoinAndSelect('plan.site', 'site')
        .leftJoinAndSelect('plan.plansProductsCategory', 'plansProductsCategory')
        .leftJoinAndSelect('plansProductsCategory.product', 'product')
        .leftJoinAndSelect('plansProductsCategory.sites', 'sites')
        .leftJoinAndSelect('plansProductsCategory.categorysAccess', 'categorysAccess')
        .leftJoinAndSelect('categorysAccess.category', 'category')
        .getOne();

      console.log(" PLAN ACTUALIZADO Y CONSULTADO :::: ", planCurrent)
      if (!planCurrent) {
        throw new NotFoundException(`Plan with ID ${idPlan} not found`);
      }

      console.log(" EL ID DEL PLAN RECUPERADO OK ", idPlan)
      const subscription = await this.subscriptionRepository.createQueryBuilder('subscription')
      .leftJoinAndSelect('subscription.plan', 'plan')
      .where('subscription.id_plan = :idPlan', { idPlan })
      .andWhere('(subscription.cancellationStatus = 1 OR plan.isActive = true)')
      .andWhere('subscription.sysdate > CURRENT_TIMESTAMP')
      .orderBy('subscription.sysdate', 'DESC')
      .getOne();

      if(subscription){
        console.log(".:: subscription ::.", subscription);
        planCurrent.idVersionPlan += 1;

        // Actualizar idVersionPlan en la base de datos
        await this.planRepository
          .createQueryBuilder()
          .update(Plan)
          .set({ idVersionPlan: planCurrent.idVersionPlan }) // Usa el valor incrementado
          .where('idPlan = :idPlan', { idPlan })
          .execute();
      }

      this.setPlanVersioningMongo(planCurrent, idPlan, planCurrent.idVersionPlan);

      console.log(" LLEGANDO AQUI OK ")

      //Update plan in MongoDB
      if (planMongo) {
        const findPlanRecordInMongo = await this.planModel.updateOne(
          { planId: planMongo?.planId },
          { plansProductsCategory: planCurrent?.plansProductsCategory }
        )
        console.log("🚀 ~ setPlanVersioning ~ findPlanRecordInMongo:", findPlanRecordInMongo)
      }
      /*return {
        message: 'Plan retrieved successfully.',
        idPlan,
        planCurrent,
        alreadyLinkedCategories
      };*/

    } catch (error) {

      console.log(" EL ERROR  [setPlanVersioning]: ", error);
      throw new NotFoundException(error.message);

    }
  }


  async setPlanVersioningMongo(planCurrent: any, idPlan: number, versionPlan: number): Promise<any> {

    console.log(" ================ setPlanVersioningMongo =================");

    let permissions = { template: '', style: '', permissions: 0, pages: {} };

    const paywallEntry = await this.versioningModel.findOne({
      idPlan,
    });

    console.log(" START ", paywallEntry)
    console.log(" versionPlan::: ", versionPlan);
    if (!paywallEntry) {

      // If there is no entry for this combination of uniqueId and site, create a new one.
      this.versioningModel.create({
        idPlan,
        versionPlan,
        versioningData: planCurrent
      })

    } else {

      const paywallEntryCurrentMeta = await this.versioningModel.aggregate([
        {
          $match: {
            idPlan
          },
        },
        {
          $unwind: '$versioningData', // Unwind the paywallData array
        },
        {
          $match: {
            'versioningData.idPlan': planCurrent.idPlan
          },
        },
        {
          $project: {
            _id: 0,
            uniqueId: 1,
            userType: 1,
            site: 1,
            versioningData: 2,
          },
        },
      ]);

      if (paywallEntryCurrentMeta.length == 0) {

        paywallEntry.versionPlan = String(versionPlan)
        paywallEntry.versioningData.push({ ...planCurrent, createdAt: new Date() }); // Convert to PlanDocument
        await paywallEntry.save();

      } else {
        // Handle the case where the identifier already exists or the limit has been reached.
        permissions = {
          template: '',
          style: '',
          permissions: 1,
          pages: JSON.stringify(paywallEntry),
        };
      }
    }

    const paywallEntryCurrent = await this.versioningModel.findOne({
      idPlan
    });

    permissions.pages = JSON.stringify(paywallEntryCurrent);
    // Return the permissions data or whatever you need.
    console.log("==================== permissions ============================");
    console.log("🔥", JSON.stringify(permissions));
    return permissions;
  }


  async getPlanVersioning(idPlan: number): Promise<any> {

    const paywallEntryCurrent = await this.versioningModel.findOne({
      idPlan
    });

    console.log("====================== paywallEntryCurrent ==========================");
    console.log("🔥", JSON.stringify(paywallEntryCurrent));

    return  paywallEntryCurrent;

  }



  async getPlanSubscription(idPlan: number, idUser: number): Promise<any> {
    console.log("--- executed get plan subscription ---", { idPlan, idUser });

    try {
      const subscription = await this.subscriptionRepository.createQueryBuilder('subscription')
      .leftJoinAndSelect('subscription.plan', 'plan')
      .where('subscription.plan.idPlan = :idPlan', { idPlan })
      // .andWhere('(subscription.cancellationStatus = 1)')
      // .andWhere('subscription.sysdate > CURRENT_TIMESTAMP')
      .orderBy('subscription.sysdate', 'DESC')
      .getOne();
      console.log({ subscription });
      if(subscription){

        let planQueryBuilder = await this.planRepository
        .createQueryBuilder('plan');


        planQueryBuilder = planQueryBuilder.where('plan.idPlan = :idPlan', { idPlan })

        const planCurrent = await planQueryBuilder
        .leftJoinAndSelect('plan.rates', 'rates')
        .leftJoinAndSelect('plan.site', 'site')
        .leftJoinAndSelect('plan.plansProductsCategory', 'plansProductsCategory')
        .leftJoinAndSelect('plansProductsCategory.product', 'product')
        .leftJoinAndSelect('plansProductsCategory.sites', 'sites')
        .leftJoinAndSelect('plansProductsCategory.categorysAccess', 'categorysAccess')
        .leftJoinAndSelect('categorysAccess.category', 'category')
        // .leftJoinAndSelect('subscription.segmentCategoryPlan', 'segmentCategoryPlan')
        .leftJoinAndSelect('plan.segments', 'segments')
        .getOne();

        return planCurrent
      }

      return null

    }catch (error) {

      console.log(" EL ERROR  [setPlanVersioning]: ", error);
      throw new NotFoundException(error.message);

    }
  }

  

  async addSegment(body): Promise<any> {
    console.log(" executed AddSegment", body);
    const { name, value, quantity, priority, categoryId, planId } = body;
    //SegmentRepository

    function generateUUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
      });
  }
    
    if (name && value && quantity && priority && categoryId && planId) {
      let segment: Segment;

      const newSegment = new Segment();
      newSegment.id = name;
      // const id = 
      // const createResponse = await this.SegmentRepository()
    }
    throw new NotFoundException("Not found a field, please review the body");
  };
}

