import { Module } from '@nestjs/common';
import { GamificationService } from './service/gamification.service';
import { GamificationController } from './controller/gamification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cluster } from './entities/cluster.entity';
import { PointValue } from './entities/point-value.entity';
import { Event } from './entities/event.entity';
import { ExpireTimePoint } from './entities/expire_point.entity';
import { Site } from 'src/sites/entities/site.entity';
import { EventCluster } from './entities/event_cluster.entity';
import { ClusterPenalization } from './entities/cluster_penalization.entity';
import { UserPoints } from 'src/puntos_usuario/entity/user_points.entity';
import { PointsEvents } from 'src/puntos_usuario/entity/points_events.entity';
import { EventsPointsSite } from 'src/common/entity/events-points-site.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    PointValue,
    Event,
    Cluster,
    ExpireTimePoint,
    Site,
    EventCluster,
    ClusterPenalization,
    UserPoints,
    PointsEvents,
    EventsPointsSite
  ])],
  controllers: [GamificationController],
  providers: [GamificationService],
})
export class GamificationModule { }
