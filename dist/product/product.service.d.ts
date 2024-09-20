import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { Category } from 'src/category/entity/category.entity';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
import { AccessModulesService } from 'src/access-modules/access-modules.service';
export declare class ProductService {
    private readonly productRepository;
    private readonly categoryRepository;
    private readonly registerlogService;
    private readonly accessModulesService;
    constructor(productRepository: Repository<Product>, categoryRepository: Repository<Category>, registerlogService: RegisterlogService, accessModulesService: AccessModulesService);
    findAllWithPaginationAndFilter(query: any): Promise<any>;
    createProduct(product: any, user: any): Promise<any>;
    findAll(): Promise<any[]>;
    findByFilter(query: any): Promise<any>;
    editProduct(product: any, id: number): Promise<any>;
    selecProduct(id: number): Promise<any>;
}
