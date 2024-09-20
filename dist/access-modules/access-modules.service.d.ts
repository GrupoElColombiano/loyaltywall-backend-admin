import { PaywallModuleAction } from 'src/common/entity/paywal-module-actions.entity';
import { PaywallModuleActionRelation } from 'src/common/entity/paywall-module-actions-relations.entity';
import { PaywallModule } from 'src/common/entity/paywallModule.entity';
import { RolePaywallModuleActionRelation } from 'src/common/entity/role-paywall-module-actions.entity';
import { RolePaywallModule } from 'src/common/entity/role-paywall-module.entity';
import { EntityManager, Repository } from 'typeorm';
export declare class AccessModulesService {
    private readonly paywallModuleRpo;
    private readonly rolePaywallModuleRpo;
    private readonly paywallModuleAction;
    private readonly paywallModuleActionRelation;
    private readonly rolePaywallModuleActionRelation;
    private entityManager;
    constructor(paywallModuleRpo: Repository<PaywallModule>, rolePaywallModuleRpo: Repository<RolePaywallModule>, paywallModuleAction: Repository<PaywallModuleAction>, paywallModuleActionRelation: Repository<PaywallModuleActionRelation>, rolePaywallModuleActionRelation: Repository<RolePaywallModuleActionRelation>, entityManager: EntityManager);
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAccessModule: any): string;
    getModulesStatusByRole(roleId: any): Promise<any>;
    getPaywallModuleAction(moduleId: number, role: string): Promise<any>;
    getModuleActionsWithRelations(moduleId: number, role: string): Promise<any[]>;
    getUpdatePaywallModuleAction(moduleId: string, role: string, isActiveP: string): Promise<any>;
    setUpdateRolModuleAction(moduleId: string, ActionRelationId: string, role: string): Promise<any>;
    getQueryRolModule(moduleId: string, role: string): Promise<any[]>;
    getQueryRolModuleAction(moduleId: string, ActionRelationId: string, role: string): Promise<any[]>;
    getRolePaywallModulle(roleId: any): Promise<any>;
    getRolePaywallModule(roleId: any, body: any): Promise<any>;
    getActiveModulesByRole(roleId: string): Promise<any[]>;
}
