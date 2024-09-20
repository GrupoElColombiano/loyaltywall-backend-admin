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
exports.Subscription = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const plan_entity_1 = require("../../plans/entity/plan.entity");
const rate_entity_1 = require("../../common/entity/rate.entity");
let Subscription = exports.Subscription = class Subscription {
    static _OPENAPI_METADATA_FACTORY() {
        return { idSubscription: { required: false, type: () => Number }, id_user: { required: true, type: () => String }, plan: { required: true, type: () => require("./plan.entity").Plan }, id_version: { required: true, type: () => Number }, rate: { required: true, type: () => require("../../common/entity/rate.entity").Rate }, transacction: { required: true, type: () => String }, sysdate: { required: true, type: () => Date }, cancellationStatus: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_subscription' }),
    __metadata("design:type", Number)
], Subscription.prototype, "idSubscription", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_user', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Subscription.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plan_entity_1.Plan, plan => plan.idPlan),
    (0, typeorm_1.JoinColumn)({ name: 'id_plan' }),
    __metadata("design:type", plan_entity_1.Plan)
], Subscription.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_version', type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Subscription.prototype, "id_version", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rate_entity_1.Rate, rate => rate.id),
    (0, typeorm_1.JoinColumn)({ name: 'id_rate' }),
    __metadata("design:type", rate_entity_1.Rate)
], Subscription.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'transacction', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Subscription.prototype, "transacction", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'sysdate', type: 'timestamp' }),
    __metadata("design:type", Date)
], Subscription.prototype, "sysdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cancellation_status', type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Subscription.prototype, "cancellationStatus", void 0);
exports.Subscription = Subscription = __decorate([
    (0, typeorm_1.Entity)({ name: 'subscriptions' })
], Subscription);
//# sourceMappingURL=subscription.entity.js.map