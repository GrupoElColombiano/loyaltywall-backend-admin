import { Repository } from 'typeorm';
import { UserAdminEntity } from './entities/user.entity';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
import { UserPlan } from 'src/common/entity/user-plan.entity';
export declare class UsersService {
    private readonly userRepo;
    private readonly userPlanRepo;
    private readonly registerLogService;
    constructor(userRepo: Repository<UserAdminEntity>, userPlanRepo: Repository<UserPlan>, registerLogService: RegisterlogService);
    createUser(createUserAdminDto: any): Promise<UserAdminEntity[] | {
        message: string;
    }>;
    getAllUser(page: number, limit: number, body: any): Promise<{
        result: UserAdminEntity[];
        total: number;
    }>;
    getUserPlanByIdKeycloak(idKeycloak: string): Promise<{
        message: string;
        result: UserAdminEntity;
    }>;
}
