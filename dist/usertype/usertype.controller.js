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
exports.UsertypeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const usertype_service_1 = require("./usertype.service");
const usertype_dto_1 = require("./dto/usertype.dto");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
let UsertypeController = exports.UsertypeController = class UsertypeController {
    constructor(usertypeService) {
        this.usertypeService = usertypeService;
    }
    create(userType) {
        return this.usertypeService.create(userType);
    }
    findUserType() {
        return this.usertypeService.findUserType();
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entity/usertype.entity").UserType }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usertype_dto_1.UserTypeDto]),
    __metadata("design:returntype", void 0)
], UsertypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entity/usertype.entity").UserType] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsertypeController.prototype, "findUserType", null);
exports.UsertypeController = UsertypeController = __decorate([
    (0, common_1.Controller)('usertype'),
    (0, nest_keycloak_connect_1.Unprotected)(),
    __metadata("design:paramtypes", [usertype_service_1.UsertypeService])
], UsertypeController);
//# sourceMappingURL=usertype.controller.js.map