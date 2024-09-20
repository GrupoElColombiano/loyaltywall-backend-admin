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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const notify_deleted_plan_1 = require("../../template/notification/notify-deleted-plan");
let NotificationService = exports.NotificationService = class NotificationService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendPlanExpirationNotification(name, email) {
        const mailOptions = {
            to: email,
            subject: 'Notificación de caducidad del plan de LoyaltyWall',
            html: (0, notify_deleted_plan_1.notifyDeletedPlanHTML)(name, email),
        };
        await this.mailerService.sendMail(mailOptions);
    }
};
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], NotificationService);
//# sourceMappingURL=delete-plan-notification.service.js.map