import { Plan } from '../../plans/entity/plan.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('rates')
export class Rate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  time: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rate: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rate_special?: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rate_special_renewal?: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rate_renewal: number;

  @Column({ type: 'int' })
  duration: number;

  @Column({ type: 'boolean' })
  is_special: boolean;

  @Column({ type: 'date', nullable: true })
  date_start?: Date;

  @Column({ type: 'date', nullable: true })
  date_end?: Date;

  @ManyToOne(() => Plan, plan => plan.rates)
  @JoinColumn({ name: 'idPlan' })
  plan: Plan;
}
