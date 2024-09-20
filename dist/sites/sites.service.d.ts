import { Site } from './entities/site.entity';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { I18nService } from 'nestjs-i18n';
import { EntityManager, Repository } from 'typeorm';
import { PlansProductCategory } from 'src/common/entity/plans-products-categories.entity';
import { CategorysAccess } from 'src/common/entity/categorys-access.entity';
import { Category } from 'src/category/entity/category.entity';
import { Product } from 'src/product/entity/product.entity';
export declare class SitesService {
    private siteRepo;
    private readonly i18n;
    private entityManager;
    private readonly plansProductCategory;
    private readonly categorysAccess;
    private readonly categories;
    private readonly product;
    constructor(siteRepo: Repository<Site>, i18n: I18nService, entityManager: EntityManager, plansProductCategory: Repository<PlansProductCategory>, categorysAccess: Repository<CategorysAccess>, categories: Repository<Category>, product: Repository<Product>);
    create(createSiteDto: CreateSiteDto): Promise<Site>;
    findAll(): Promise<Site[]>;
    findOne(id: number): Promise<Site>;
    update(id: number, updateSiteDto: UpdateSiteDto): Promise<Site>;
    remove(id: number): Promise<any>;
    selectSites(id: any): Promise<any>;
    findByFilter(query: any): Promise<Site[]>;
    findAllWithPaginationAndFilter(query: any): Promise<any>;
}
