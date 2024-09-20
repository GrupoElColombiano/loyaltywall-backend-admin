import { Plan } from "../../plans/entity/plan.entity";
export declare class UserPlan {
    id: number;
    idUser: string;
    isActive: boolean;
    dateExpiredPlan: Date;
    dateInitPlan: Date;
    idVersion: string;
    plan: Plan;
}
