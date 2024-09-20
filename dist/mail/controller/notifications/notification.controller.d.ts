import { NotificationService } from '../../service/notifications/delete-plan-notification.service';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    sendPlanExpirationNotification(body: {
        name: string;
        email: string;
    }): Promise<{
        message: string;
    }>;
}
