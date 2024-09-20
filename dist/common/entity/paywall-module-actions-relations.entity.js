"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaywallModuleActionRelation = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const paywallModule_entity_1 = require("./paywallModule.entity");
const paywal_module_actions_entity_1 = require("./paywal-module-actions.entity");
let PaywallModuleActionRelation = exports.PaywallModuleActionRelation = class PaywallModuleActionRelation {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, paywallModule: { required: true, type: () => require("./paywallModule.entity").PaywallModule }, paywallModuleAction: { required: true, type: () => require("./paywal-module-actions.entity").PaywallModuleAction } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaywallModuleActionRelation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paywallModule_entity_1.PaywallModule, { eager: true }),
    __metadata("design:type", paywallModule_entity_1.PaywallModule)
], PaywallModuleActionRelation.prototype, "paywallModule", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paywal_module_actions_entity_1.PaywallModuleAction, { eager: true }),
    __metadata("design:type", paywal_module_actions_entity_1.PaywallModuleAction)
], PaywallModuleActionRelation.prototype, "paywallModuleAction", void 0);
exports.PaywallModuleActionRelation = PaywallModuleActionRelation = __decorate([
    (0, typeorm_1.Entity)()
], PaywallModuleActionRelation);
//# sourceMappingURL=paywall-module-actions-relations.entity.js.map