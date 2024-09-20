import { Event } from './event.entity';
import { Cluster } from './cluster.entity';
import { Site } from 'src/sites/entities/site.entity';
export declare class EventCluster {
    id_event_cluster: number;
    event_repeats: number;
    porcentual_value: number;
    events: Event[];
    clusters: Cluster[];
    site: Site;
}
