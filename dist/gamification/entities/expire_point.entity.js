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
exports.ExpireTimePoint = void 0;
const openapi = require("@nestjs/swagger");
const site_entity_1 = require("../../sites/entities/site.entity");
const typeorm_1 = require("typeorm");
let ExpireTimePoint = exports.ExpireTimePoint = class ExpireTimePoint {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_expire_time: { required: true, type: () => Number }, expire_time: { required: true, type: () => Number }, is_active: { required: true, type: () => Boolean }, create_at: { required: true, type: () => Date }, update_at: { required: true, type: () => Date }, site: { required: true, type: () => require("../../sites/entities/site.entity").Site } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExpireTimePoint.prototype, "id_expire_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExpireTimePoint.prototype, "expire_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ExpireTimePoint.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ExpireTimePoint.prototype, "create_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ExpireTimePoint.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site, (site) => site.expire_time_point),
    (0, typeorm_1.JoinColumn)({ name: 'site_id' }),
    __metadata("design:type", site_entity_1.Site)
], ExpireTimePoint.prototype, "site", void 0);
exports.ExpireTimePoint = ExpireTimePoint = __decorate([
    (0, typeorm_1.Entity)()
], ExpireTimePoint);
//# sourceMappingURL=expire_point.entity.js.map