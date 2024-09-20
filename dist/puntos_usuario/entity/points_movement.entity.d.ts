import { Site } from '../../sites/entities/site.entity';
import { UserAdminEntity } from '../../users/entities/user.entity';
export declare class PointsMovement {
    id: number;
    total_points: number;
    current_points: number;
    expired_points: number;
    redeemed_points: number;
    system_date: Date;
    user: UserAdminEntity;
    site: Site;
}
