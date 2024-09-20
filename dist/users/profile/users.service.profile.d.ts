import { Repository } from 'typeorm';
import { UserAdminEntity } from '../entities/user.entity';
import { UpdateUserPasswordDto } from '../dto/update-user.dto';
export declare class UserProfileService {
    private userRepo;
    constructor(userRepo: Repository<UserAdminEntity>);
    updatePassword(id: number, updateUserPasswordDto: UpdateUserPasswordDto): Promise<UserAdminEntity>;
}
