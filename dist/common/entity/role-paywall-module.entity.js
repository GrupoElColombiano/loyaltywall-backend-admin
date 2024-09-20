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
exports.RolePaywallModule = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const paywallModule_entity_1 = require("./paywallModule.entity");
let RolePaywallModule = exports.RolePaywallModule = class RolePaywallModule {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, role: { required: true, type: () => String }, paywallModule: { required: true, type: () => require("./paywallModule.entity").PaywallModule }, isActive: { required: true, type: () => Boolean } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RolePaywallModule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RolePaywallModule.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paywallModule_entity_1.PaywallModule, { eager: false }),
    __metadata("design:type", paywallModule_entity_1.PaywallModule)
], RolePaywallModule.prototype, "paywallModule", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], RolePaywallModule.prototype, "isActive", void 0);
exports.RolePaywallModule = RolePaywallModule = __decorate([
    (0, typeorm_1.Entity)()
], RolePaywallModule);
//# sourceMappingURL=role-paywall-module.entity.js.map