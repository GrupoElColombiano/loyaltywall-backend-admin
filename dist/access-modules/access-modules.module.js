"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessModulesModule = void 0;
const common_1 = require("@nestjs/common");
const access_modules_service_1 = require("./access-modules.service");
const access_modules_controller_1 = require("./access-modules.controller");
const typeorm_1 = require("@nestjs/typeorm");
const paywallModule_entity_1 = require("../common/entity/paywallModule.entity");
const role_paywall_module_entity_1 = require("../common/entity/role-paywall-module.entity");
const paywal_module_actions_entity_1 = require("../common/entity/paywal-module-actions.entity");
const paywall_module_actions_relations_entity_1 = require("../common/entity/paywall-module-actions-relations.entity");
const role_paywall_module_actions_entity_1 = require("../common/entity/role-paywall-module-actions.entity");
let AccessModulesModule = exports.AccessModulesModule = class AccessModulesModule {
};
exports.AccessModulesModule = AccessModulesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([paywallModule_entity_1.PaywallModule, role_paywall_module_entity_1.RolePaywallModule, paywal_module_actions_entity_1.PaywallModuleAction,
                paywall_module_actions_relations_entity_1.PaywallModuleActionRelation, role_paywall_module_actions_entity_1.RolePaywallModuleActionRelation])],
        controllers: [access_modules_controller_1.AccessModulesController],
        providers: [access_modules_service_1.AccessModulesService],
        exports: [access_modules_service_1.AccessModulesService],
    })
], AccessModulesModule);
//# sourceMappingURL=access-modules.module.js.map