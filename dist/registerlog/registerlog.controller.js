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
exports.RegisterlogController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const registerlog_service_1 = require("./registerlog.service");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
let RegisterlogController = exports.RegisterlogController = class RegisterlogController {
    constructor(registerlogService) {
        this.registerlogService = registerlogService;
    }
    async createRegisterlog(registerlogDto) {
        return this.registerlogService.create(registerlogDto);
    }
    async createPaymentTransactions(paymentTransactionDto) {
        return this.registerlogService.createPaymentTransaction(paymentTransactionDto);
    }
    async createPaymentTransaction(paymentTransactionDto) {
        return this.registerlogService.createPaymentTransaction(paymentTransactionDto);
    }
    async findAll(registerlogDto) {
        return this.registerlogService.findAll(registerlogDto);
    }
    async findAllPaymentTransaction(idSite, query) {
        return this.registerlogService.findAllPaymentTransaction(query, idSite);
    }
};
__decorate([
    (0, nest_keycloak_connect_1.Public)(true),
    (0, common_1.Post)('create'),
    openapi.ApiResponse({ status: 201, type: require("./entity/register-log.entity").RegisterLog }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegisterlogController.prototype, "createRegisterlog", null);
__decorate([
    (0, nest_keycloak_connect_1.Public)(true),
    (0, common_1.Post)('createPaymentTransaction'),
    openapi.ApiResponse({ status: 201, type: require("./entity/payment-log.entity").PaymentTransaction }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegisterlogController.prototype, "createPaymentTransactions", null);
__decorate([
    (0, nest_keycloak_connect_1.Public)(true),
    (0, common_1.Post)('createPaymentTransaction'),
    openapi.ApiResponse({ status: 201, type: require("./entity/payment-log.entity").PaymentTransaction }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegisterlogController.prototype, "createPaymentTransaction", null);
__decorate([
    (0, nest_keycloak_connect_1.Public)(true),
    (0, common_1.Get)('findAll'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegisterlogController.prototype, "findAll", null);
__decorate([
    (0, nest_keycloak_connect_1.Public)(true),
    (0, common_1.Get)(':idSite/findAllPaymentTransaction'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('idSite')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RegisterlogController.prototype, "findAllPaymentTransaction", null);
exports.RegisterlogController = RegisterlogController = __decorate([
    (0, common_1.Controller)('registerlog'),
    (0, nest_keycloak_connect_1.Unprotected)(),
    __metadata("design:paramtypes", [registerlog_service_1.RegisterlogService])
], RegisterlogController);
//# sourceMappingURL=registerlog.controller.js.map