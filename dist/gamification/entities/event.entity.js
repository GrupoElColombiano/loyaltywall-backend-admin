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
exports.Event = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const cluster_entity_1 = require("../entities/cluster.entity");
const site_entity_1 = require("../../sites/entities/site.entity");
const event_cluster_entity_1 = require("./event_cluster.entity");
const points_events_entity_1 = require("../../puntos_usuario/entity/points_events.entity");
const user_points_entity_1 = require("../../puntos_usuario/entity/user_points.entity");
let Event = exports.Event = class Event {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_event: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, points: { required: true, type: () => Number }, event_repeats: { required: false, type: () => Number }, porcentual_value: { required: false, type: () => Number }, create_at: { required: true, type: () => Date }, update_at: { required: true, type: () => Date }, clusters: { required: true, type: () => [require("./cluster.entity").Cluster] }, sites: { required: true, type: () => [require("../../sites/entities/site.entity").Site] }, event_cluster: { required: true, type: () => [require("./event_cluster.entity").EventCluster] }, points_events: { required: true, type: () => [require("../../puntos_usuario/entity/points_events.entity").PointsEvents] }, user_points: { required: true, type: () => [require("../../puntos_usuario/entity/user_points.entity").UserPoints] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Event.prototype, "id_event", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Event.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Event.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Event.prototype, "event_repeats", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Event.prototype, "porcentual_value", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Event.prototype, "create_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Event.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cluster_entity_1.Cluster, cluster => cluster.events),
    __metadata("design:type", Array)
], Event.prototype, "clusters", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => site_entity_1.Site, site => site.events, { nullable: true }),
    __metadata("design:type", Array)
], Event.prototype, "sites", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => event_cluster_entity_1.EventCluster, event_cluster => event_cluster.events),
    (0, typeorm_1.JoinColumn)({ name: 'id_event_cluster' }),
    __metadata("design:type", Array)
], Event.prototype, "event_cluster", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => points_events_entity_1.PointsEvents),
    __metadata("design:type", Array)
], Event.prototype, "points_events", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_points_entity_1.UserPoints, user_points => user_points.event),
    (0, typeorm_1.JoinColumn)({ name: 'id_user_points' }),
    __metadata("design:type", Array)
], Event.prototype, "user_points", void 0);
exports.Event = Event = __decorate([
    (0, typeorm_1.Entity)('event')
], Event);
//# sourceMappingURL=event.entity.js.map