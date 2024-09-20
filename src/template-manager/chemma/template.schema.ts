import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TemplateDocument = HydratedDocument<Template>

@Schema()
export class Template {

    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    html: string

    @Prop()
    isActive: boolean

    @Prop()
    published: boolean

    @Prop()
    addPublished: Date

    @Prop()
    addTemplate: Date

    @Prop()
    updateTemplate: Date

    @Prop()
    idSite: number
}

export const TemplateSchema = SchemaFactory.createForClass(Template)
