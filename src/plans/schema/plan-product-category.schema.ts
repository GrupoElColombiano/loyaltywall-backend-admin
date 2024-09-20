import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Category } from "./plan-version.schema";

class CategorysAccess {

  @Prop()
  id: number;

  @Prop()
  category: Category;

  @Prop()
  idPlansProductCategory: number;

  @Prop()
  amount: number | null;

  @Prop()
  unlimited: boolean;

  @Prop()
  frequency: string | null;

  @Prop()
  typeDuration: string | null;

  @Prop()
  duration: number | null;
}

class Site {
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

export class Plan {
  @Prop()
  idPlan: number;

  @Prop()
  idVersionPlan: number;

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
}

export class Product {
  @Prop()
  idProduct: number;

  @Prop()
  name: string;

  @Prop()
  description?: string;

  @Prop()
  isActive: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  plan: Plan;
}
