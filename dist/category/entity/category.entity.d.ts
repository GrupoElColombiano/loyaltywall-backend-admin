import { Product } from '../../product/entity/product.entity';
import { Site } from '../../sites/entities/site.entity';
import { CategorysAccess } from '../../common/entity/categorys-access.entity';
export declare class Category {
    idCategory: number;
    site: Site;
    product: Product;
    categorysAccess: CategorysAccess[];
    name: string;
    description: string;
    rules: string;
    is_accessible_for_free: boolean;
}
