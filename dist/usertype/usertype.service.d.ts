import { Repository } from 'typeorm';
import { UserType } from './entity/usertype.entity';
export declare class UsertypeService {
    private readonly userTypeRepository;
    constructor(userTypeRepository: Repository<UserType>);
    create(userType: any): Promise<UserType>;
    findUserType(): Promise<UserType[]>;
}
