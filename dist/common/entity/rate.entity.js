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
exports.Rate = void 0;
const openapi = require("@nestjs/swagger");
const plan_entity_1 = require("../../plans/entity/plan.entity");
const typeorm_1 = require("typeorm");
let Rate = exports.Rate = class Rate {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, time: { required: true, type: () => String }, rate: { required: true, type: () => Number }, rate_special: { required: false, type: () => Number }, rate_special_renewal: { required: false, type: () => Number }, rate_renewal: { required: true, type: () => Number }, duration: { required: true, type: () => Number }, is_special: { required: true, type: () => Boolean }, date_start: { required: false, type: () => Date }, date_end: { required: false, type: () => Date }, plan: { required: true, type: () => require("../../plans/entity/plan.entity").Plan } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Rate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Rate.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Rate.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Rate.prototype, "rate_special", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Rate.prototype, "rate_special_renewal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Rate.prototype, "rate_renewal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Rate.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], Rate.prototype, "is_special", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Rate.prototype, "date_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Rate.prototype, "date_end", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plan_entity_1.Plan, plan => plan.rates),
    (0, typeorm_1.JoinColumn)({ name: 'idPlan' }),
    __metadata("design:type", plan_entity_1.Plan)
], Rate.prototype, "plan", void 0);
exports.Rate = Rate = __decorate([
    (0, typeorm_1.Entity)('rates')
], Rate);
//# sourceMappingURL=rate.entity.js.map