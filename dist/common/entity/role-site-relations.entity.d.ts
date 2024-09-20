import { Site } from '../../sites/entities/site.entity';
export declare class RoleSiteRelation {
    id: number;
    role: string;
    site: Site;
    isActive: boolean;
}
