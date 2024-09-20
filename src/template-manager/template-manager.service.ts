import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Template, TemplateDocument } from './chemma/template.schema';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
import { PlanTemplate } from 'src/plans/entity/plan-template.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TemplateManagerService {

  constructor(
    @InjectModel(Template.name)
    private templateModel: Model<TemplateDocument>,
    private readonly registerLogService: RegisterlogService,
    @InjectRepository(PlanTemplate) private readonly planTemplateRepository: Repository<PlanTemplate>,
  ) { }

  async create(template: Template): Promise<Template> {
    try {
      //Filtrar por nombre y idSite
      const templateExist = await this.templateModel.findOne({ name: template.name, idSite: template.idSite })

      if (templateExist) {
        throw new NotFoundException('Template already exist')
      }

      const createdTemplate = new this.templateModel(template)
      const templateSaved = await createdTemplate.save()
      return templateSaved
    } catch (error) {
      const registerlog: any = {
        "userId": 876,
        "roleId": 6,
        "activityType": "Error Template",
        "description": error,
        "affectedObject": "Create Template",
        "success": true,
        "ipAddress": "6585876587658765876",
        "userAgent": "mozilla/5.0",
        "timestamp": "2023-09-13T12:34:56.789Z"
      }

      const newRegisterLog = await this.registerLogService.create(registerlog)

      throw new NotFoundException(error.message)
    }
  }

  //filtrar page, limit, name y retornar data y total
  async findAll(query: any): Promise<any> {
    const idTemplates: any = [];
    const plansTemplates: any = [];
    const templatePlans: any = [];
    try {
        const { name, page, limit, idSite } = query
        const skip = (page - 1) * limit

        const conditions: any = {}

        if (idSite) {
            conditions.idSite = idSite
        }

        if (name) {
            conditions.name = { $regex: name, $options: 'i' }
        }

        const queryBuilder = this.templateModel
            .find(conditions)
            .skip(skip)
            .limit(limit)

        const total = await this.templateModel.countDocuments(conditions)

        const templates = await queryBuilder.exec()
        if (templates.length > 0) {
          for (let i = 0; i < templates.length; i++) {
            idTemplates.push(templates[i]._id)
          }
        }

        for (let i = 0; i < idTemplates.length; i++) {
          const idTemplateString = idTemplates[i].toString()
          const planTemplate = await this.planTemplateRepository.createQueryBuilder
          ('planTemplate')
          .leftJoinAndSelect('planTemplate.plan', 'plan')
          .where('planTemplate.id_template = :id_template', { id_template: idTemplateString })
          .getMany()

          plansTemplates.push({
            id_template: idTemplates[i],
            plans: planTemplate.map((plan) => plan.plan),
          })
        }

        templates.forEach(async (template) => {
          templatePlans.push({
            _id: template._id,
            name: template.name,
            description: template.description,
            html: template.html,
            isActived: template.isActive,
            published: template.published,
            idSite: template.idSite,
            plans: plansTemplates?.reduce((acc, plan) => {
              if (template._id.toString() === plan.id_template.toString()) {
                // Si plan.plans es un array con elementos, agregarlos al acumulador
                if (plan.plans && plan.plans.length > 0) {
                  acc = acc.concat(plan.plans); // Añadir los planes al acumulador
                }
              }
              return acc; // Devolver el acumulador actualizado
            }, []),
          })
          // plansTemplates.forEach((planTemplate) => {
          //   if (template._id.toString() === planTemplate.id_template.toString()) {
          //     templatePlans.push({
          //       plans: planTemplate.plans,
          //     })
          //   }
          // })
        })

        return {
          totalTemplates: total,
          data: templatePlans,
        }
    } catch (error) {}
  }

  //Filtrar por idSite y name
  async findOne(query: any): Promise<any> {
    try {
      const { idSite, name } = query

      // Creamos un objeto vacío para las condiciones de búsqueda
      const conditions: any = {}

      //Agregar condición si se proporciona el valor para 'idSite'
      if (idSite) {
        conditions.idSite = idSite
      }

      // Agregamos la condición de búsqueda solo si se proporciona el valor para 'name'
      if (name) {
        conditions.name = { $regex: name, $options: 'i' }
      }

      const template = await this.templateModel.findOne(conditions)

      return template
    } catch {
      throw new NotFoundException('Template not found')
    }
  }

  //Servicio para editar template
  async update(id: string, template: Template): Promise<Template> {
    try {
      const templateExist = this.templateModel.findById(id)

      if (!templateExist) {
        throw new NotFoundException('Template not found')
      }

      //Actualizar template
      const planEdited = this.templateModel.findByIdAndUpdate(id, template, { new: true })

      return planEdited
    } catch (error) {}
  }


  async updateIsActive(id: string, isActive: boolean): Promise<Template> {
    try {
      const updatedTemplate = await this.templateModel.findByIdAndUpdate(
        id,
        { isActive },
        { new: true }
      );

      if (!updatedTemplate) {
        throw new NotFoundException('Template not found');
      }

      return updatedTemplate;
    } catch (error) {
      console.error('Error en updateIsActive: ', error);
      throw new NotFoundException(error.message);
    }
  }

}
