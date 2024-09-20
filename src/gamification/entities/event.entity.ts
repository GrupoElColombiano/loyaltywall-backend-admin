import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Cluster } from '../entities/cluster.entity';
import { Site } from '../../sites/entities/site.entity';
import { EventCluster } from './event_cluster.entity';
import { PointsEvents } from '../../puntos_usuario/entity/points_events.entity';
import { UserPoints } from '../../puntos_usuario/entity/user_points.entity';

@Entity('event')
export class Event {
  @PrimaryGeneratedColumn()
  id_event: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  description: string;

  @Column({ default: 0 })
  points: number;

  @Column({ default: 0 })
  event_repeats?: number;

  @Column({ default: 0 })
  porcentual_value?: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  update_at: Date;

  @ManyToMany(() => Cluster, cluster => cluster.events)
  clusters: Cluster[];

  @ManyToMany(() => Site, site => site.events, { nullable: true })
  sites: Site[];

  @OneToMany(() => EventCluster, event_cluster => event_cluster.events)
  @JoinColumn({ name: 'id_event_cluster' })
  event_cluster: EventCluster[];

  @ManyToOne(() => PointsEvents)
  points_events: PointsEvents[];

  @OneToMany(() => UserPoints, user_points => user_points.event)
  @JoinColumn({ name: 'id_user_points' })
  user_points: UserPoints[];
}
