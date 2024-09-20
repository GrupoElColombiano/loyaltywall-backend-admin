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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamificationController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const gamification_service_1 = require("../service/gamification.service");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
let GamificationController = exports.GamificationController = class GamificationController {
    constructor(gamificationService) {
        this.gamificationService = gamificationService;
    }
    findPointValueBySite(idSite) {
        return this.gamificationService.findPointValueBySite(idSite);
    }
    updatePointValueBySite(idSite, body) {
        return this.gamificationService.updatePointValueBySite(idSite, body);
    }
    async createNewExpireTimeAndDeactivateCurrent(siteId, data) {
        const { expireTime } = data;
        return this.gamificationService.createNewExpireTimeAndDeactivateCurrent(siteId, expireTime);
    }
    async listActiveExpireTimePointsBySiteId(siteId) {
        return this.gamificationService.listActiveExpireTimePointsBySiteId(siteId);
    }
    createEvent(body) {
        return this.gamificationService.createEvent(body);
    }
    findAllEvent() {
        return this.gamificationService.findAllEvent();
    }
    findEventsWithPoints(idSite) {
        return this.gamificationService.findEventsWithPoints(idSite);
    }
    updateEventPoints(id_event, body) {
        return this.gamificationService.updateEvent(id_event, body);
    }
    removeEvent(id_event, idSite) {
        return this.gamificationService.removeEvent(id_event, idSite);
    }
    updateEventRepeats(body, id_event) {
        return this.gamificationService.updateEventRepeats(id_event, body);
    }
    updatePorcentualValue(body, id_event) {
        return this.gamificationService.updatePorcentualValue(id_event, body);
    }
    getEventForCluster(id_cluster, idSite) {
        return this.gamificationService.getEventForCluster(id_cluster, idSite);
    }
    createEventForCluster(id_cluster, body) {
        return this.gamificationService.createClusterEvent(id_cluster, body);
    }
    updateEventForCluster(id_cluster, body) {
        return this.gamificationService.updateEventCluster(id_cluster, body);
    }
    removeEventForCluster(id_cluster, id_event) {
        return this.gamificationService.removeEventFromCluster(id_cluster, id_event);
    }
    createClusterPenalization(body) {
        return this.gamificationService.createClusterPenalization(body);
    }
    updateClusterPenalization(body) {
        return this.gamificationService.updateClusterPenalization(body);
    }
    findAllClusterPenalization() {
        return this.gamificationService.getAllClusterPenalization();
    }
    findClusterPenalization(idSite) {
        return this.gamificationService.getOneClusterPenalization(idSite);
    }
    getAdvanceCluster(idSite, idKeycloak) {
        return this.gamificationService.getAdvanceCluster(idSite, idKeycloak);
    }
};
__decorate([
    (0, common_1.Get)('/point_value/:idSite'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('idSite')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "findPointValueBySite", null);
__decorate([
    (0, common_1.Put)('/point_value/:idSite'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('idSite')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "updatePointValueBySite", null);
__decorate([
    (0, common_1.Post)('/expire_time_point/create/:siteId'),
    openapi.ApiResponse({ status: 201, type: [require("../entities/expire_point.entity").ExpireTimePoint] }),
    __param(0, (0, common_1.Param)('siteId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GamificationController.prototype, "createNewExpireTimeAndDeactivateCurrent", null);
__decorate([
    (0, common_1.Get)('active_expire_time/:siteId'),
    openapi.ApiResponse({ status: 200, type: [require("../entities/expire_point.entity").ExpireTimePoint] }),
    __param(0, (0, common_1.Param)('siteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GamificationController.prototype, "listActiveExpireTimePointsBySiteId", null);
__decorate([
    (0, common_1.Post)('event/create'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "createEvent", null);
__decorate([
    (0, common_1.Get)('/event/findAll'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "findAllEvent", null);
__decorate([
    (0, common_1.Get)('event/withPoints/:idSite'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('idSite')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "findEventsWithPoints", null);
__decorate([
    (0, common_1.Put)('/event/edit/:id_event'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id_event', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "updateEventPoints", null);
__decorate([
    (0, common_1.Put)('/event/restart_points/:id_event/:idSite'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id_event')),
    __param(1, (0, common_1.Param)('idSite')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "removeEvent", null);
__decorate([
    (0, common_1.Put)('/event_repeats/:id_event'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id_event')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "updateEventRepeats", null);
__decorate([
    (0, common_1.Put)('/porcentual_value/:id_event'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id_event')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "updatePorcentualValue", null);
__decorate([
    (0, common_1.Get)('/cluster_events/:id_cluster/:idSite'),
    openapi.ApiResponse({ status: 200, type: [require("../entities/event_cluster.entity").EventCluster] }),
    __param(0, (0, common_1.Param)('id_cluster')),
    __param(1, (0, common_1.Param)('idSite')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "getEventForCluster", null);
__decorate([
    (0, common_1.Post)('/cluster_events/:id_cluster'),
    __param(0, (0, common_1.Param)('id_cluster', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "createEventForCluster", null);
__decorate([
    (0, nest_keycloak_connect_1.Public)(true),
    (0, common_1.Put)('/cluster_events/:id_cluster'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id_cluster', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "updateEventForCluster", null);
__decorate([
    (0, nest_keycloak_connect_1.Public)(true),
    (0, common_1.Delete)('/cluster_events/:id_cluster/:id_event'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id_cluster', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id_event', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "removeEventForCluster", null);
__decorate([
    (0, common_1.Post)('/cluster_penalization/create'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "createClusterPenalization", null);
__decorate([
    (0, common_1.Put)('/cluster_penalization/update'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "updateClusterPenalization", null);
__decorate([
    (0, common_1.Get)('/cluster_penalization/findAll'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "findAllClusterPenalization", null);
__decorate([
    (0, common_1.Get)('/cluster_penalization/:idSite'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('idSite')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "findClusterPenalization", null);
__decorate([
    (0, nest_keycloak_connect_1.Public)(true),
    (0, common_1.Get)('/advance_cluster/:idSite/:idKeycloak'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('idSite')),
    __param(1, (0, common_1.Param)('idKeycloak')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], GamificationController.prototype, "getAdvanceCluster", null);
exports.GamificationController = GamificationController = __decorate([
    (0, common_1.Controller)('gamification'),
    (0, nest_keycloak_connect_1.Unprotected)(),
    __metadata("design:paramtypes", [gamification_service_1.GamificationService])
], GamificationController);
//# sourceMappingURL=gamification.controller.js.map