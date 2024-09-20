import { UserAdminEntity } from '../../users/entities/user.entity';
import { Site } from '../../sites/entities/site.entity';
import { Event } from '../../gamification/entities/event.entity';
export declare class UserPoints {
    id_user_points: number;
    product: string;
    idProduct: number;
    points: number;
    system_date: Date;
    user: UserAdminEntity;
    site: Site;
    event: Event;
}
