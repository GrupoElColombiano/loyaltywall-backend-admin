"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const config_1 = require("@nestjs/config");
const enviroments_1 = require("./enviroments");
const config_2 = require("./config");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const sites_module_1 = require("./sites/sites.module");
const auth_module_1 = require("./auth/auth.module");
const roles_module_1 = require("./roles/roles.module");
const database_module_1 = require("./database/database.module");
const mail_module_1 = require("./mail/mail.module");
const nestjs_i18n_1 = require("nestjs-i18n");
const product_module_1 = require("./product/product.module");
const plans_module_1 = require("./plans/plans.module");
const usertype_module_1 = require("./usertype/usertype.module");
const path_1 = require("path");
const category_module_1 = require("./category/category.module");
const common_module_1 = require("./common/common.module");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const keycloak_config_service_1 = require("./auth/keycloak-config.service");
const keycloak_module_1 = require("./keycloak/keycloak.module");
const access_modules_module_1 = require("./access-modules/access-modules.module");
const template_manager_module_1 = require("./template-manager/template-manager.module");
const registerlog_module_1 = require("./registerlog/registerlog.module");
const gamification_module_1 = require("./gamification/gamification.module");
const assets_module_1 = require("./assets/assets.module");
const puntos_usuario_module_1 = require("./puntos_usuario/puntos_usuario.module");
const paywall_module_1 = require("./paywall/paywall.module");
const payment_module_1 = require("./payment/payment.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                load: [config_2.default],
                isGlobal: true,
            }),
            nest_keycloak_connect_1.KeycloakConnectModule.registerAsync({
                useExisting: keycloak_config_service_1.KeycloakConfigService,
                imports: [auth_module_1.AuthModule],
            }),
            users_module_1.UsersModule,
            sites_module_1.SitesModule,
            auth_module_1.AuthModule,
            roles_module_1.RolesModule,
            database_module_1.DatabaseModule,
            mail_module_1.MailModule,
            nestjs_i18n_1.I18nModule.forRoot({
                fallbackLanguage: 'en',
                loaderOptions: {
                    path: (0, path_1.join)(__dirname, '/i18n/'),
                    watch: true,
                },
                typesOutputPath: (0, path_1.join)(__dirname, '../src/i18n/generated/i18n.generated.ts'),
                resolvers: [
                    { use: nestjs_i18n_1.QueryResolver, options: ['lang'] },
                    nestjs_i18n_1.AcceptLanguageResolver,
                    new nestjs_i18n_1.HeaderResolver(['x-lang']),
                ],
            }),
            product_module_1.ProductModule,
            plans_module_1.PlansModule,
            usertype_module_1.UsertypeModule,
            category_module_1.CategoryModule,
            common_module_1.CommonModule,
            keycloak_module_1.KeycloakModule,
            access_modules_module_1.AccessModulesModule,
            template_manager_module_1.TemplateManagerModule,
            registerlog_module_1.RegisterlogModule,
            gamification_module_1.GamificationModule,
            assets_module_1.AssetsModule,
            puntos_usuario_module_1.PuntosUsuarioModule,
            paywall_module_1.PaywallModule,
            payment_module_1.PaymentModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: nest_keycloak_connect_1.AuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: nest_keycloak_connect_1.ResourceGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: nest_keycloak_connect_1.RoleGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map