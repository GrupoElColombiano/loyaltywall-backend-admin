import { Site } from '../../sites/entities/site.entity';
import { Category } from '../../category/entity/category.entity';
import { PlansProductCategory } from '../../common/entity/plans-products-categories.entity';
import { Plan } from '../../plans/entity/plan.entity';
export declare class Product {
    idProduct: number;
    name: string;
    description?: string;
    isActive: boolean;
    all_product: boolean;
    createdAt: Date;
    updatedAt: Date;
    site: Site;
    category: Category[];
    plansProductCategory: PlansProductCategory[];
    plan: Plan;
}
