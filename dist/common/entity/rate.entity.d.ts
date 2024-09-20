import { Plan } from '../../plans/entity/plan.entity';
export declare class Rate {
    id: number;
    time: string;
    rate: number;
    rate_special?: number;
    rate_special_renewal?: number;
    rate_renewal: number;
    duration: number;
    is_special: boolean;
    date_start?: Date;
    date_end?: Date;
    plan: Plan;
}
