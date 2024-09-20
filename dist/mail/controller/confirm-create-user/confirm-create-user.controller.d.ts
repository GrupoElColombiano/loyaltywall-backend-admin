import { ConfirmCreateUserService } from '../../service/confirm-create-user/confirm-create-user.service';
export declare class ConfirmCreateUserController {
    private readonly confirmCreateUserService;
    constructor(confirmCreateUserService: ConfirmCreateUserService);
    sendMail(): Promise<any>;
    confirmCreateUserMail(email: string, domine: string): Promise<any>;
}
