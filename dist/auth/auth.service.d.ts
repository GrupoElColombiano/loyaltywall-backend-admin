import { RegisterlogService } from 'src/registerlog/registerlog.service';
export declare class AuthService {
    private readonly registerLogService;
    constructor(registerLogService: RegisterlogService);
    registerLoginUser(body: any): Promise<import("../registerlog/entity/register-log.entity").RegisterLog>;
    registerLogoutUser(body: any): Promise<import("../registerlog/entity/register-log.entity").RegisterLog>;
}
