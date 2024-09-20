import { Event } from './event.entity';
export declare class PointsEvents {
    id: number;
    userId: string;
    event: Event;
    eventIdEvent: number;
    siteIdSite: number;
    points: number;
    registration_date: Date;
    expiration_date: Date;
}
