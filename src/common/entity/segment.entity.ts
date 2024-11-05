import { Entity, Column, ManyToOne, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { PlansProductCategory } from "../../common/entity/plans-products-categories.entity";
import { Category } from "../../category/entity/category.entity";
import { Plan } from "src/plans/entity/plan.entity";
import { ApiProperty } from '@nestjs/swagger';


@Entity({ name: 'segment_category_plan' })
export class Segment {

  @PrimaryGeneratedColumn()
  id: string;

  // //Relacion con la tabla de category
  // @ManyToOne(() => Category, category => category.categorysAccess)
  // @JoinColumn({ name: 'idCategory' })
  // category: Category;

  // @ManyToOne(() => PlansProductCategory, plansProductCategory => plansProductCategory.idPlansProductCategory)
  // @JoinColumn({ name: 'idPlansProductCategory' })
  // plansProductCategory: PlansProductCategory;

  @Column({ nullable: false })
  name: string;

  @Column({ default: false })
  value: string;

  @Column({ nullable: false })
  categoryId: string;

  @Column({ nullable: false })
  planId: number;

  @ManyToOne(() => Plan, plan => plan.segments)
  @JoinColumn({ name: 'planId' })
  plan: Plan;

  @Column({ nullable: false})
  quantity: number;

  @Column({ nullable: false})
  priority: number;

  @Column({ nullable: false })
  createdAt: string;

  @Column({ nullable: false })
  updatedAt: string;

}