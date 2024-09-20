import { Module } from '@nestjs/common';
import { AccessModulesService } from './access-modules.service';
import { AccessModulesController } from './access-modules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaywallModule } from 'src/common/entity/paywallModule.entity';
import { RolePaywallModule } from 'src/common/entity/role-paywall-module.entity';
import { PaywallModuleAction } from 'src/common/entity/paywal-module-actions.entity';
import { PaywallModuleActionRelation } from 'src/common/entity/paywall-module-actions-relations.entity';
import { RolePaywallModuleActionRelation } from 'src/common/entity/role-paywall-module-actions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaywallModule, RolePaywallModule, PaywallModuleAction,
    PaywallModuleActionRelation, RolePaywallModuleActionRelation])],
  controllers: [AccessModulesController],
  providers: [AccessModulesService],
  exports: [AccessModulesService],
})
export class AccessModulesModule {}
