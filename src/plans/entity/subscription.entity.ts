import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Plan } from '../../plans/entity/plan.entity';
import { Rate } from '../../common/entity/rate.entity';


@Entity({ name: 'subscriptions' })
export class Subscription {
  @PrimaryGeneratedColumn({ name: 'id_subscription' })
  idSubscription?: number;

  @Column({ name: 'id_user', type: 'varchar', length: 255 })
  id_user: string;

  @ManyToOne(() => Plan, plan => plan.idPlan)
  @JoinColumn({ name: 'id_plan' })
  plan: Plan;  

  @Column({ name: 'id_version', type: 'int', default: 1 })
  id_version: number;

  @ManyToOne(() => Rate, rate => rate.id)
  @JoinColumn({ name: 'id_rate' })
  rate: Rate;

  @Column({ name: 'transacction', type: 'varchar', length: 255 })
  transacction: string;

  @CreateDateColumn({ name: 'sysdate', type: 'timestamp' })
  sysdate: Date;

  @Column({ name: 'cancellation_status', type: 'int', default: 1 })
  cancellationStatus: number;
}
