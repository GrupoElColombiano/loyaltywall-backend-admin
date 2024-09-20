import { HttpService } from '@nestjs/axios';
import { PaywallModule } from 'src/common/entity/paywallModule.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { RolesService } from 'src/roles/roles.service';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
export declare class KeycloakService {
    private readonly httpService;
    private readonly paywallModuleRepository;
    private readonly configService;
    private readonly rolesService;
    private readonly registerlogService;
    private authServerUrl;
    private realm;
    private clientIdNumber;
    private clientId;
    private clientSecret;
    private realmlist;
    private outsideRealm;
    private outsideClientId;
    private outsideClientSecret;
    constructor(httpService: HttpService, paywallModuleRepository: Repository<PaywallModule>, configService: ConfigService, rolesService: RolesService, registerlogService: RegisterlogService);
    loginTokenFinalUsers(credentials: any): Promise<any>;
    findAllWithPaginationAndFilterFinalUsers(tokenAccess: any, query: {
        role?: string;
        search?: string;
        enabled?: string;
        page?: string;
        limit?: string;
    }): Promise<any>;
    loginToken(credentials: any): Promise<any>;
    refreshToken(refresh_token: any): Promise<any>;
    createUser(user: any, tokenAccess: string): Promise<any>;
    listUsers(tokenAccess: string): Promise<any>;
    listRoles(tokenAccess: string): Promise<any>;
    createPaywallModule(paywallModule: any): Promise<PaywallModule>;
    listPaywallModules(): Promise<any>;
    editUser(tokenAccess: string, user: any, id: any): Promise<any>;
    findUser(tokenAccess: string, id: any): Promise<any>;
    findUsersByRole(tokenAccess: string, role: any): Promise<any>;
    listRolesByUser(tokenAccess: string, userId: any, clientIp?: any, userAgent?: any): Promise<any>;
    findAllWithPaginationAndFilter(tokenAccess: any, query: {
        role?: string;
        search?: string;
        enabled?: string;
        page?: string;
        limit?: string;
    }): Promise<any>;
    findAllWithPaginationAndFilterRoles(tokenAccess: any, query: {
        search?: string;
        page?: string;
        limit?: string;
        idSite?: string;
    }): Promise<any>;
}
