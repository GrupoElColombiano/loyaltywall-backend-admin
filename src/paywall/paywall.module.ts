import { Module } from '@nestjs/common';
import { PaywallService } from './paywall.service';
import { PaywallController } from './paywall.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Paywall, PaywallSchema } from './entities/paywall.schema';
import { Plan, PlanSchema } from './entities/plan.schema';
import { Segment, SegmentSchema } from './entities/segment.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/common/entity/event.entity';
import { Site } from 'src/common/entity/site.entity';

import { PointsEvents } from 'src/common/entity/points-events.entity';
import { EventsPointsSite } from 'src/common/entity/events-points-site.entity';
import { UserPlan } from 'src/common/entity/user-plan.entity';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [
    TypeOrmModule.forFeature([Event, PointsEvents, EventsPointsSite, Site, UserPlan]),
    MongooseModule.forFeature([
      { name: Paywall.name, schema: PaywallSchema },
      { name: Plan.name, schema: PlanSchema },
      { name: Segment.name, schema: SegmentSchema },
    ]),
    HttpModule
  ],
  controllers: [PaywallController],
  providers: [PaywallService],
  exports: [PaywallService],
})
export class PaywallModule {}
