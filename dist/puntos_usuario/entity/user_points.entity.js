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
exports.UserPoints = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const site_entity_1 = require("../../sites/entities/site.entity");
const event_entity_1 = require("../../gamification/entities/event.entity");
let UserPoints = exports.UserPoints = class UserPoints {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_user_points: { required: true, type: () => Number }, product: { required: true, type: () => String }, idProduct: { required: true, type: () => Number }, points: { required: true, type: () => Number }, system_date: { required: true, type: () => Date }, user: { required: true, type: () => require("../../users/entities/user.entity").UserAdminEntity }, site: { required: true, type: () => require("../../sites/entities/site.entity").Site }, event: { required: true, type: () => require("../../gamification/entities/event.entity").Event } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserPoints.prototype, "id_user_points", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'product' }),
    __metadata("design:type", String)
], UserPoints.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_product' }),
    __metadata("design:type", Number)
], UserPoints.prototype, "idProduct", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'points', default: 0 }),
    __metadata("design:type", Number)
], UserPoints.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], UserPoints.prototype, "system_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserAdminEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id_user' }),
    __metadata("design:type", user_entity_1.UserAdminEntity)
], UserPoints.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site),
    (0, typeorm_1.JoinColumn)({ name: 'id_site' }),
    __metadata("design:type", site_entity_1.Site)
], UserPoints.prototype, "site", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event),
    (0, typeorm_1.JoinColumn)({ name: 'id_event' }),
    __metadata("design:type", event_entity_1.Event)
], UserPoints.prototype, "event", void 0);
exports.UserPoints = UserPoints = __decorate([
    (0, typeorm_1.Entity)('user_points')
], UserPoints);
//# sourceMappingURL=user_points.entity.js.map