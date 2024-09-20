"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakConfigService = void 0;
const common_1 = require("@nestjs/common");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
let KeycloakConfigService = exports.KeycloakConfigService = class KeycloakConfigService {
    createKeycloakConnectOptions() {
        return {
            authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL,
            realm: process.env.KEYCLOAK_REALM,
            clientId: process.env.KEYCLOAK_CLIENT_ID,
            secret: process.env.KEYCLOAK_SECRET,
            cookieKey: 'KEYCLOAK_JWT',
            logLevels: ['verbose'],
            useNestLogger: true,
            policyEnforcement: nest_keycloak_connect_1.PolicyEnforcementMode.PERMISSIVE,
            tokenValidation: nest_keycloak_connect_1.TokenValidation.OFFLINE,
        };
    }
};
exports.KeycloakConfigService = KeycloakConfigService = __decorate([
    (0, common_1.Injectable)()
], KeycloakConfigService);
//# sourceMappingURL=keycloak-config.service.js.map