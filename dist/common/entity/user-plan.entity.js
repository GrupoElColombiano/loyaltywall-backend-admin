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
exports.UserPlan = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const plan_entity_1 = require("../../plans/entity/plan.entity");
let UserPlan = exports.UserPlan = class UserPlan {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, idUser: { required: true, type: () => String }, isActive: { required: true, type: () => Boolean }, dateExpiredPlan: { required: true, type: () => Date }, dateInitPlan: { required: true, type: () => Date }, idVersion: { required: true, type: () => String }, plan: { required: true, type: () => require("../../plans/entity/plan.entity").Plan } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserPlan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'id_user' }),
    __metadata("design:type", String)
], UserPlan.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'is_active' }),
    __metadata("design:type", Boolean)
], UserPlan.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'date_expired_plan', type: 'timestamp' }),
    __metadata("design:type", Date)
], UserPlan.prototype, "dateExpiredPlan", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'date_init_plan', type: 'timestamp' }),
    __metadata("design:type", Date)
], UserPlan.prototype, "dateInitPlan", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'id_version' }),
    __metadata("design:type", String)
], UserPlan.prototype, "idVersion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plan_entity_1.Plan),
    (0, typeorm_1.JoinColumn)({ name: 'id_plan' }),
    __metadata("design:type", plan_entity_1.Plan)
], UserPlan.prototype, "plan", void 0);
exports.UserPlan = UserPlan = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_plan' })
], UserPlan);
//# sourceMappingURL=user-plan.entity.js.map