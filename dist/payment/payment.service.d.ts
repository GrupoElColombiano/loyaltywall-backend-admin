import { Repository } from 'typeorm';
import { PaymentGateway } from './entity/payment.entity.entity';
export declare class PaymentService {
    private readonly paymentGatewayRepository;
    constructor(paymentGatewayRepository: Repository<PaymentGateway>);
    createPaymentGateway(paymentGateway: any, idSite: any): Promise<PaymentGateway>;
    updatePaymentGateway(idSite: number): Promise<PaymentGateway[]>;
    findAllPaymentGateways(idSite: number): Promise<PaymentGateway[]>;
}
