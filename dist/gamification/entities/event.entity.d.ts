import { Cluster } from '../entities/cluster.entity';
import { Site } from '../../sites/entities/site.entity';
import { EventCluster } from './event_cluster.entity';
import { PointsEvents } from '../../puntos_usuario/entity/points_events.entity';
import { UserPoints } from '../../puntos_usuario/entity/user_points.entity';
export declare class Event {
    id_event: number;
    name: string;
    description: string;
    points: number;
    event_repeats?: number;
    porcentual_value?: number;
    create_at: Date;
    update_at: Date;
    clusters: Cluster[];
    sites: Site[];
    event_cluster: EventCluster[];
    points_events: PointsEvents[];
    user_points: UserPoints[];
}
