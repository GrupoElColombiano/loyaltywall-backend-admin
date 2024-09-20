import { SitesPlan } from '../../common/entity/sites-plan.entity';
import { Site } from '../../sites/entities/site.entity';
import { Rate } from '../../common/entity/rate.entity';
import { PlansProductCategory } from '../../common/entity/plans-products-categories.entity';
import { Product } from '../../product/entity/product.entity';
import { PlanVersion } from './plan-versions.entity';
import { UserPlan } from '../../common/entity/user-plan.entity';
import { PlanTemplate } from '../../plans/entity/plan-template.entity';
export declare class Plan {
    idPlan?: number;
    idVersionPlan: number;
    description: string;
    name: string;
    userType: string;
    isActive: boolean;
    idSite: string;
    createdAt: Date;
    updatedAt: Date;
    plansProductsCategory: PlansProductCategory[];
    sitesPlan: SitesPlan[];
    site: Site;
    rates: Rate[];
    products: Product;
    planVersions: PlanVersion[];
    userPlans: UserPlan[];
    planTemplates: PlanTemplate[];
}
