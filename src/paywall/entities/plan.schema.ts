// paywall.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PlanDataDocument, PlanDataSchema } from './plan-data.schema';
import { UserPlansDocument, UserPlansSchema } from './user-plans.schema';

export type PlanDocument = Document & Plan;

@Schema()
export class Plan {
  @Prop()
  nameSite: string;

  @Prop()
  usertype: string;

  @Prop({ type: [PlanDataSchema] }) // Utiliza PaywallDataSchema para especificar el tipo
  plansProductsCategory: PlanDataDocument[]; // Declara paywallData como un arreglo de objetos PaywallData

  @Prop({ type: [UserPlansSchema] }) // Utiliza PaywallDataSchema para especificar el tipo
  userPlans: UserPlansDocument[]; // Declara userPlans como un arreglo de objetos para guardar la version del plan y su fecha de expiracion
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
