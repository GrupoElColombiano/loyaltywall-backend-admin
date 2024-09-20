import { CreatePaywallDto } from './dto/create-paywall.dto';
import { UpdatePaywallDto } from './dto/update-paywall.dto';
import { Model } from 'mongoose';
import { Event } from 'src/common/entity/event.entity';
import { Site } from 'src/common/entity/site.entity';
import { PointsEvents } from 'src/common/entity/points-events.entity';
import { EntityManager, Repository } from 'typeorm';
import { EventsPointsSite } from 'src/common/entity/events-points-site.entity';
import { PaywallDocument } from './entities/paywall.schema';
import { PlanDocument } from './entities/plan.schema';
export declare class PaywallService {
    private readonly siteRpo;
    private readonly eventsRpo;
    private readonly pointsValueRepo;
    private readonly eventsPointsSite;
    private entityManager;
    private paywallModel;
    private planModel;
    constructor(siteRpo: Repository<Site>, eventsRpo: Repository<Event>, pointsValueRepo: Repository<PointsEvents>, eventsPointsSite: Repository<EventsPointsSite>, entityManager: EntityManager, paywallModel: Model<PaywallDocument>, planModel: Model<PlanDocument>);
    create(createPaywallDto: CreatePaywallDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePaywallDto: UpdatePaywallDto): string;
    remove(id: number): string;
    addMetadataPaywall(obj: any): Promise<any>;
    addMetadataPaywallMongo(obj: any): Promise<any>;
    getMetadataPaywall(uniqueId: string, userType: string, site: string, isAccessibleForFree: boolean, amount: number, category: string, duration: number, unlimited: boolean, allProduct: boolean, identifier: number): Promise<any>;
    addPlanPaywallMongo(obj: any): Promise<any>;
    registerPointsEvent(obj: any): Promise<any>;
}
