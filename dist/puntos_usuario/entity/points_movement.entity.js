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
exports.PointsMovement = void 0;
const openapi = require("@nestjs/swagger");
const site_entity_1 = require("../../sites/entities/site.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let PointsMovement = exports.PointsMovement = class PointsMovement {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, total_points: { required: true, type: () => Number }, current_points: { required: true, type: () => Number }, expired_points: { required: true, type: () => Number }, redeemed_points: { required: true, type: () => Number }, system_date: { required: true, type: () => Date }, user: { required: true, type: () => require("../../users/entities/user.entity").UserAdminEntity }, site: { required: true, type: () => require("../../sites/entities/site.entity").Site } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PointsMovement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PointsMovement.prototype, "total_points", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PointsMovement.prototype, "current_points", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PointsMovement.prototype, "expired_points", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PointsMovement.prototype, "redeemed_points", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PointsMovement.prototype, "system_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserAdminEntity),
    (0, typeorm_1.JoinTable)({
        name: 'points_movement',
        joinColumn: { name: 'id_points_movement', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", user_entity_1.UserAdminEntity)
], PointsMovement.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site),
    (0, typeorm_1.JoinTable)({
        name: 'points_movement',
        joinColumn: { name: 'id_points_movement', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", site_entity_1.Site)
], PointsMovement.prototype, "site", void 0);
exports.PointsMovement = PointsMovement = __decorate([
    (0, typeorm_1.Entity)('points_movement')
], PointsMovement);
//# sourceMappingURL=points_movement.entity.js.map