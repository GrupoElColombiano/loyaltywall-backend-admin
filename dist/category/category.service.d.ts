import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
import { AccessModulesService } from 'src/access-modules/access-modules.service';
export declare class CategoryService {
    private categoryRepository;
    private readonly registerlogService;
    private readonly accessModulesService;
    constructor(categoryRepository: Repository<Category>, registerlogService: RegisterlogService, accessModulesService: AccessModulesService);
    createCategory(category: Category): Promise<any>;
    findAll(): Promise<any>;
    findAllWithPaginationAndFilter(query: any): Promise<any>;
    updateCategory(idCategory: number, updatedCategory: Category): Promise<any>;
}
