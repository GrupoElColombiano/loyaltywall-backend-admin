import { Event } from 'src/gamification/entities/event.entity';
export declare class EventsPointsSite {
    id: number;
    event: Event;
    eventIdEvent: number;
    siteIdSite: number;
    points: number;
    registration_date: Date;
    expiration_date: Date;
}
