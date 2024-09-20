import { GamificationService } from '../service/gamification.service';
export declare class GamificationController {
    private readonly gamificationService;
    constructor(gamificationService: GamificationService);
    findPointValueBySite(idSite: number): Promise<{
        point_value: number;
    }>;
    updatePointValueBySite(idSite: number, body: any): Promise<{
        message: string;
        value: any;
        idSite: any;
    }>;
    createNewExpireTimeAndDeactivateCurrent(siteId: number, data: {
        expireTime: number;
    }): Promise<import("../entities/expire_point.entity").ExpireTimePoint[]>;
    listActiveExpireTimePointsBySiteId(siteId: number): Promise<import("../entities/expire_point.entity").ExpireTimePoint[]>;
    createEvent(body: any): Promise<{
        message: string;
        event: import("typeorm").InsertResult;
    }>;
    findAllEvent(): Promise<{
        events: import("../entities/event.entity").Event[];
    }>;
    findEventsWithPoints(idSite: number): Promise<{
        total: number;
        events: import("../../common/entity/events-points-site.entity").EventsPointsSite[];
    }>;
    updateEventPoints(id_event: number, body: any): Promise<{
        message: string;
        event: import("../../common/entity/events-points-site.entity").EventsPointsSite[];
    } | {
        message: string;
        event: import("typeorm").UpdateResult;
    } | {
        message: string;
        event?: undefined;
    }>;
    removeEvent(id_event: number, idSite: number): Promise<{
        message: string;
        event: import("typeorm").DeleteResult;
    }>;
    updateEventRepeats(body: any, id_event: number): Promise<{
        message: string;
        eventRepeats: import("typeorm").UpdateResult;
    }>;
    updatePorcentualValue(body: any, id_event: number): Promise<{
        message: string;
        porcentualValue: import("typeorm").UpdateResult;
    }>;
    getEventForCluster(id_cluster: number, idSite: number): Promise<import("../entities/event_cluster.entity").EventCluster[]>;
    createEventForCluster(id_cluster: number, body: any): Promise<{
        message: string;
        queryBuilder: Promise<import("typeorm").InsertResult>;
    }>;
    updateEventForCluster(id_cluster: number, body: any): Promise<{
        message: string;
    }>;
    removeEventForCluster(id_cluster: number, id_event: number): Promise<{
        message: string;
        data: any;
    }>;
    createClusterPenalization(body: any): Promise<any>;
    updateClusterPenalization(body: any): Promise<any>;
    findAllClusterPenalization(): Promise<any>;
    findClusterPenalization(idSite: number): Promise<any>;
    getAdvanceCluster(idSite: number, idKeycloak: string): Promise<any>;
}
