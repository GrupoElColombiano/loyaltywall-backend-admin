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
exports.RoleSiteRelation = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const site_entity_1 = require("../../sites/entities/site.entity");
let RoleSiteRelation = exports.RoleSiteRelation = class RoleSiteRelation {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, role: { required: true, type: () => String }, site: { required: true, type: () => require("../../sites/entities/site.entity").Site }, isActive: { required: true, type: () => Boolean } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RoleSiteRelation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoleSiteRelation.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'idSite' }),
    __metadata("design:type", site_entity_1.Site)
], RoleSiteRelation.prototype, "site", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], RoleSiteRelation.prototype, "isActive", void 0);
exports.RoleSiteRelation = RoleSiteRelation = __decorate([
    (0, typeorm_1.Entity)()
], RoleSiteRelation);
//# sourceMappingURL=role-site-relations.entity.js.map