import { PlansProductCategory } from "../../common/entity/plans-products-categories.entity";
import { Category } from "../../category/entity/category.entity";
export declare class CategorysAccess {
    id: number;
    category: Category;
    plansProductCategory: PlansProductCategory;
    amount: number;
    unlimited: boolean;
    frequency: string;
    typeDuration: string;
    duration: number;
}
