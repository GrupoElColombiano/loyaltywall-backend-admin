// paywall-data.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  CategoryAccessDataDocument,
  CategoryAccDataSchema,
} from './category-access-data.schema';

export type PlanDataDocument = Document & PlanData;

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
  createdAt: string;

  @Prop()
  updatedAt: string;

  @Prop()
  all_product: boolean;
}

@Schema()
export class PlanData {
  @Prop()
  idPlansProductCategory: number;

  @Prop({ type: Product }) // Define "product" como un objeto de tipo Product
  product: Product;

  @Prop({ type: [CategoryAccDataSchema] }) // Utiliza PaywallDataSchema para especificar el tipo
  categorysAccess: CategoryAccessDataDocument[]; // Declara paywallData como un arreglo de objetos PaywallData
}

export const PlanDataSchema = SchemaFactory.createForClass(PlanData);
