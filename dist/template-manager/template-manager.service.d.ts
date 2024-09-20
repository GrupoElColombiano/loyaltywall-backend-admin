import { Model } from 'mongoose';
import { Template, TemplateDocument } from './chemma/template.schema';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
import { PlanTemplate } from 'src/plans/entity/plan-template.entity';
import { Repository } from 'typeorm';
export declare class TemplateManagerService {
    private templateModel;
    private readonly registerLogService;
    private readonly planTemplateRepository;
    constructor(templateModel: Model<TemplateDocument>, registerLogService: RegisterlogService, planTemplateRepository: Repository<PlanTemplate>);
    create(template: Template): Promise<Template>;
    findAll(query: any): Promise<any>;
    findOne(query: any): Promise<any>;
    update(id: string, template: Template): Promise<Template>;
    updateIsActive(id: string, isActive: boolean): Promise<Template>;
}
