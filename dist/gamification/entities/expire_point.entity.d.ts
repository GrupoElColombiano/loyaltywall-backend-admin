import { Site } from '../../sites/entities/site.entity';
export declare class ExpireTimePoint {
    id_expire_time: number;
    expire_time: number;
    is_active: boolean;
    create_at: Date;
    update_at: Date;
    site: Site;
}
