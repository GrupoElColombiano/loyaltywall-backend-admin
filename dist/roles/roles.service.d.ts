import { RoleSiteRelation } from 'src/common/entity/role-site-relations.entity';
import { Repository } from 'typeorm';
export declare class RolesService {
    private roleSiteRepository;
    constructor(roleSiteRepository: Repository<RoleSiteRelation>);
    assignSitesToRole(role: any, siteIds: any[]): Promise<{
        statusCode: number;
        message: string;
        data: RoleSiteRelation[];
    }>;
    catch(error: any): void;
    getSitesByRole(role: any): Promise<{
        statusCode: number;
        message: string;
        data: import("../sites/entities/site.entity").Site[];
    }>;
    updateSitesForRole(role: string, siteIds: any[]): Promise<{
        statusCode: number;
        message: string;
        data: RoleSiteRelation[];
    }>;
}
