import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from '../../service/notifications/delete-plan-notification.service';
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('plan-expiration')
  async sendPlanExpirationNotification(
    @Body() body: { name: string; email: string },
  ) {
    const { email, name } = body;
    await this.notificationService.sendPlanExpirationNotification(name, email);
    return { message: 'Notificación enviada exitosamente' };
  }
}
