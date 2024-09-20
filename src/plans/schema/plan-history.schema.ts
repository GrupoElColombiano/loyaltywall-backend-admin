// entities.module.ts

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Rate {
  @Prop()
  id: number;

  @Prop()
  time: string;

  @Prop({ type: Types.Decimal128 })
  rate: string; // MongoDB Decimal128, ajustado para NestJS

  @Prop({ type: Types.Decimal128 })
  rate_special: string;

  @Prop({ type: Types.Decimal128 })
  rate_special_renewal: string;

  @Prop({ type: Types.Decimal128 })
  rate_renewal: string;

  @Prop()
  duration: number;

  @Prop()
  is_special: boolean;

  @Prop()
  date_start: Date;

  @Prop()
  date_end: Date;
}

export const RateSchema = SchemaFactory.createForClass(Rate);

@Schema()
export class Product {
  @Prop()
  idProduct: number;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  isActive: boolean;

  @Prop()
  all_product: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

@Schema()
export class Category {
  @Prop()
  idCategory: number;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  rules: string;

  @Prop()
  is_accessible_for_free: boolean;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

@Schema()
export class Site {
  @Prop()
  idSite: number;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  url: string;

  @Prop()
  isActive: boolean;

  @Prop()
  createAt: Date;

  @Prop()
  updateAt: Date;
}

export const SiteSchema = SchemaFactory.createForClass(Site);

@Schema()
export class PlansProductsCategory {
  @Prop()
  idPlansProductCategory: number;

  @Prop({ type: Types.ObjectId, ref: 'Product' })
  product: Product;

  @Prop({ type: [Types.ObjectId], ref: 'Site' })
  sites: Site[];

  @Prop({ type: [Types.ObjectId], ref: 'Category' })
  categorysAccess: Category[];
}

export const PlansProductsCategorySchema = SchemaFactory.createForClass(PlansProductsCategory);

@Schema()
export class PlanHistory {
  @Prop()
  idVersionPlan: number;

  @Prop()
  idPlan: number;

  @Prop()
  description: string;

  @Prop()
  name: string;

  @Prop()
  userType: string;

  @Prop()
  isActive: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  // @Prop({ type: [Types.ObjectId], ref: 'Rate' })
  // rates: Rate[];

  // @Prop({ type: Types.ObjectId, ref: 'Site' })
  // site: Site;

  // @Prop({ type: [Types.ObjectId], ref: 'PlansProductsCategory' })
  // plansProductsCategory: PlansProductsCategory[];
}

export const PlanHistorySchema = SchemaFactory.createForClass(PlanHistory);
