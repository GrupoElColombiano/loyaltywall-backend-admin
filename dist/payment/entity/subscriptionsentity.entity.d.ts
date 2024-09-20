import { PaymentGateway } from './payment.entity.entity';
export declare class Subscription {
    id_subscription: number;
    id_plan: number;
    id_rate: number;
    transacction: string;
    sysdate: Date;
    id_version: number;
    id_user: string;
    cancellation_status: number;
    transaction_type: string;
    amount: number;
    paymentGateway: PaymentGateway;
    payment_gateway_id: number;
}
