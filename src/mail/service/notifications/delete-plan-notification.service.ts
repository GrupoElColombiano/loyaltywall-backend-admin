import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { notifyDeletedPlanHTML } from 'src/mail/template/notification/notify-deleted-plan';

@Injectable()
export class NotificationService {
  constructor(private readonly mailerService: MailerService) {}

  async sendPlanExpirationNotification(
    name: string,
    email: string,
  ): Promise<void> {
    const mailOptions = {
      to: email,
      subject: 'Notificación de caducidad del plan de LoyaltyWall',
      html: notifyDeletedPlanHTML(name, email), // Nombre del archivo de plantilla de correo
    };

    await this.mailerService.sendMail(mailOptions);
  }
}
