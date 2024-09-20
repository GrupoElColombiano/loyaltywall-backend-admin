// paywall.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PlanDataDocument, PlanDataSchema } from './plan-data.schema';
import { UserPlansDocument, UserPlansSchema } from './user-plans.schema';

export type PlanVerDocument = Document & PlanVersion;


// Esquema para Rate
@Schema()
export class Rate {
  @Prop()
  id: number;

  @Prop()
  time: string;

  @Prop()
  rate: string;

  @Prop()
  rate_special: string;

  @Prop()
  rate_special_renewal: string;

  @Prop()
  rate_renewal: string;

  @Prop()
  duration: number;

  @Prop()
  is_special: boolean;

  @Prop()
  date_start: string;

  @Prop()
  date_end: string;
}

export type RateDocument = Document & Rate;
export const RateSchema = SchemaFactory.createForClass(Rate);

@Schema()
export class PlanVersion {
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
  createdAt: string;

  @Prop()
  updatedAt: string;

  @Prop({ type: [PlanDataSchema] }) // Utiliza PaywallDataSchema para especificar el tipo
  plansProductsCategory: PlanDataDocument[]; // Declara paywallData como un arreglo de objetos PaywallData

  @Prop({ type: [RateSchema] }) // Incluye rates como un array de Rate
  rates: Rate[];
 // @Prop({ type: [UserPlansSchema] }) // Utiliza PaywallDataSchema para especificar el tipo
 // userPlans: UserPlansDocument[]; // Declara userPlans como un arreglo de objetos para guardar la version del plan y su fecha de expiracion
}

export const PlanVersionSchema = SchemaFactory.createForClass(PlanVersion);
