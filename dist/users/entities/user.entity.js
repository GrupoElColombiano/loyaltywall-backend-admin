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
exports.UserAdminEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const points_events_entity_1 = require("../../puntos_usuario/entity/points_events.entity");
const points_movement_entity_1 = require("../../puntos_usuario/entity/points_movement.entity");
const user_points_entity_1 = require("../../puntos_usuario/entity/user_points.entity");
let UserAdminEntity = exports.UserAdminEntity = class UserAdminEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, idKeycloak: { required: false, type: () => String }, firstName: { required: false, type: () => String }, lastName: { required: false, type: () => String }, email: { required: false, type: () => String }, document_type: { required: false, type: () => String }, document_number: { required: false, type: () => String }, birthdate: { required: false, type: () => Date }, gener: { required: false, type: () => String }, phone: { required: false, type: () => Number }, address: { required: false, type: () => String }, city: { required: false, type: () => String }, department: { required: false, type: () => String }, country: { required: false, type: () => String }, lastLogin: { required: false, type: () => Date }, creationDate: { required: false, type: () => Date }, pointsEvents: { required: true, type: () => [require("../../puntos_usuario/entity/points_events.entity").PointsEvents] }, pointsMovement: { required: true, type: () => [require("../../puntos_usuario/entity/points_movement.entity").PointsMovement] }, userPoints: { required: true, type: () => [require("../../puntos_usuario/entity/user_points.entity").UserPoints] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserAdminEntity.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], UserAdminEntity.prototype, "idKeycloak", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAdminEntity.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAdminEntity.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], UserAdminEntity.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserAdminEntity.prototype, "document_type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserAdminEntity.prototype, "document_number", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], UserAdminEntity.prototype, "birthdate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserAdminEntity.prototype, "gener", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], UserAdminEntity.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserAdminEntity.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserAdminEntity.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserAdminEntity.prototype, "department", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserAdminEntity.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], UserAdminEntity.prototype, "lastLogin", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, typeorm_1.Column)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], UserAdminEntity.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => points_events_entity_1.PointsEvents),
    __metadata("design:type", Array)
], UserAdminEntity.prototype, "pointsEvents", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => points_movement_entity_1.PointsMovement),
    __metadata("design:type", Array)
], UserAdminEntity.prototype, "pointsMovement", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_points_entity_1.UserPoints),
    __metadata("design:type", Array)
], UserAdminEntity.prototype, "userPoints", void 0);
exports.UserAdminEntity = UserAdminEntity = __decorate([
    (0, typeorm_1.Entity)()
], UserAdminEntity);
//# sourceMappingURL=user.entity.js.map