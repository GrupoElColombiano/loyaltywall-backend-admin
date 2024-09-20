import { KeycloakService } from './KeycloakService';
export declare class KeycloakController {
    private readonly keycloakService;
    constructor(keycloakService: KeycloakService);
    loginTokenFinalUsers(credentials: any): Promise<any>;
    findAllWithPaginationAndFilterFinalUsers(tokenAccess: string, query: any): Promise<any[]>;
    loginToken(credentials: any): Promise<any>;
    refreshToken(refresh_token: string): Promise<any>;
    createUser(user: any, tokenAccess: string): Promise<any>;
    findAllPagination(tokenAccess: string, query: any): Promise<any[]>;
    listUsers(tokenAccess: string): Promise<any>;
    findAllPaginationRoles(tokenAccess: string, query: any): Promise<any[]>;
    listRoles(tokenAccess: string): Promise<any>;
    createPaywallModule(paywallModule: any): Promise<any>;
    listPaywallModule(): Promise<any>;
    editUser(user: any, id: any, tokenAccess: string): Promise<any>;
    listUser(tokenAccess: string, id: any): Promise<any>;
    listUserByRol(tokenAccess: string, role: any): Promise<any>;
    listRolesByUser(tokenAccess: string, userId: any, req: any): Promise<any>;
}
