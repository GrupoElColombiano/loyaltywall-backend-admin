import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { SitesPlan } from '../../common/entity/sites-plan.entity';
import { Site } from '../../sites/entities/site.entity';
import { Rate } from '../../common/entity/rate.entity';
import { PlansProductCategory } from '../../common/entity/plans-products-categories.entity';
import { Category } from '../../category/entity/category.entity';
import { Product } from '../../product/entity/product.entity';
import { PlanVersion } from './plan-versions.entity';
import { UserPlan } from '../../common/entity/user-plan.entity';
import { PlanTemplate } from '../../plans/entity/plan-template.entity';
import { Segment } from '../../common/entity/segment.entity'

@Entity({ name: 'plans' })
export class Plan {
  @PrimaryGeneratedColumn({ name: 'idPlan' })
  idPlan?: number;

  @Column({ name: 'idVersionPlan', default: 1 })
  idVersionPlan: number = 1;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  userType: string;

  @Column({ nullable: true })
  isActive: boolean;

  @Column({ nullable: false })
  idSite: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => PlansProductCategory, plansProductsCategory => plansProductsCategory.plan)
  plansProductsCategory: PlansProductCategory[];

  @OneToMany(() => SitesPlan, sitesPlan => sitesPlan.plan)
  sitesPlan: SitesPlan[];

  @ManyToOne(() => Site, site => site.plan)
  @JoinColumn({ name: 'idSite' })
  site: Site;

  @OneToMany(() => Rate, rate => rate.plan)
  rates: Rate[];

  @OneToMany(() => Product, product => product.plan)
  products: Product;

  @OneToMany(() => PlanVersion, planVersion => planVersion.plan)
  planVersions: PlanVersion[];

  @OneToMany(() => UserPlan, userPlan => userPlan.plan) // Establece la relación Uno a Muchos con la entidad UserPlan
  userPlans: UserPlan[]; // Campo para acceder a los objetos relacionados UserPlan

  @OneToMany(() => PlanTemplate, planTemplate => planTemplate.plan)
  planTemplates: PlanTemplate[];

  @OneToMany(() => Segment, segments => segments.plan)
  segments: Segment[];
}
