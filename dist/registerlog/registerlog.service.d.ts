import { Repository } from 'typeorm';
import { RegisterLog } from './entity/register-log.entity';
import { PaymentTransaction } from './entity/payment-log.entity';
export declare class RegisterlogService {
    private readonly registerLogRepository;
    private readonly paymentTransactionRepository;
    constructor(registerLogRepository: Repository<RegisterLog>, paymentTransactionRepository: Repository<PaymentTransaction>);
    create(registerLog: RegisterLog): Promise<RegisterLog>;
    createPaymentTransaction(paymentTransaction: PaymentTransaction): Promise<PaymentTransaction>;
    findAll(registerLogDto: any): Promise<any>;
    findAllPaymentTransaction(query: any, idSite: any): Promise<any>;
    findOne(id: any): Promise<RegisterLog>;
}
