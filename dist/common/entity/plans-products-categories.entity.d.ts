import { Plan } from '../../plans/entity/plan.entity';
import { Site } from '../../sites/entities/site.entity';
import { Product } from '../../product/entity/product.entity';
import { CategorysAccess } from '../../common/entity/categorys-access.entity';
export declare class PlansProductCategory {
    idPlansProductCategory: number;
    categorysAccess: CategorysAccess[];
    sites: Site;
    plan: Plan;
    product: Product;
}
