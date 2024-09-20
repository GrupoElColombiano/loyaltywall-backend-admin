// src/entities/category.entity.ts

import { PlansProductCategory } from '../../common/entity/plans-products-categories.entity';
import { Product } from '../../product/entity/product.entity';
import { Site } from '../../sites/entities/site.entity';
import { Plan } from '../../plans/entity/plan.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { CategorysAccess } from '../../common/entity/categorys-access.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn({ name: 'idCategory' })
  idCategory: number;

  @ManyToOne(() => Site, (site) => site.category)
  @JoinColumn({ name: 'idSite' })
  site: Site;

  @ManyToOne(() => Product, (product) => product.category)
  @JoinColumn({ name: 'idProduct' })
  product: Product;

  @OneToMany(() => CategorysAccess, (categorysAccess) => categorysAccess.category)
  @JoinColumn({ name: 'id' })
  categorysAccess: CategorysAccess[];

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  rules: string;

  //Una bandera para indicar que el artículo, evento o lugar es accesible de forma gratuita.
  @Column({ default: false })
  @ApiProperty({ description: 'Una bandera para indicar que el artículo, evento o lugar es accesible de forma gratuita.',
  })
  is_accessible_for_free: boolean;
}
