// paywall.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PlanVerDocument, PlanVersionSchema } from './plan-version.schema';

export type PlanVersionDocument = Document & Versioning;

@Schema()
export class Versioning {
  @Prop()
  idPlan: string;

  @Prop()
  versionPlan: string;

  @Prop({ type: [PlanVersionSchema] }) // Utiliza PaywallDataSchema para especificar el tipo
  versioningData: PlanVerDocument[]; // Declara paywallData como un arreglo de objetos PaywallData
}

export const VersioningSchema = SchemaFactory.createForClass(Versioning);
