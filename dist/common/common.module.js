"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const plans_products_categories_entity_1 = require("./entity/plans-products-categories.entity");
const paywallModule_entity_1 = require("./entity/paywallModule.entity");
const paywall_module_actions_relations_entity_1 = require("./entity/paywall-module-actions-relations.entity");
const paywal_module_actions_entity_1 = require("./entity/paywal-module-actions.entity");
const role_paywall_module_actions_entity_1 = require("./entity/role-paywall-module-actions.entity");
const role_paywall_module_entity_1 = require("./entity/role-paywall-module.entity");
const sites_plan_entity_1 = require("./entity/sites-plan.entity");
const categorys_access_entity_1 = require("./entity/categorys-access.entity");
const user_plan_entity_1 = require("./entity/user-plan.entity");
let CommonModule = exports.CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                plans_products_categories_entity_1.PlansProductCategory,
                paywallModule_entity_1.PaywallModule,
                paywall_module_actions_relations_entity_1.PaywallModuleActionRelation,
                paywal_module_actions_entity_1.PaywallModuleAction,
                role_paywall_module_actions_entity_1.RolePaywallModuleActionRelation,
                role_paywall_module_entity_1.RolePaywallModule,
                sites_plan_entity_1.SitesPlan,
                categorys_access_entity_1.CategorysAccess,
                user_plan_entity_1.UserPlan,
            ])],
    })
], CommonModule);
//# sourceMappingURL=common.module.js.map