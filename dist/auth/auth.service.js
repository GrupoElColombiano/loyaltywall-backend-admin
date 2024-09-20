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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const registerlog_service_1 = require("../registerlog/registerlog.service");
let AuthService = exports.AuthService = class AuthService {
    constructor(registerLogService) {
        this.registerLogService = registerLogService;
    }
    async registerLoginUser(body) {
        const registerlog = {
            "userId": 876,
            "roleId": 6,
            "activityType": "Login",
            "description": "El usuario ha sido logueado.",
            "affectedObject": "Login",
            "success": true,
            "ipAddress": "6585876587658765876",
            "userAgent": "mozilla/5.0",
            "timestamp": "2023-09-13T12:34:56.789Z"
        };
        try {
            const newRegisterLog = await this.registerLogService.create(registerlog);
            return newRegisterLog;
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async registerLogoutUser(body) {
        const registerlog = {
            "userId": 876,
            "roleId": 6,
            "activityType": "Logout",
            "description": "El usuario ha sido deslogueado.",
            "affectedObject": "Logout",
            "success": true,
            "ipAddress": "6585876587658765876",
            "userAgent": "mozilla/5.0",
            "timestamp": "2023-09-13T12:34:56.789Z"
        };
        try {
            const newRegisterLog = await this.registerLogService.create(registerlog);
            return newRegisterLog;
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [registerlog_service_1.RegisterlogService])
], AuthService);
//# sourceMappingURL=auth.service.js.map