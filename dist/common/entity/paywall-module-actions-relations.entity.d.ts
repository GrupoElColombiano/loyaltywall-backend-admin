import { PaywallModule } from './paywallModule.entity';
import { PaywallModuleAction } from './paywal-module-actions.entity';
export declare class PaywallModuleActionRelation {
    id: number;
    paywallModule: PaywallModule;
    paywallModuleAction: PaywallModuleAction;
}
