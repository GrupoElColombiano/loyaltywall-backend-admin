"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterlogModule = void 0;
const common_1 = require("@nestjs/common");
const registerlog_service_1 = require("./registerlog.service");
const registerlog_controller_1 = require("./registerlog.controller");
const typeorm_1 = require("@nestjs/typeorm");
const register_log_entity_1 = require("./entity/register-log.entity");
const payment_log_entity_1 = require("./entity/payment-log.entity");
let RegisterlogModule = exports.RegisterlogModule = class RegisterlogModule {
};
exports.RegisterlogModule = RegisterlogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([register_log_entity_1.RegisterLog, payment_log_entity_1.PaymentTransaction])],
        providers: [registerlog_service_1.RegisterlogService],
        controllers: [registerlog_controller_1.RegisterlogController],
        exports: [registerlog_service_1.RegisterlogService],
    })
], RegisterlogModule);
//# sourceMappingURL=registerlog.module.js.map