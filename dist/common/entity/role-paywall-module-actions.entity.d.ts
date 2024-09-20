import { PaywallModule } from './paywallModule.entity';
import { PaywallModuleActionRelation } from './paywall-module-actions-relations.entity';
export declare class RolePaywallModuleActionRelation {
    id: number;
    role: string;
    paywallModule: PaywallModule;
    paywallModuleActionRelation: PaywallModuleActionRelation;
}
