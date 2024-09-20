import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NotFoundException } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ResetPasswordMailService } from '../../service/reset-password/reset-password.mail.service';
import { Public, Resource, Roles, Scopes, Unprotected } from 'nest-keycloak-connect';

@Controller('email')
@Unprotected()
export class ResetPasswordMailController {
  constructor(private ResetPasswordMailService: ResetPasswordMailService) {}

  @Post('reset-password')
  async sendMail(@Body('mail') mail: string, @Body('domine') domine: string) {
    try {
      await this.ResetPasswordMailService.sendPasswordReset(mail, domine);
      return 'Email sent successfully';
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      } else {
        console.log('Error en el envío de la info', error);
        throw new HttpException(
          'Failed to send the email',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
