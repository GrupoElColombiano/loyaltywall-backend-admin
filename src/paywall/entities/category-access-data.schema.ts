// paywall-data.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryAccessDataDocument = Document & CategoryData;

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

@Schema()
export class CategoryData {
  @Prop()
  id: number;

  @Prop()
  amount: number;

  @Prop()
  unlimited: boolean;

  @Prop()
  frequency: string;

  @Prop()
  typeDuration: string;

  @Prop()
  duration: number;

  @Prop({ type: Category }) // Define "product" como un objeto de tipo Product
  category: Category;
}

export const CategoryAccDataSchema = SchemaFactory.createForClass(CategoryData);
