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
exports.ClusterPenalization = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const site_entity_1 = require("../../sites/entities/site.entity");
let ClusterPenalization = exports.ClusterPenalization = class ClusterPenalization {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_cluster_penalization: { required: true, type: () => Number }, penaltyClusters: { required: true, type: () => Number }, site: { required: true, type: () => require("../../sites/entities/site.entity").Site } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClusterPenalization.prototype, "id_cluster_penalization", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'penalty_cluster' }),
    __metadata("design:type", Number)
], ClusterPenalization.prototype, "penaltyClusters", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site),
    (0, typeorm_1.JoinColumn)({ name: 'idSite' }),
    __metadata("design:type", site_entity_1.Site)
], ClusterPenalization.prototype, "site", void 0);
exports.ClusterPenalization = ClusterPenalization = __decorate([
    (0, typeorm_1.Entity)()
], ClusterPenalization);
//# sourceMappingURL=cluster_penalization.entity.js.map