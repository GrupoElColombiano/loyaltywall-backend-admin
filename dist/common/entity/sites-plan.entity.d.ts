import { Plan } from '../../plans/entity/plan.entity';
import { Site } from '../../sites/entities/site.entity';
export declare class SitesPlan {
    id: number;
    idSite: number;
    idPlan: number;
    site: Site[];
    plan: Plan[];
}
