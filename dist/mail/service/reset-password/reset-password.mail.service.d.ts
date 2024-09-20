import { MailerService } from '@nestjs-modules/mailer';
import { ResetPasswordEntity } from '../../entitys/reset-password.entity';
import { Repository } from 'typeorm';
import { UserAdminEntity } from 'src/users/entities/user.entity';
export declare class ResetPasswordMailService {
    private readonly resetPasswordRepository;
    private readonly userRepository;
    private readonly mailerService;
    constructor(resetPasswordRepository: Repository<ResetPasswordEntity>, userRepository: Repository<UserAdminEntity>, mailerService: MailerService);
    sendPasswordReset(mail: string, domine: string): Promise<void>;
    createUserToken(resetPasswordEntity: ResetPasswordEntity): Promise<void>;
}
