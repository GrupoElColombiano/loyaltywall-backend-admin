// src/entities/plans_products_categories.entity.ts

import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn, ManyToMany, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Plan } from '../../plans/entity/plan.entity';
import { Site } from '../../sites/entities/site.entity';
import { Category } from '../../category/entity/category.entity';
import { Product } from '../../product/entity/product.entity';
import { CategorysAccess } from '../../common/entity/categorys-access.entity';

@Entity({ name: 'PlansProductCategory' })
export class PlansProductCategory {
  @PrimaryGeneratedColumn({ name: 'idPlansProductCategory' })
  idPlansProductCategory: number;

  @OneToMany(() => CategorysAccess, categorysAccess => categorysAccess.plansProductCategory)
  @JoinColumn({ name: 'id' })
  categorysAccess: CategorysAccess[];

  @ManyToOne(() => Site, site => site.plansProductCategory)
  @JoinColumn({ name: 'idSite' })
  sites: Site;

  @ManyToOne(() => Plan, plan => plan.plansProductsCategory)
  @JoinColumn({ name: 'idPlan' })
  plan: Plan;

  @ManyToOne(() => Product, product => product.idProduct)
  @JoinColumn({ name: 'idProduct' })
  product: Product;
}
