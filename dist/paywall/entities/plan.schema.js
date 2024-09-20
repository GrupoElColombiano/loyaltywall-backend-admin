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
exports.PlanSchema = exports.Plan = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const plan_data_schema_1 = require("./plan-data.schema");
const user_plans_schema_1 = require("./user-plans.schema");
let Plan = exports.Plan = class Plan {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Plan.prototype, "nameSite", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Plan.prototype, "usertype", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [plan_data_schema_1.PlanDataSchema] }),
    __metadata("design:type", Array)
], Plan.prototype, "plansProductsCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [user_plans_schema_1.UserPlansSchema] }),
    __metadata("design:type", Array)
], Plan.prototype, "userPlans", void 0);
exports.Plan = Plan = __decorate([
    (0, mongoose_1.Schema)()
], Plan);
exports.PlanSchema = mongoose_1.SchemaFactory.createForClass(Plan);
//# sourceMappingURL=plan.schema.js.map