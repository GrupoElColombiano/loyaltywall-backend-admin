import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from './entity/plan.entity';
import { PlansProductCategory } from '../common/entity/plans-products-categories.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanVersion, PlanVersionSchema } from './schema/plan-version.schema';
import { Template, TemplateSchema } from 'src/template-manager/chemma/template.schema';
import { SitesPlan } from 'src/common/entity/sites-plan.entity';
import { RegisterlogModule } from 'src/registerlog/registerlog.module';
import { RegisterLog } from 'src/registerlog/entity/register-log.entity';
import { Rate } from 'src/common/entity/rate.entity';
import { Category } from 'src/category/entity/category.entity';
import { CategorysAccess } from 'src/common/entity/categorys-access.entity';
import { PlanVersion as PlansVersions } from './entity/plan-versions.entity';
import { Product } from './schema/plan-product-category.schema';
import { UserPlan } from 'src/common/entity/user-plan.entity';
import { PlanTemplate } from './entity/plan-template.entity';
import { Subscription } from './entity/subscription.entity';

// import { PaywallService } from '../paywall/paywall.service';
import { Event } from 'src/common/entity/event.entity';
import { Site } from 'src/common/entity/site.entity';
import { PointsEvents } from 'src/common/entity/points-events.entity';
import { EventsPointsSite } from 'src/common/entity/events-points-site.entity';
import { Versioning, VersioningSchema } from '../paywall/entities/versioning.schema';


import { Plan as planes } from './entity/plan.entity';
import { Plan as PlanPay, PlanSchema } from '../paywall/entities/plan.schema';
import { PlanHistory, PlanHistorySchema } from './schema/plan-history.schema';
import { PlanUserHistory } from './entity/plan_user_history.entity';
import { Segment } from 'src/common/entity/segment.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlanVersion.name, schema: PlanVersionSchema },
      { name: Template.name, schema: TemplateSchema },
      { name: Versioning.name, schema: VersioningSchema },
      { name: PlanPay.name, schema: PlanSchema },
      { name: PlanHistory.name, schema: PlanHistorySchema },
      // { name: }
    ]),
    TypeOrmModule.forFeature([
      planes,
      PlansProductCategory,
      SitesPlan,
      Rate,
      Category,
      CategorysAccess,
      PlansVersions,
      Product,
      UserPlan,
      PlanTemplate,
      Subscription,
      Event,
      PointsEvents,
      EventsPointsSite,
      Site,
      PlanUserHistory,
      Segment
    ]),
    RegisterlogModule,
  ],
  controllers: [PlansController],
  providers: [PlansService],
  exports: [PlansService]
})
export class PlansModule {}
