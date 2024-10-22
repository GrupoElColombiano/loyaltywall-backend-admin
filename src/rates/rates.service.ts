import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from '../plans/entity/plan.entity';
import { Subscription } from '../plans/entity/subscription.entity';

import { Category } from '../category/entity/category.entity';
import { PlansProductCategory } from '../common/entity/plans-products-categories.entity';
import { Rate } from 'src/common/entity/rate.entity';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlanVersion } from '../plans/schema/plan-version.schema';
import { PlanVersion as Versionamiento } from '../plans/entity/plan-versions.entity';
import { CategorysAccess } from 'src/common/entity/categorys-access.entity';
import { UserPlan } from 'src/common/entity/user-plan.entity';

import { And, EntityManager, EntityRepository, In, Repository, DataSource } from 'typeorm';
import { getConnection } from 'typeorm'; // Asegúrate de importar la función necesaria
// import { Product } from 'src/product/entity/product.entity';
import { PlanTemplate } from '../plans/entity/plan-template.entity';
import { Template } from 'src/template-manager/chemma/template.schema';
import { PaywallService } from '../paywall/paywall.service';
import { Event } from 'src/common/entity/event.entity';
import { Site } from 'src/common/entity/site.entity';

import { PointsEvents } from 'src/common/entity/points-events.entity';

import { EventsPointsSite } from 'src/common/entity/events-points-site.entity';
import { color } from 'console-log-colors';
import { PlanHistory } from '../plans/schema/plan-history.schema';
import { PlanUserHistory } from '../plans/entity/plan_user_history.entity';


import { Paywall, PaywallDocument } from '../paywall/entities/paywall.schema';
import { PlanVersion as PplanVersion, PlanVerDocument } from '../paywall/entities/plan-version.schema';
import { Versioning } from '../paywall/entities/versioning.schema';
import { UserPlans, UserPlansDocument } from 'src/paywall/entities/user-plans.schema';
import { PlanData, PlanDataDocument, Product } from 'src/paywall/entities/plan-data.schema';

/*import {
  PaywallData,
  PaywallDataDocument,
  PaywallDataSchema,
} from '../paywall/entities/paywall-data.schema';*/

@Injectable()
export class RatesService {
  constructor(
    @InjectRepository(Plan) private readonly planRepository: Repository<Plan>,
    @InjectRepository(Subscription) private readonly subscriptionRepository: Repository<Subscription>,
    @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
    @InjectRepository(PlansProductCategory)
    private readonly plansProductCategoryRepository: Repository<PlansProductCategory>,
    @InjectRepository(Rate) private readonly rateRepository: Repository<Rate>,
    private readonly registerlogService: RegisterlogService,
    @InjectModel(PlanVersion.name) private readonly versionPlanModel: Model<PlanVersion>,
    @InjectModel(PlanHistory.name) private readonly planHistoryModel: Model<PlanHistory>,
    @InjectRepository(CategorysAccess) private readonly categorysAccessRepository: Repository<CategorysAccess>,
    //@InjectRepository(Product)
    //private readonly product: Repository<Product>,
    @InjectRepository(Versionamiento) private readonly versionamiento: Repository<Versionamiento>,
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

  async getRatesByPlan({ planId }): Promise<any> {
    console.log("Executed get rates by plan", planId);
    const rates = await this.rateRepository.createQueryBuilder('a')
    .select([
      'a.id',
      'a.time',
      'a.rate',
    ])
    .where('plan.idPlan = :idPlan', { planId })
    console.log("🔥 ::rates:: 🔥", { rates });

    const [ratesList, totalRates] = await this.rateRepository.findAndCount({
      where: { idPlan: planId }
    });
    console.log("🔥 ::ratesList:: 🔥", { totalRates,ratesList });

    return ratesList;
  }

}

