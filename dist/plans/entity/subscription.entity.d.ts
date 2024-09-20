import { Plan } from '../../plans/entity/plan.entity';
import { Rate } from '../../common/entity/rate.entity';
export declare class Subscription {
    idSubscription?: number;
    id_user: string;
    plan: Plan;
    id_version: number;
    rate: Rate;
    transacction: string;
    sysdate: Date;
    cancellationStatus: number;
}
