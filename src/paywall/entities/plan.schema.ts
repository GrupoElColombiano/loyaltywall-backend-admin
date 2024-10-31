// paywall.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PlanDataDocument, PlanDataSchema } from './plan-data.schema';
import { UserPlansDocument, UserPlansSchema } from './user-plans.schema';

export type PlanDocument = Document & Plan;

@Schema()
export class Plan {
  @Prop()
  planId: string;
  
  @Prop()
  nameSite: string;

  @Prop()
  usertype: string;

  @Prop({ type: [PlanDataSchema] })
  plansProductsCategory: PlanDataDocument[];

  @Prop({ type: [UserPlansSchema] })
  userPlans: UserPlansDocument[];
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
