"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuntosUsuarioModule = void 0;
const common_1 = require("@nestjs/common");
const puntos_usuario_controller_1 = require("./puntos_usuario.controller");
const puntos_usuario_service_1 = require("./puntos_usuario.service");
const typeorm_1 = require("@nestjs/typeorm");
const points_movement_entity_1 = require("./entity/points_movement.entity");
const points_events_entity_1 = require("./entity/points_events.entity");
const user_points_entity_1 = require("./entity/user_points.entity");
const user_entity_1 = require("../users/entities/user.entity");
const user_plan_entity_1 = require("../common/entity/user-plan.entity");
const register_log_entity_1 = require("../registerlog/entity/register-log.entity");
const registerlog_module_1 = require("../registerlog/registerlog.module");
const payment_log_entity_1 = require("../registerlog/entity/payment-log.entity");
const events_points_site_entity_1 = require("../common/entity/events-points-site.entity");
const site_entity_1 = require("../sites/entities/site.entity");
const event_entity_1 = require("../gamification/entities/event.entity");
const axios_1 = require("@nestjs/axios");
let PuntosUsuarioModule = exports.PuntosUsuarioModule = class PuntosUsuarioModule {
};
exports.PuntosUsuarioModule = PuntosUsuarioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                points_movement_entity_1.PointsMovement,
                points_events_entity_1.PointsEvents,
                user_points_entity_1.UserPoints,
                user_entity_1.UserAdminEntity,
                user_plan_entity_1.UserPlan,
                register_log_entity_1.RegisterLog,
                payment_log_entity_1.PaymentTransaction,
                events_points_site_entity_1.EventsPointsSite,
                site_entity_1.Site,
                event_entity_1.Event
            ]),
            registerlog_module_1.RegisterlogModule,
            axios_1.HttpModule,
        ],
        controllers: [puntos_usuario_controller_1.PuntosUsuarioController],
        providers: [puntos_usuario_service_1.PuntosUsuarioService]
    })
], PuntosUsuarioModule);
//# sourceMappingURL=puntos_usuario.module.js.map