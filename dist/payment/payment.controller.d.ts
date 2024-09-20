import { PaymentService } from './payment.service';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createPaymentGateway(paymentGateway: any, idSite: number): Promise<import("./entity/payment.entity.entity").PaymentGateway>;
    updatePaymentGateway(idSite: number): Promise<import("./entity/payment.entity.entity").PaymentGateway[]>;
    findAllPaymentGateways(idSite: number): Promise<import("./entity/payment.entity.entity").PaymentGateway[]>;
}
