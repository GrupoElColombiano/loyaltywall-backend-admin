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
const payment_entity_entity_1 = require("./payment.entity.entity");
let Subscription = exports.Subscription = class Subscription {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_subscription: { required: true, type: () => Number }, id_plan: { required: true, type: () => Number }, id_rate: { required: true, type: () => Number }, transacction: { required: true, type: () => String }, sysdate: { required: true, type: () => Date }, id_version: { required: true, type: () => Number }, id_user: { required: true, type: () => String }, cancellation_status: { required: true, type: () => Number }, transaction_type: { required: true, type: () => String }, amount: { required: true, type: () => Number }, paymentGateway: { required: true, type: () => require("./payment.entity.entity").PaymentGateway }, payment_gateway_id: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Subscription.prototype, "id_subscription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Subscription.prototype, "id_plan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Subscription.prototype, "id_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Subscription.prototype, "transacction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Subscription.prototype, "sysdate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Subscription.prototype, "id_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Subscription.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Subscription.prototype, "cancellation_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Subscription.prototype, "transaction_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], Subscription.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => payment_entity_entity_1.PaymentGateway, (gateway) => gateway.subscriptions, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'payment_gateway_id' }),
    __metadata("design:type", payment_entity_entity_1.PaymentGateway)
], Subscription.prototype, "paymentGateway", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Subscription.prototype, "payment_gateway_id", void 0);
exports.Subscription = Subscription = __decorate([
    (0, typeorm_1.Entity)({ name: 'subscriptions' })
], Subscription);
//# sourceMappingURL=subscriptionsentity.entity.js.map