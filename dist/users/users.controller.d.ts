import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserAdminDto: any): Promise<import("./entities/user.entity").UserAdminEntity[] | {
        message: string;
    }>;
    getAll(createUserAdminDto: any, page: number, limit: number): Promise<{
        result: import("./entities/user.entity").UserAdminEntity[];
        total: number;
    }>;
    getById(idKeycloak: string): Promise<{
        message: string;
        result: import("./entities/user.entity").UserAdminEntity;
    }>;
    authenticate(body: {
        username: string;
        password: string;
    }): Promise<any>;
}
