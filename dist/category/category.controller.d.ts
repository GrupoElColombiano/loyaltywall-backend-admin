import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    createCategory(body: any, req: any): Promise<any>;
    findAll(): Promise<any>;
    findAllPagination(query: any): Promise<any[]>;
    updateCategory(categoryId: number, updateData: any): Promise<any>;
}
