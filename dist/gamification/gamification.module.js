"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamificationModule = void 0;
const common_1 = require("@nestjs/common");
const gamification_service_1 = require("./service/gamification.service");
const gamification_controller_1 = require("./controller/gamification.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cluster_entity_1 = require("./entities/cluster.entity");
const point_value_entity_1 = require("./entities/point-value.entity");
const event_entity_1 = require("./entities/event.entity");
const expire_point_entity_1 = require("./entities/expire_point.entity");
const site_entity_1 = require("../sites/entities/site.entity");
const event_cluster_entity_1 = require("./entities/event_cluster.entity");
const cluster_penalization_entity_1 = require("./entities/cluster_penalization.entity");
const user_points_entity_1 = require("../puntos_usuario/entity/user_points.entity");
const points_events_entity_1 = require("../puntos_usuario/entity/points_events.entity");
const events_points_site_entity_1 = require("../common/entity/events-points-site.entity");
let GamificationModule = exports.GamificationModule = class GamificationModule {
};
exports.GamificationModule = GamificationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                point_value_entity_1.PointValue,
                event_entity_1.Event,
                cluster_entity_1.Cluster,
                expire_point_entity_1.ExpireTimePoint,
                site_entity_1.Site,
                event_cluster_entity_1.EventCluster,
                cluster_penalization_entity_1.ClusterPenalization,
                user_points_entity_1.UserPoints,
                points_events_entity_1.PointsEvents,
                events_points_site_entity_1.EventsPointsSite
            ])],
        controllers: [gamification_controller_1.GamificationController],
        providers: [gamification_service_1.GamificationService],
    })
], GamificationModule);
//# sourceMappingURL=gamification.module.js.map