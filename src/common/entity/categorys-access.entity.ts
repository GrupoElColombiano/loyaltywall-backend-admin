import { Entity, Column, ManyToOne, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { PlansProductCategory } from "../../common/entity/plans-products-categories.entity";
import { Category } from "../../category/entity/category.entity";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class CategorysAccess {

  @PrimaryGeneratedColumn()
  id: number;

  //Relacion con la tabla de category
  @ManyToOne(() => Category, category => category.categorysAccess)
  @JoinColumn({ name: 'idCategory' })
  category: Category;

  @ManyToOne(() => PlansProductCategory, plansProductCategory => plansProductCategory.idPlansProductCategory)
  @JoinColumn({ name: 'idPlansProductCategory' })
  plansProductCategory: PlansProductCategory;

  @Column({ nullable: true })
  amount: number;

  @Column({ default: false })
  unlimited: boolean;

  @Column({ nullable: true })
  frequency: string;

  @Column({ name: 'typeDuration', nullable: true })
  typeDuration: string;

  @Column({ nullable: true})
  duration: number;

}
