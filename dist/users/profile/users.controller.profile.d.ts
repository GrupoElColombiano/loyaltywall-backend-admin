import { UpdateUserPasswordDto } from '../dto/update-user.dto';
import { UserProfileService } from './users.service.profile';
export declare class UserProfileController {
    private readonly UserProfileService;
    constructor(UserProfileService: UserProfileService);
    update(id: string, updateUserPasswordDto: UpdateUserPasswordDto): Promise<import("../entities/user.entity").UserAdminEntity>;
}
