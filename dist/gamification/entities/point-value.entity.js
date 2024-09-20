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
exports.PointValue = void 0;
const openapi = require("@nestjs/swagger");
const site_entity_1 = require("../../sites/entities/site.entity");
const typeorm_1 = require("typeorm");
let PointValue = exports.PointValue = class PointValue {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_point_value: { required: true, type: () => Number }, value: { required: true, type: () => Number }, create_at: { required: true, type: () => Date }, update_at: { required: true, type: () => Date }, site: { required: true, type: () => require("../../sites/entities/site.entity").Site } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PointValue.prototype, "id_point_value", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PointValue.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PointValue.prototype, "create_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PointValue.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => site_entity_1.Site, (site) => site.point_value),
    (0, typeorm_1.JoinColumn)({ name: 'id_site' }),
    __metadata("design:type", site_entity_1.Site)
], PointValue.prototype, "site", void 0);
exports.PointValue = PointValue = __decorate([
    (0, typeorm_1.Entity)('point_value')
], PointValue);
//# sourceMappingURL=point-value.entity.js.map