import { PaywallService } from './paywall.service';
import { CreatePaywallDto } from './dto/create-paywall.dto';
import { UpdatePaywallDto } from './dto/update-paywall.dto';
export declare class PaywallController {
    private readonly paywallService;
    constructor(paywallService: PaywallService);
    create(createPaywallDto: CreatePaywallDto): string;
    findAll(): string;
    update(id: string, updatePaywallDto: UpdatePaywallDto): string;
    remove(id: string): string;
    addMetadataPaywall(metadata: any): Promise<any>;
    getMetadataPaywall(uniqueId: string, userType: string, site: string, isAccessibleForFree: boolean, amount: number, category: string, duration: number, unlimited: boolean, allProduct: boolean, identifier: number): Promise<any>;
    addPlanPaywallMongo(metadata: any): Promise<any>;
    addPointsEvent(metadata: any): Promise<any>;
}
