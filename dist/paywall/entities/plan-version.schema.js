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
exports.PlanVersionSchema = exports.PlanVersion = exports.RateSchema = exports.Rate = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const plan_data_schema_1 = require("./plan-data.schema");
let Rate = exports.Rate = class Rate {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Rate.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Rate.prototype, "rate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Rate.prototype, "rate_special", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Rate.prototype, "rate_special_renewal", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Rate.prototype, "rate_renewal", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Rate.prototype, "is_special", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Rate.prototype, "date_start", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Rate.prototype, "date_end", void 0);
exports.Rate = Rate = __decorate([
    (0, mongoose_1.Schema)()
], Rate);
exports.RateSchema = mongoose_1.SchemaFactory.createForClass(Rate);
let PlanVersion = exports.PlanVersion = class PlanVersion {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], PlanVersion.prototype, "idVersionPlan", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], PlanVersion.prototype, "idPlan", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PlanVersion.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PlanVersion.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PlanVersion.prototype, "userType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], PlanVersion.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PlanVersion.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PlanVersion.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [plan_data_schema_1.PlanDataSchema] }),
    __metadata("design:type", Array)
], PlanVersion.prototype, "plansProductsCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.RateSchema] }),
    __metadata("design:type", Array)
], PlanVersion.prototype, "rates", void 0);
exports.PlanVersion = PlanVersion = __decorate([
    (0, mongoose_1.Schema)()
], PlanVersion);
exports.PlanVersionSchema = mongoose_1.SchemaFactory.createForClass(PlanVersion);
//# sourceMappingURL=plan-version.schema.js.map