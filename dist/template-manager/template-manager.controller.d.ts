import { TemplateManagerService } from './template-manager.service';
export declare class TemplateManagerController {
    private readonly templateManagerService;
    constructor(templateManagerService: TemplateManagerService);
    create(body: any): Promise<any>;
    findAll(query: any): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateTemplateDto: any): Promise<any>;
    activateTemplate(id: string, isActive: boolean): Promise<any>;
}
