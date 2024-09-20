import { Event } from '../../gamification/entities/event.entity';
import { Site } from '../../sites/entities/site.entity';
import { UserAdminEntity } from '../../users/entities/user.entity';
export declare class PointsEvents {
    id: number;
    points: number;
    registration_date: Date;
    expiration_date: Date;
    user: UserAdminEntity;
    site: Site;
    event: Event;
}
