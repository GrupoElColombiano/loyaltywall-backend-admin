import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAdminEntity } from 'src/users/entities/user.entity';
import { MailerService } from '@nestjs-modules/mailer';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class ConfirmCreateUserService {
  constructor(
    @InjectRepository(UserAdminEntity)
    private readonly userRepository: Repository<UserAdminEntity>,
    private readonly mailerService: MailerService,
  ) {}

  async sendConfirmCreateUser(email: string, domain: string): Promise<any> {
    try {
      const user = await this.userRepository.findOne({
        where: { email },
      });

      if (!user) {
        throw new NotFoundException('El usuario no existe');
      }

      /*if (user.isVerified) {
        throw new NotFoundException('El usuario ya está confirmado');
      }*/

      // Generar el código de verificación de 6 dígitos
      const verificationCode = Math.floor(100000 + Math.random() * 900000);

      // Generar el token con el código de verificación
      const token = jwt.sign({ email: user.email }, 'secret', {
        expiresIn: '1h',
      });

      // Actualizar el usuario con el código de verificación
      //user.verificationCode = verificationCode;
      await this.userRepository.save(user);

      // Construir la URL de confirmación con el token y el dominio
      const confirmationUrl = `${domain}/${token}`;

      // Enviar la URL de confirmación y el código de verificación por correo electrónico
      await this.mailerService.sendMail({
        to: email,
        subject: 'Confirmación de usuario',
        html: `<h1>Bienvenido, ${user.firstName}!</h1>
          <p>Gracias por registrarte. Por favor, haz clic en el siguiente enlace para confirmar tu cuenta:</p>
          <a href="${confirmationUrl}">${confirmationUrl}</a>
          <p>Tu código de verificación es: ${verificationCode}</p>
        `,
      });

      return {
        messageConfirmCreateUser:
          'Verifica tu correo electrónico para confirmar tu cuenta',
      };
    } catch (error) {
      console.log('Error al confirmar el usuario', error);
      throw new NotFoundException(error.message);
    }
  }
}
