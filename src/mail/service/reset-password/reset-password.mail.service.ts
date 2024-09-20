import { InjectRepository } from '@nestjs/typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ResetPasswordEntity } from '../../entitys/reset-password.entity';
import { Repository } from 'typeorm';
import { UserAdminEntity } from 'src/users/entities/user.entity';
import * as jwt from 'jsonwebtoken';
import { resetPasswordHTML } from '../../template/reset-password/reset-password.template';

@Injectable()
export class ResetPasswordMailService {
  constructor(
    @InjectRepository(ResetPasswordEntity)
    private readonly resetPasswordRepository: Repository<ResetPasswordEntity>,
    @InjectRepository(UserAdminEntity)
    private readonly userRepository: Repository<UserAdminEntity>,
    private readonly mailerService: MailerService,
  ) {}

  async sendPasswordReset(mail: string, domine: string) {
    try {
      const user = await this.userRepository.findOne({
        where: { email: mail },
      });

      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }

      const token = jwt.sign({ email: mail }, 'secret', { expiresIn: '1h' });

      const url = `${domine}/${token}`;
      await this.mailerService.sendMail({
        to: mail,
        subject: 'Restablecimiento de contraseña',
        html: resetPasswordHTML(url),
      });

      const resetPasswordEntity: ResetPasswordEntity = {
        email: mail,
        token: token,
      };

      await this.createUserToken(resetPasswordEntity);
    } catch (error) {
      console.error(error);
      throw error; // Propaga el error al cliente
    }
  }

  async createUserToken(resetPasswordEntity: ResetPasswordEntity) {
    try {
      await this.resetPasswordRepository.save(resetPasswordEntity);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
