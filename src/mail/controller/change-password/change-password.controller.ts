import { Post, Body, Controller } from '@nestjs/common';
import { ChangePasswordMailService } from 'src/mail/service/change-password/change-password.mail.service';

import { Public, Resource, Roles, Scopes, Unprotected } from 'nest-keycloak-connect';
@Controller('email')
@Unprotected()
export class ChangePasswordMailController {
  constructor(private changePasswordMailService: ChangePasswordMailService) {}

  @Post('change-password')
  async sendMail(@Body('mail') mail: string) {
    console.log('email', mail);
    return await this.changePasswordMailService.sendPasswordChange(mail);
  }
}
