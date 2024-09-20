import { ChangePasswordMailService } from 'src/mail/service/change-password/change-password.mail.service';
export declare class ChangePasswordMailController {
    private changePasswordMailService;
    constructor(changePasswordMailService: ChangePasswordMailService);
    sendMail(mail: string): Promise<{
        message: string;
    }>;
}
