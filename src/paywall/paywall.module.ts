import { Module } from '@nestjs/common';
import { PaywallService } from './paywall.service';
import { PaywallController } from './paywall.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Paywall, PaywallSchema } from './entities/paywall.schema';
import { Plan, PlanSchema } from './entities/plan.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/common/entity/event.entity';
import { Site } from 'src/common/entity/site.entity';

import { PointsEvents } from 'src/common/entity/points-events.entity';
import { EventsPointsSite } from 'src/common/entity/events-points-site.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Event, PointsEvents, EventsPointsSite, Site]),
    MongooseModule.forFeature([
      { name: Paywall.name, schema: PaywallSchema },
      { name: Plan.name, schema: PlanSchema },
    ]),
  ],
  controllers: [PaywallController],
  providers: [PaywallService],
  exports: [PaywallService],
})
export class PaywallModule {}