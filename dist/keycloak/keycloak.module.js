"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakModule = void 0;
const common_1 = require("@nestjs/common");
const KeycloakService_1 = require("./KeycloakService");
const keycloak_controller_1 = require("./keycloak.controller");
const axios_1 = require("@nestjs/axios");
const common_module_1 = require("../common/common.module");
const typeorm_1 = require("@nestjs/typeorm");
const paywallModule_entity_1 = require("../common/entity/paywallModule.entity");
const roles_module_1 = require("../roles/roles.module");
const registerlog_module_1 = require("../registerlog/registerlog.module");
let KeycloakModule = exports.KeycloakModule = class KeycloakModule {
};
exports.KeycloakModule = KeycloakModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            common_module_1.CommonModule,
            roles_module_1.RolesModule,
            typeorm_1.TypeOrmModule.forFeature([
                paywallModule_entity_1.PaywallModule
            ]),
            registerlog_module_1.RegisterlogModule,
        ],
        providers: [KeycloakService_1.KeycloakService],
        controllers: [keycloak_controller_1.KeycloakController],
    })
], KeycloakModule);
//# sourceMappingURL=keycloak.module.js.map