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
exports.MailModule = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const reset_password_mail_controller_1 = require("./controller/reset-password/reset-password.mail.controller");
const typeorm_1 = require("@nestjs/typeorm");
const reset_password_entity_1 = require("./entitys/reset-password.entity");
const user_entity_1 = require("../users/entities/user.entity");
const two_factor_authentication_mail_service_1 = require("./service/two-factor-authenticate/two-factor-authentication.mail.service");
const reset_password_mail_service_1 = require("./service/reset-password/reset-password.mail.service");
const confirm_create_user_controller_1 = require("./controller/confirm-create-user/confirm-create-user.controller");
const confirm_create_user_service_1 = require("./service/confirm-create-user/confirm-create-user.service");
const change_password_mail_service_1 = require("./service/change-password/change-password.mail.service");
const change_password_entity_1 = require("./entitys/change-password.entity");
const change_password_controller_1 = require("./controller/change-password/change-password.controller");
const notification_controller_1 = require("./controller/notifications/notification.controller");
const delete_plan_notification_service_1 = require("./service/notifications/delete-plan-notification.service");
let MailModule = exports.MailModule = class MailModule {
    constructor() {
    }
};
exports.MailModule = MailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: process.env.GMAIL_HOST,
                    port: 587,
                    secure: false,
                    auth: {
                        user: process.env.GMAIL_USER,
                        pass: process.env.GMAIL_PASSWORD,
                    },
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([reset_password_entity_1.ResetPasswordEntity]),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserAdminEntity]),
            typeorm_1.TypeOrmModule.forFeature([change_password_entity_1.ChangePasswordEntity]),
        ],
        providers: [
            reset_password_mail_service_1.ResetPasswordMailService,
            two_factor_authentication_mail_service_1.TwoFactorAuthenticationMailService,
            confirm_create_user_service_1.ConfirmCreateUserService,
            change_password_mail_service_1.ChangePasswordMailService,
            delete_plan_notification_service_1.NotificationService,
        ],
        exports: [
            reset_password_mail_service_1.ResetPasswordMailService,
            two_factor_authentication_mail_service_1.TwoFactorAuthenticationMailService,
            confirm_create_user_service_1.ConfirmCreateUserService,
            change_password_mail_service_1.ChangePasswordMailService,
            delete_plan_notification_service_1.NotificationService,
        ],
        controllers: [
            reset_password_mail_controller_1.ResetPasswordMailController,
            confirm_create_user_controller_1.ConfirmCreateUserController,
            change_password_controller_1.ChangePasswordMailController,
            notification_controller_1.NotificationController,
        ],
    }),
    __metadata("design:paramtypes", [])
], MailModule);
//# sourceMappingURL=mail.module.js.map