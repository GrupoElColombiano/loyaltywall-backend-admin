import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { changePasswordHTML } from 'src/mail/template/confirm-change-password/confirm-change-password.template';
import { UserAdminEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { ChangePasswordEntity } from 'src/mail/entitys/change-password.entity';

// cambiar los injectables de resetpassword a change passwords
@Injectable()
export class ChangePasswordMailService {
  constructor(
    @InjectRepository(ChangePasswordEntity)
    private readonly changePasswordRepository: Repository<ChangePasswordEntity>,
    @InjectRepository(UserAdminEntity)
    private readonly userRepository: Repository<UserAdminEntity>,
    private readonly mailerService: MailerService,
  ) {}

  async sendPasswordChange(mail: string) {
    try {
      const user = await this.userRepository.findOne({
        where: { email: mail },
      });

      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }

      const token = jwt.sign({ email: mail }, 'secret', { expiresIn: '1h' });

      const code = token.slice(-6);
      await this.mailerService.sendMail({
        to: mail,
        subject: 'Cambio de contraseña',
        html: changePasswordHTML(code),
      });

      const changePasswordEntity: ChangePasswordEntity = {
        email: mail,
        token: code,
      };

      await this.createChangePassword(changePasswordEntity);

      return {
        message: 'Se ha enviado un correo para cambiar la contraseña',
      };
    } catch (error) {
      console.error(error);
      throw error; // Propaga el error al cliente
    }
  }

  // cambiar metodo de reset password repositoy a change password repository
  async createChangePassword(resetPasswordEntity: ChangePasswordEntity) {
    try {
      await this.changePasswordRepository.save(resetPasswordEntity);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
