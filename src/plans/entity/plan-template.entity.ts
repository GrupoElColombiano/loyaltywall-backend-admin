import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Plan } from '../../plans/entity/plan.entity';

@Entity('plan_template')
export class PlanTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column()
  id_template: string;

  @ManyToOne(() => Plan)
  @JoinColumn({ name: 'idPlan' })
  plan: Plan;
}
