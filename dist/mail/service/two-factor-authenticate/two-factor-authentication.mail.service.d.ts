import { MailerService } from '@nestjs-modules/mailer';
import { UserAdminEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
export declare class TwoFactorAuthenticationMailService {
    private readonly userEntity;
    private readonly mailerService;
    constructor(userEntity: Repository<UserAdminEntity>, mailerService: MailerService);
    sendTwoFactorAuthenticationMail(mail: string, domine: string, firstName: string): Promise<{
        token: string;
        message: string;
    }>;
    sendConfirmationTwoFactorAuthenticationMail(firstName: string, email: string): Promise<void>;
}
