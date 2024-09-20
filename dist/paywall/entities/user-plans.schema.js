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
exports.UserPlansSchema = exports.UserPlans = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let UserPlans = exports.UserPlans = class UserPlans {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], UserPlans.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserPlans.prototype, "idUser", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], UserPlans.prototype, "idPlan", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], UserPlans.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserPlans.prototype, "dateExpiredPlan", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserPlans.prototype, "dateInitPlan", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserPlans.prototype, "idVersion", void 0);
exports.UserPlans = UserPlans = __decorate([
    (0, mongoose_1.Schema)()
], UserPlans);
exports.UserPlansSchema = mongoose_1.SchemaFactory.createForClass(UserPlans);
//# sourceMappingURL=user-plans.schema.js.map