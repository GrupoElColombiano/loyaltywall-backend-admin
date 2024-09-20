import { Module } from '@nestjs/common';
import { PuntosUsuarioController } from './puntos_usuario.controller';
import { PuntosUsuarioService } from './puntos_usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointsMovement } from './entity/points_movement.entity';
import { PointsEvents } from './entity/points_events.entity';
import { UserPoints } from './entity/user_points.entity';
import { UserAdminEntity } from '../users/entities/user.entity';
import { UserPlan } from 'src/common/entity/user-plan.entity';
import { RegisterLog } from 'src/registerlog/entity/register-log.entity';
import { RegisterlogModule } from 'src/registerlog/registerlog.module';
import { PaymentTransaction } from 'src/registerlog/entity/payment-log.entity';
import { EventsPointsSite } from 'src/common/entity/events-points-site.entity';
import { Site } from 'src/sites/entities/site.entity';
import { Event } from 'src/gamification/entities/event.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([
    PointsMovement,
    PointsEvents,
    UserPoints,
    UserAdminEntity,
    UserPlan,
    RegisterLog,
    PaymentTransaction,
    EventsPointsSite,
    Site,
    Event
  ]),
  RegisterlogModule,
  HttpModule,
],
  controllers: [PuntosUsuarioController],
  providers: [PuntosUsuarioService]
})
export class PuntosUsuarioModule {}
