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
exports.PlanVersion = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const plan_entity_1 = require("./plan.entity");
let PlanVersion = exports.PlanVersion = class PlanVersion {
    static _OPENAPI_METADATA_FACTORY() {
        return { idPlanVersion: { required: true, type: () => Number }, name: { required: true, type: () => String }, idVersionPlan: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, plan: { required: true, type: () => require("./plan.entity").Plan } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PlanVersion.prototype, "idPlanVersion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PlanVersion.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PlanVersion.prototype, "idVersionPlan", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], PlanVersion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plan_entity_1.Plan, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'idPlan' }),
    __metadata("design:type", plan_entity_1.Plan)
], PlanVersion.prototype, "plan", void 0);
exports.PlanVersion = PlanVersion = __decorate([
    (0, typeorm_1.Entity)('plan_versions')
], PlanVersion);
//# sourceMappingURL=plan-versions.entity.js.map