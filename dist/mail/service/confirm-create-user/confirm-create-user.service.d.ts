import { Repository } from 'typeorm';
import { UserAdminEntity } from 'src/users/entities/user.entity';
import { MailerService } from '@nestjs-modules/mailer';
export declare class ConfirmCreateUserService {
    private readonly userRepository;
    private readonly mailerService;
    constructor(userRepository: Repository<UserAdminEntity>, mailerService: MailerService);
    sendConfirmCreateUser(email: string, domain: string): Promise<any>;
}
