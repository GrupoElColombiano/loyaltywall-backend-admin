import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(createProductDto: any): Promise<any>;
    findAll(): Promise<any[]>;
    findAllPagination(query: any, req: any, tokenAccess: string): Promise<any[]>;
    findAllFilter(query: any): Promise<any[]>;
    editProduct(product: any, id: any): Promise<any>;
    selectProduct(id: any): Promise<any>;
}
