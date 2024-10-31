// paywall.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SegmentDocument = Document & Segment;

export type SegmentInfoDocument = Document & SegmentInfo;

@Schema()
export class SegmentInfo {
  @Prop()
  segment: string;

  @Prop()
  quantity: number;

  @Prop()
  priority: string;
}

export const SegmentInfoSchema = SchemaFactory.createForClass(SegmentInfo);


@Schema()
export class Segment {
  @Prop()
  planId: string;
  
  @Prop()
  categoryId: string;

  @Prop({ type: [SegmentInfoSchema] })
  segments: SegmentInfo[]; 

}

export const SegmentSchema = SchemaFactory.createForClass(Segment);
