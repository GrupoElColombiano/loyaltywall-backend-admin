import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Site } from '../../sites/entities/site.entity';
import { Category } from '../../category/entity/category.entity';
import { PlansProductCategory } from '../../common/entity/plans-products-categories.entity';
import { Plan } from '../../plans/entity/plan.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique identifier of the product' })
  idProduct: number;

  @Column({ length: 100 })
  @ApiProperty({ description: 'The name of the product' })
  name: string;

  @Column({ length: 255, nullable: true })
  @ApiProperty({
    description: 'The description of the product',
    required: false,
  })
  description?: string;

  @Column({ default: true })
  @ApiProperty({ description: 'Indicates if the product is active' })
  isActive: boolean;

  @Column({ default: false })
  @ApiProperty({ description: 'all_product si true se configura un plan acceso a to dos los productos del sitio' })
  all_product: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty({ description: 'The creation date of the product' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  @ApiProperty({ description: 'The last update date of the product' })
  updatedAt: Date;

  @ManyToOne(() => Site, site => site.products)
  @JoinColumn({ name: 'idSite' })
  site: Site;

  @OneToMany(() => Category, category => category.product)
  @JoinColumn({ name: 'idCategory' })
  category: Category[];

  @OneToMany(() => PlansProductCategory, plansProductCategory => plansProductCategory.product)
  @JoinColumn({ name: 'idPlansProductCategory' })
  plansProductCategory: PlansProductCategory[];

  @ManyToOne(() => Plan, product => product.products)
  @JoinColumn({ name: 'idPlan' })
  plan: Plan;
}
