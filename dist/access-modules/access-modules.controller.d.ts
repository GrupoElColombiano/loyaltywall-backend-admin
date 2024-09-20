import { AccessModulesService } from './access-modules.service';
export declare class AccessModulesController {
    private readonly accessModulesService;
    constructor(accessModulesService: AccessModulesService);
    getModulesStatusByRole(id: string): Promise<any>;
    getRoleModuleAction(role: string, body: any): Promise<any>;
    getPaywallModuleAction(moduleId: number, role: string): Promise<any>;
    getUpdatePaywallModuleAction(product: any, moduleId: string, role: string, isActive: string): Promise<any>;
    setUpdateRolModuleAction(moduleId: string, role: string, ActionRelationId: string): Promise<any>;
    getRolePaywallModulle(): Promise<any>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAccessModule: any): string;
    getModulesByRole(roleId: string): Promise<any[]>;
}
