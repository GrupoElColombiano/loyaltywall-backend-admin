import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ResetPasswordMailController } from './controller/reset-password/reset-password.mail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResetPasswordEntity } from './entitys/reset-password.entity';
import { UserAdminEntity } from 'src/users/entities/user.entity';
import { TwoFactorAuthenticationMailService } from './service/two-factor-authenticate/two-factor-authentication.mail.service';
import { ResetPasswordMailService } from './service/reset-password/reset-password.mail.service';
import { ConfirmCreateUserController } from './controller/confirm-create-user/confirm-create-user.controller';
import { ConfirmCreateUserService } from './service/confirm-create-user/confirm-create-user.service';
import { ChangePasswordMailService } from './service/change-password/change-password.mail.service';
import { ChangePasswordEntity } from './entitys/change-password.entity';
import { ChangePasswordMailController } from './controller/change-password/change-password.controller';
import { NotificationController } from './controller/notifications/notification.controller';
import { NotificationService } from './service/notifications/delete-plan-notification.service';

@Module({
  imports: [
    MailerModule.forRoot({
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
    TypeOrmModule.forFeature([ResetPasswordEntity]),
    TypeOrmModule.forFeature([UserAdminEntity]),
    TypeOrmModule.forFeature([ChangePasswordEntity]),
  ],
  providers: [
    ResetPasswordMailService,
    TwoFactorAuthenticationMailService,
    ConfirmCreateUserService,
    ChangePasswordMailService,
    NotificationService,
  ],
  exports: [
    ResetPasswordMailService,
    TwoFactorAuthenticationMailService,
    ConfirmCreateUserService,
    ChangePasswordMailService,
    NotificationService,
  ],
  controllers: [
    ResetPasswordMailController,
    ConfirmCreateUserController,
    ChangePasswordMailController,
    NotificationController,
  ],
})
export class MailModule {
  constructor() {
    //console.log('MailModule loaded');
    //console.log(process.env);
  }
}
