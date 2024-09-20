import { UsertypeService } from './usertype.service';
import { UserTypeDto } from './dto/usertype.dto';
export declare class UsertypeController {
    private readonly usertypeService;
    constructor(usertypeService: UsertypeService);
    create(userType: UserTypeDto): Promise<import("./entity/usertype.entity").UserType>;
    findUserType(): Promise<import("./entity/usertype.entity").UserType[]>;
}
