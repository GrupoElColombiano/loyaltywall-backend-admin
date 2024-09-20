import { PlansProductCategory } from '../../common/entity/plans-products-categories.entity';
import { Product } from '../../product/entity/product.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
  JoinTable,
} from 'typeorm';
import { Category } from '../../category/entity/category.entity';
import { SitesPlan } from '../../common/entity/sites-plan.entity';
import { Plan } from '../../plans/entity/plan.entity';
import { PointValue } from '../../gamification/entities/point-value.entity';
import { ExpireTimePoint } from '../../gamification/entities/expire_point.entity';
import { Cluster } from '../../gamification/entities/cluster.entity';
import { Event } from '../../gamification/entities/event.entity';
import { PointsEvents } from '../../puntos_usuario/entity/points_events.entity';
import { PointsMovement } from '../../puntos_usuario/entity/points_movement.entity';
import { ClusterPenalization } from '../../gamification/entities/cluster_penalization.entity';
import { UserPoints } from '../../puntos_usuario/entity/user_points.entity';
import { EventCluster } from 'src/gamification/entities/event_cluster.entity';

@Entity()
export class Site {
  @PrimaryGeneratedColumn()
  idSite: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  url: string;

  @Column({ type: 'boolean', default: true, nullable: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;

  @OneToMany(() => Category, category => category.site)
  category: Category[];

  @OneToMany(() => PlansProductCategory, plansProductCategory => plansProductCategory.sites)
  plansProductCategory: PlansProductCategory[];

  @OneToMany(() => Product, product => product.site)
  products: Product[];

  @OneToMany(() => SitesPlan, sitesPlan => sitesPlan.site)
  sitesPlan: SitesPlan[];

  @OneToMany(() => Plan, plan => plan.site)
  @JoinColumn({ name: 'idPlan' })
  plan: Plan[];

  @OneToOne(() => PointValue, pointValue => pointValue.site)
  @JoinColumn({ name: 'idPointValue' })
  point_value: PointValue;

  @OneToMany(() => ExpireTimePoint, expireTimePoint => expireTimePoint.site)
  expire_time_point: ExpireTimePoint[];

  @ManyToMany(() => Cluster, cluster => cluster.sites)
  clusters: Cluster[];

  @ManyToMany(() => Event, event => event.sites, { nullable: true })
  events: Event[];

  @ManyToOne(() => PointsEvents)
  @JoinTable({
    name: 'points_events',
    joinColumn: { name: 'id_points_events', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id', referencedColumnName: 'id' },
  })
  pointsEvents: PointsEvents[];

  @ManyToOne(() => PointsMovement)
  @JoinTable({
    name: 'points_movement',
    joinColumn: { name: 'id_points_movement', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id', referencedColumnName: 'id' },
  })
  pointsMovement: PointsMovement[];

  @OneToMany(() => ClusterPenalization, clusterPenalization => clusterPenalization.site)
  clusterPenalization: ClusterPenalization[];

  @OneToMany(() => UserPoints, userPoints => userPoints.site)
  userPoints: UserPoints[];

  @OneToMany(() => EventCluster, eventCluster => eventCluster.site)
  @JoinColumn({ name: 'id_event_cluster' })
  event_clusters: EventCluster;
}
