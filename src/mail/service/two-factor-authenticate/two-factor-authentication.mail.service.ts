import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserAdminEntity } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { twoFactorAuthHTML } from '../../template/two--factor-authentication/two-factor-authentication.template';
import { twoFactorAuthConfirmedHTML } from '../../template/two--factor-authentication/two-factor-confirmed.template';

@Injectable()
export class TwoFactorAuthenticationMailService {
  constructor(
    @InjectRepository(UserAdminEntity)
    private readonly userEntity: Repository<UserAdminEntity>,
    private readonly mailerService: MailerService,
  ) {}

  async sendTwoFactorAuthenticationMail(
    mail: string,
    domine: string,
    firstName: string,
  ) {
    try {
      const token = jwt.sign({ mail: mail }, 'secret', { expiresIn: '1h' });
      const url = `${domine}/${token}`;

      await this.mailerService.sendMail({
        to: mail,
        subject: 'Two Factor Authentication',
        html: twoFactorAuthHTML(mail, firstName, url),
      });

      return {
        token: token,
        message:
          'Se ha enviado un correo a su cuenta de correo electrónico. Por favor, verifique su bandeja de entrada y complete el proceso de registro.',
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async sendConfirmationTwoFactorAuthenticationMail(
    firstName: string,
    email: string,
  ) {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Two Factor Authentication',
        html: twoFactorAuthConfirmedHTML(email, firstName),
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException(error);
    }
  }
}
