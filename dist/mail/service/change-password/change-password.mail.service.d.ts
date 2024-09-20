import { MailerService } from '@nestjs-modules/mailer';
import { UserAdminEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { ChangePasswordEntity } from 'src/mail/entitys/change-password.entity';
export declare class ChangePasswordMailService {
    private readonly changePasswordRepository;
    private readonly userRepository;
    private readonly mailerService;
    constructor(changePasswordRepository: Repository<ChangePasswordEntity>, userRepository: Repository<UserAdminEntity>, mailerService: MailerService);
    sendPasswordChange(mail: string): Promise<{
        message: string;
    }>;
    createChangePassword(resetPasswordEntity: ChangePasswordEntity): Promise<void>;
}
