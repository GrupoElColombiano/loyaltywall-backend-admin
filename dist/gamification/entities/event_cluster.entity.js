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
exports.EventCluster = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const event_entity_1 = require("./event.entity");
const cluster_entity_1 = require("./cluster.entity");
const site_entity_1 = require("../../sites/entities/site.entity");
let EventCluster = exports.EventCluster = class EventCluster {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_event_cluster: { required: true, type: () => Number }, event_repeats: { required: true, type: () => Number }, porcentual_value: { required: true, type: () => Number }, events: { required: true, type: () => [require("./event.entity").Event] }, clusters: { required: true, type: () => [require("./cluster.entity").Cluster] }, site: { required: true, type: () => require("../../sites/entities/site.entity").Site } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EventCluster.prototype, "id_event_cluster", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], EventCluster.prototype, "event_repeats", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], EventCluster.prototype, "porcentual_value", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event),
    (0, typeorm_1.JoinColumn)({ name: 'id_event' }),
    __metadata("design:type", Array)
], EventCluster.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cluster_entity_1.Cluster),
    (0, typeorm_1.JoinColumn)({ name: 'id_cluster' }),
    __metadata("design:type", Array)
], EventCluster.prototype, "clusters", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site, site => site.event_clusters),
    (0, typeorm_1.JoinColumn)({ name: 'site' }),
    __metadata("design:type", site_entity_1.Site)
], EventCluster.prototype, "site", void 0);
exports.EventCluster = EventCluster = __decorate([
    (0, typeorm_1.Entity)()
], EventCluster);
//# sourceMappingURL=event_cluster.entity.js.map