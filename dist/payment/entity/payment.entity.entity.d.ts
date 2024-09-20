import { Subscription } from '../../payment/entity/subscriptionsentity.entity';
export declare class PaymentGateway {
    id: number;
    name: string;
    clientId: string;
    apiKey: string;
    image: string | null;
    idSite: number;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    testMode: boolean;
    subscriptions: Subscription[];
}
