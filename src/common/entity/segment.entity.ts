import { Entity, Column, ManyToOne, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Plan } from "src/plans/entity/plan.entity";

@Entity({ name: 'segment_category_plan' })
export class Segment {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ default: false })
  value: string;

  @Column({ nullable: false })
  categoryId: string;

  @Column({ nullable: false })
  planId: number;

  @Column({ nullable: false})
  quantity: number;

  @Column({ nullable: false})
  priority: number;

  @Column({ nullable: false })
  createdAt: string;

  @Column({ nullable: false })
  updatedAt: string;

  @ManyToOne(() => Plan, plan => plan.segments)
  @JoinColumn({ name: 'planId' })
  plan: Plan;

}