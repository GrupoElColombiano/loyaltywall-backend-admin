import { Event } from '../entities/event.entity';
import { Site } from '../../sites/entities/site.entity';
import { EventCluster } from './event_cluster.entity';
export declare class Cluster {
    id_cluster: number;
    name: string;
    create_at: Date;
    update_at: Date;
    events: Event[];
    sites: Site[];
    eventCluster: EventCluster[];
}
