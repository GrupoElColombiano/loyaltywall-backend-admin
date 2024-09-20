import { PointsEvents } from '../../puntos_usuario/entity/points_events.entity';
import { PointsMovement } from '../../puntos_usuario/entity/points_movement.entity';
import { UserPoints } from '../../puntos_usuario/entity/user_points.entity';
export declare class UserAdminEntity {
    id?: number;
    idKeycloak?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    document_type?: string;
    document_number?: string;
    birthdate?: Date;
    gener?: string;
    phone?: number;
    address?: string;
    city?: string;
    department?: string;
    country?: string;
    lastLogin?: Date;
    creationDate?: Date;
    pointsEvents: PointsEvents[];
    pointsMovement: PointsMovement[];
    userPoints: UserPoints[];
}
