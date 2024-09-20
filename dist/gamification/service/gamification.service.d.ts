import { PointValue } from '../entities/point-value.entity';
import { Repository } from 'typeorm';
import { Event } from '../entities/event.entity';
import { ExpireTimePoint } from '../entities/expire_point.entity';
import { Cluster } from '../entities/cluster.entity';
import { Site } from 'src/sites/entities/site.entity';
import { EventCluster } from '../entities/event_cluster.entity';
import { ClusterPenalization } from '../entities/cluster_penalization.entity';
import { PointsEvents } from 'src/puntos_usuario/entity/points_events.entity';
import { EventsPointsSite } from 'src/common/entity/events-points-site.entity';
export declare class GamificationService {
    private pointValueRepository;
    private eventRepository;
    private expireTimePointRepository;
    private clusterRepository;
    private siteRepository;
    private eventClusterRepository;
    private clusterPenalizationRepository;
    private pointsEventsRepository;
    private eventsPointsSiteRepository;
    constructor(pointValueRepository: Repository<PointValue>, eventRepository: Repository<Event>, expireTimePointRepository: Repository<ExpireTimePoint>, clusterRepository: Repository<Cluster>, siteRepository: Repository<Site>, eventClusterRepository: Repository<EventCluster>, clusterPenalizationRepository: Repository<ClusterPenalization>, pointsEventsRepository: Repository<PointsEvents>, eventsPointsSiteRepository: Repository<EventsPointsSite>);
    create(createGamificationDto: any): string;
    findPointValueBySite(idSite: any): Promise<{
        point_value: number;
    }>;
    updatePointValueBySite(idSite: any, body: any): Promise<{
        message: string;
        value: any;
        idSite: any;
    }>;
    createNewExpireTimeAndDeactivateCurrent(siteId: number, expireTime: number): Promise<ExpireTimePoint[]>;
    listActiveExpireTimePointsBySiteId(siteId: number): Promise<ExpireTimePoint[]>;
    createEvent(body: any): Promise<{
        message: string;
        event: import("typeorm").InsertResult;
    }>;
    findAllEvent(): Promise<{
        events: Event[];
    }>;
    findEventsWithPoints(idSite: any): Promise<{
        total: number;
        events: EventsPointsSite[];
    }>;
    updateEvent(id_event: number, body: any): Promise<{
        message: string;
        event: EventsPointsSite[];
    } | {
        message: string;
        event: import("typeorm").UpdateResult;
    } | {
        message: string;
        event?: undefined;
    }>;
    removeEvent(id_event: any, idSite: any): Promise<{
        message: string;
        event: import("typeorm").DeleteResult;
    }>;
    updateEventRepeats(id_event: any, body: any): Promise<{
        message: string;
        eventRepeats: import("typeorm").UpdateResult;
    }>;
    updatePorcentualValue(id_event: any, body: any): Promise<{
        message: string;
        porcentualValue: import("typeorm").UpdateResult;
    }>;
    getEventForCluster(id_cluster: any, idSite: any): Promise<EventCluster[]>;
    createClusterEvent(id_cluster: any, body: any): Promise<{
        message: string;
        queryBuilder: Promise<import("typeorm").InsertResult>;
    }>;
    updateEventCluster(id_cluster: any, body: any): Promise<{
        message: string;
    }>;
    removeEventFromCluster(id_cluster: any, id_event: any): Promise<{
        message: string;
        data: any;
    }>;
    createClusterPenalization(body: any): Promise<any>;
    updateClusterPenalization(body: any): Promise<any>;
    getAllClusterPenalization(): Promise<any>;
    getOneClusterPenalization(idSite: any): Promise<any>;
    agruparEventosPorNombre(eventos: any): Promise<any[]>;
    getAdvanceCluster(idSite: any, idKeycloak: any): Promise<any>;
}
