import { Plan } from './plan.entity';
export declare class PlanVersion {
    idPlanVersion: number;
    name: string;
    idVersionPlan: string;
    createdAt: Date;
    plan: Plan;
}
