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
const typeorm_1 = require("typeorm");
const event_entity_1 = require("./event.entity");
let PointsEvents = exports.PointsEvents = class PointsEvents {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, userId: { required: true, type: () => String }, event: { required: true, type: () => require("./event.entity").Event }, eventIdEvent: { required: true, type: () => Number }, siteIdSite: { required: true, type: () => Number }, points: { required: true, type: () => Number }, registration_date: { required: true, type: () => Date }, expiration_date: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PointsEvents.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PointsEvents.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event, { eager: true }),
    __metadata("design:type", event_entity_1.Event)
], PointsEvents.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PointsEvents.prototype, "eventIdEvent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PointsEvents.prototype, "siteIdSite", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PointsEvents.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PointsEvents.prototype, "registration_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PointsEvents.prototype, "expiration_date", void 0);
exports.PointsEvents = PointsEvents = __decorate([
    (0, typeorm_1.Entity)()
], PointsEvents);
//# sourceMappingURL=points-events.entity.js.map