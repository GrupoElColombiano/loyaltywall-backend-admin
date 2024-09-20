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
exports.PointsEvents = void 0;
const openapi = require("@nestjs/swagger");
const event_entity_1 = require("../../gamification/entities/event.entity");
const site_entity_1 = require("../../sites/entities/site.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let PointsEvents = exports.PointsEvents = class PointsEvents {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, points: { required: true, type: () => Number }, registration_date: { required: true, type: () => Date }, expiration_date: { required: true, type: () => Date }, user: { required: true, type: () => require("../../users/entities/user.entity").UserAdminEntity }, site: { required: true, type: () => require("../../sites/entities/site.entity").Site }, event: { required: true, type: () => require("../../gamification/entities/event.entity").Event } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PointsEvents.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PointsEvents.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PointsEvents.prototype, "registration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], PointsEvents.prototype, "expiration_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserAdminEntity),
    (0, typeorm_1.JoinTable)({
        name: 'points_events',
        joinColumn: { name: 'id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", user_entity_1.UserAdminEntity)
], PointsEvents.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site),
    (0, typeorm_1.JoinTable)({
        name: 'points_events',
        joinColumn: { name: 'id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", site_entity_1.Site)
], PointsEvents.prototype, "site", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event, { nullable: true }),
    __metadata("design:type", event_entity_1.Event)
], PointsEvents.prototype, "event", void 0);
exports.PointsEvents = PointsEvents = __decorate([
    (0, typeorm_1.Entity)('points_events')
], PointsEvents);
//# sourceMappingURL=points_events.entity.js.map