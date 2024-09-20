// paywall-data.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserPlansDocument = Document & UserPlans;

@Schema()
export class UserPlans {
  @Prop()
  id: number;

  @Prop()
  idUser: string;

  @Prop()
  idPlan: number;

  @Prop()
  isActive: boolean;

  @Prop()
  dateExpiredPlan: string;

  @Prop()
  dateInitPlan: string;

  @Prop()
  idVersion: string;
}

export const UserPlansSchema = SchemaFactory.createForClass(UserPlans);
