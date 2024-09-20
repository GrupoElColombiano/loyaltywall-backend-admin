// paywall.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PaywallDataDocument, PaywallDataSchema } from './paywall-data.schema';

export type PaywallDocument = Document & Paywall;

@Schema()
export class Paywall {
  @Prop()
  uniqueId: string;

  @Prop()
  userType: string;

  @Prop()
  site: string;

  @Prop({ type: [PaywallDataSchema] }) // Utiliza PaywallDataSchema para especificar el tipo
  paywallData: PaywallDataDocument[]; // Declara paywallData como un arreglo de objetos PaywallData
}

export const PaywallSchema = SchemaFactory.createForClass(Paywall);
