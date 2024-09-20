//TypeORM
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Site } from './entities/site.entity';

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { I18nContext, I18nService } from 'nestjs-i18n';
import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { PlansProductCategory } from 'src/common/entity/plans-products-categories.entity';
import { CategorysAccess } from 'src/common/entity/categorys-access.entity';
import { Category } from 'src/category/entity/category.entity';
import { Product } from 'src/product/entity/product.entity';
// npm run migrations:generate ./src/database/migrations/set_number_phone
@Injectable()
export class SitesService {
  constructor(
    @InjectRepository(Site) private siteRepo: Repository<Site>,
    private readonly i18n: I18nService,
    private entityManager: EntityManager,

    @InjectRepository(PlansProductCategory)
    private readonly plansProductCategory: Repository<PlansProductCategory>,

    @InjectRepository(CategorysAccess)
    private readonly categorysAccess: Repository<CategorysAccess>,

    @InjectRepository(Category)
    private readonly categories: Repository<Category>,

    @InjectRepository(Product)
    private readonly product: Repository<Product>,

  ) {}

  /**
   * Creates a new Site with id and timestamps for createdAt and updatedAt.
   *
   * @param {CreateSiteDto} createSiteDto - The DTO object for creating a site.
   * @returns {Promise<Site>} The created site.
   *
   * @example
   * const newSite = await this.sitesService.create(createSiteDto);
   */
  create(createSiteDto: CreateSiteDto): Promise<Site> {
    console.log('createSiteDto', createSiteDto);
    try {
      const newSite = this.siteRepo.create(createSiteDto);
      return this.siteRepo.save(newSite);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Retrieves all sites.
   *
   * @returns {Promise<Site[]>} All the sites.
   */
  findAll(): Promise<Site[]> {
    return this.siteRepo.find();
    // return this.i18n.t('validation.IS_STRING', {
    //   lang: I18nContext.current().lang,
    // });
  }

  /**
   * Finds a site by ID.
   *
   * @param {number} id - The ID of the site to find.
   * @returns {Promise<Site>} The found site.
   * @throws {NotFoundException} If the site with the given ID is not found.
   */
  async findOne(id: number): Promise<Site> {
    const site = await this.siteRepo.findOne({ where: { idSite: id } });
    if (!site) {
      throw new NotFoundException(`Site #${id} not found`);
    }
    return site;
  }


  /**
   * Updates a site by ID.
   *
   * @param {number} id - The ID of the site to update.
   * @param {UpdateSiteDto} updateSiteDto - The DTO object containing updated site data.
   * @returns {Promise<Site>} The updated site.
   * @throws {NotFoundException} If the site with the given ID is not found.
   */
  async update(id: number, updateSiteDto: UpdateSiteDto): Promise<Site> {
    const site = await this.siteRepo.findOne({ where: { idSite: id } });
    if (!site) {
      throw new NotFoundException(`Site #${id} not found`);
    }
    this.siteRepo.merge(site, updateSiteDto);
    return this.siteRepo.save(site);
  }

  /**
   * Removes a site by ID.
   *
   * @param {number} id - The ID of the site to remove.
   * @returns {Promise<void>}
   */
  remove(id: number): Promise<any> {
    return this.siteRepo.delete(id);
  }

  async selectSites(id: any): Promise<any> {
    try {
      console.log('id', id);
      const site = await this.siteRepo.findOne({ where: { idSite: id } });

      if (!site) {
        throw new NotFoundException(`Site #${id} not found`);
      }

      return site;
    } catch (error: any) {
      console.log('error', error);
      throw new NotFoundException(error.message);
    }
  }

  async findByFilter(query: any): Promise<Site[]> {
    const { name } = query;

    try {
      const queryBuilder = this.siteRepo
        .createQueryBuilder('site')
        .where('LOWER(site.name) LIKE :name', {
          name: `%${name.toLowerCase()}%`,
        });

      const sites = await queryBuilder.getMany();
      console.log('sites', sites);
      return sites;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllWithPaginationAndFilter(query: any): Promise<any> {
    const { name, isActive, page, limit } = query;

    try {
      const queryBuilder = this.siteRepo.createQueryBuilder('site');

      if (name) {
        queryBuilder.andWhere('LOWER(site.name) LIKE :name', { name: `%${name.toLowerCase()}%` });
      }

        queryBuilder.andWhere('site.isActive = :isActive', { isActive: true });

      // Solo aplicar la paginación si ambos, 'page' y 'limit', están presentes.
      if (page !== undefined && limit !== undefined) {
        const skip = (page - 1) * limit;
        queryBuilder.skip(skip).take(limit);
      }

      const [sites, totalSites] = await queryBuilder.getManyAndCount();

      // Calcular el total de páginas solo si se aplicó la paginación.
      let totalPages = undefined;
      if (page !== undefined && limit !== undefined) {
        totalPages = Math.ceil(totalSites / limit);
        if (page > totalPages) {
          throw new NotFoundException('Number of page is not valid');
        }
      }

      return {
        totalSites,
        totalPages, // Esta será 'undefined' si no se aplicó la paginación.
        data: sites
      };
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
}
}
