import { ResetPasswordMailService } from '../../service/reset-password/reset-password.mail.service';
export declare class ResetPasswordMailController {
    private ResetPasswordMailService;
    constructor(ResetPasswordMailService: ResetPasswordMailService);
    sendMail(mail: string, domine: string): Promise<string>;
}
