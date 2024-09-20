// paywall-data.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaywallDataDocument = Document & PaywallData;

@Schema()
export class PaywallData {
  @Prop()
  identifier: string;

  @Prop()
  isAccessibleForFree: boolean;

  @Prop()
  createDate: number;

  @Prop()
  week: string;

  @Prop()
  category: string;

  @Prop()
  allProduct: boolean;
}

export const PaywallDataSchema = SchemaFactory.createForClass(PaywallData);
