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
exports.PlanDto = exports.UserType = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var UserType;
(function (UserType) {
    UserType["Suscrito"] = "Suscrito";
    UserType["Anonimo"] = "An\u00F3nimo";
    UserType["RegistradoSinPago"] = "Registrado sin pago";
})(UserType || (exports.UserType = UserType = {}));
class PlanDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { description: { required: true, type: () => String }, name: { required: true, type: () => String }, userType: { required: true, enum: require("./plan.dto").UserType }, isActive: { required: true, type: () => Boolean }, categories: { required: false, type: () => String }, contentQuantity: { required: false, type: () => Number }, frequencyType: { required: false, type: () => String }, durationType: { required: false, type: () => String } };
    }
}
exports.PlanDto = PlanDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlanDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlanDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(UserType),
    __metadata("design:type", String)
], PlanDto.prototype, "userType", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PlanDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlanDto.prototype, "categories", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PlanDto.prototype, "contentQuantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlanDto.prototype, "frequencyType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlanDto.prototype, "durationType", void 0);
//# sourceMappingURL=plan.dto.js.map