import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, ManyToOne, JoinColumn, JoinTable } from 'typeorm';
import { Plan } from './plan.entity';

@Entity('plan_versions') // Cambia el nombre de la tabla si es necesario
export class PlanVersion {
  @PrimaryGeneratedColumn()
  idPlanVersion: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  idVersionPlan: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ManyToOne(() => Plan, { eager: true })
  @JoinColumn({ name: 'idPlan' })
  plan: Plan;
}
