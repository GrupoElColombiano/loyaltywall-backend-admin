import { RegisterlogService } from './registerlog.service';
export declare class RegisterlogController {
    private readonly registerlogService;
    constructor(registerlogService: RegisterlogService);
    createRegisterlog(registerlogDto: any): Promise<import("./entity/register-log.entity").RegisterLog>;
    createPaymentTransactions(paymentTransactionDto: any): Promise<import("./entity/payment-log.entity").PaymentTransaction>;
    createPaymentTransaction(paymentTransactionDto: any): Promise<import("./entity/payment-log.entity").PaymentTransaction>;
    findAll(registerlogDto: any): Promise<any>;
    findAllPaymentTransaction(idSite: any, query: any): Promise<any>;
}
