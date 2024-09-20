import { Module } from '@nestjs/common';
import { TemplateManagerService } from './template-manager.service';
import { TemplateManagerController } from './template-manager.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Template, TemplateSchema } from './chemma/template.schema';
import { RegisterlogModule } from 'src/registerlog/registerlog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanTemplate } from 'src/plans/entity/plan-template.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
    {
      name: Template.name,
      schema: TemplateSchema
    }
  ]),
  RegisterlogModule,
  TypeOrmModule.forFeature([PlanTemplate])
],
  providers: [TemplateManagerService],
  controllers: [TemplateManagerController]
})
export class TemplateManagerModule {}
