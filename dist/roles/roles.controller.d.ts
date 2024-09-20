import { RolesService } from './roles.service';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    assignSitesToRole(role: string, siteIds: any[]): Promise<{
        statusCode: number;
        message: string;
        data: import("../common/entity/role-site-relations.entity").RoleSiteRelation[];
    }>;
    getSitesByRole(role: string): Promise<{
        statusCode: number;
        message: string;
        data: import("../sites/entities/site.entity").Site[];
    }>;
    updateSitesForRole(role: string, siteIds: any[]): Promise<{
        statusCode: number;
        message: string;
        data: import("../common/entity/role-site-relations.entity").RoleSiteRelation[];
    }>;
}
