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
exports.PaywallController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const paywall_service_1 = require("./paywall.service");
const create_paywall_dto_1 = require("./dto/create-paywall.dto");
const update_paywall_dto_1 = require("./dto/update-paywall.dto");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
let PaywallController = exports.PaywallController = class PaywallController {
    constructor(paywallService) {
        this.paywallService = paywallService;
    }
    create(createPaywallDto) {
        return this.paywallService.create(createPaywallDto);
    }
    findAll() {
        return this.paywallService.findAll();
    }
    update(id, updatePaywallDto) {
        return this.paywallService.update(+id, updatePaywallDto);
    }
    remove(id) {
        return this.paywallService.remove(+id);
    }
    async addMetadataPaywall(metadata) {
        return await this.paywallService.addMetadataPaywallMongo(metadata);
    }
    async getMetadataPaywall(uniqueId, userType, site, isAccessibleForFree, amount, category, duration, unlimited, allProduct, identifier) {
        return await this.paywallService.getMetadataPaywall(uniqueId, userType, site, isAccessibleForFree, amount, category, duration, unlimited, allProduct, identifier);
    }
    async addPlanPaywallMongo(metadata) {
        return await this.paywallService.addPlanPaywallMongo(metadata);
    }
    async addPointsEvent(metadata) {
        return await this.paywallService.registerPointsEvent(metadata);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paywall_dto_1.CreatePaywallDto]),
    __metadata("design:returntype", void 0)
], PaywallController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaywallController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_paywall_dto_1.UpdatePaywallDto]),
    __metadata("design:returntype", void 0)
], PaywallController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaywallController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('metadata_paywall'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaywallController.prototype, "addMetadataPaywall", null);
__decorate([
    (0, common_1.Get)('metadata_paywall'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)('uniqueId')),
    __param(1, (0, common_1.Query)('userType')),
    __param(2, (0, common_1.Query)('site')),
    __param(3, (0, common_1.Query)('isAccessibleForFree')),
    __param(4, (0, common_1.Query)('amount')),
    __param(5, (0, common_1.Query)('category')),
    __param(6, (0, common_1.Query)('duration')),
    __param(7, (0, common_1.Query)('unlimited')),
    __param(8, (0, common_1.Query)('allProduct')),
    __param(9, (0, common_1.Query)('identifier')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Boolean, Number, String, Number, Boolean, Boolean, Number]),
    __metadata("design:returntype", Promise)
], PaywallController.prototype, "getMetadataPaywall", null);
__decorate([
    (0, common_1.Post)('plan_paywall'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaywallController.prototype, "addPlanPaywallMongo", null);
__decorate([
    (0, common_1.Post)('points_event'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaywallController.prototype, "addPointsEvent", null);
exports.PaywallController = PaywallController = __decorate([
    (0, common_1.Controller)('paywall'),
    (0, nest_keycloak_connect_1.Unprotected)(),
    __metadata("design:paramtypes", [paywall_service_1.PaywallService])
], PaywallController);
//# sourceMappingURL=paywall.controller.js.map