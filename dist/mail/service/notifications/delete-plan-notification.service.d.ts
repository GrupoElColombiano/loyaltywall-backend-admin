import { MailerService } from '@nestjs-modules/mailer';
export declare class NotificationService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendPlanExpirationNotification(name: string, email: string): Promise<void>;
}
