import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlansProductCategory } from './entity/plans-products-categories.entity';
import { PaywallModule } from './entity/paywallModule.entity';
import { PaywallModuleActionRelation } from './entity/paywall-module-actions-relations.entity';
import { PaywallModuleAction } from './entity/paywal-module-actions.entity';
import { RolePaywallModuleActionRelation } from './entity/role-paywall-module-actions.entity';
import { RolePaywallModule } from './entity/role-paywall-module.entity';
import { SitesPlan } from './entity/sites-plan.entity';
import { CategorysAccess } from './entity/categorys-access.entity';
import { UserPlan } from './entity/user-plan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    PlansProductCategory,
    PaywallModule,
    PaywallModuleActionRelation,
    PaywallModuleAction,
    RolePaywallModuleActionRelation,
    RolePaywallModule,
    SitesPlan,
    CategorysAccess,
    UserPlan,
  ])],
})
export class CommonModule {}
