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
exports.PaywallModuleAction = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let PaywallModuleAction = exports.PaywallModuleAction = class PaywallModuleAction {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, description: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaywallModuleAction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaywallModuleAction.prototype, "description", void 0);
exports.PaywallModuleAction = PaywallModuleAction = __decorate([
    (0, typeorm_1.Entity)()
], PaywallModuleAction);
//# sourceMappingURL=paywal-module-actions.entity.js.map