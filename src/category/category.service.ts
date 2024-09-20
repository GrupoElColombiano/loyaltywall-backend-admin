import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
import { AccessModulesService } from 'src/access-modules/access-modules.service';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    private readonly registerlogService: RegisterlogService,
    private readonly accessModulesService: AccessModulesService,
  ) { }

  /**
   * Create a new category.
   *
   * @param category - Category data to create.
   * @returns {Promise<any>} A promise that resolves to the created category.
   */
  async createCategory(category: Category): Promise<any> {
    // const id_module_category = 1;
    // const id_rol = '8196eafb-ddc8-4da0-afa1-8034d6dffb17'
    try {
      // const accessModule = await this.accessModulesService.getPaywallModuleAction(id_module_category, id_rol);

      // const createAccessProduct = accessModule.filter((action: any) => action.description === 'Crear' && action.role === id_rol);

      // if (createAccessProduct.length === 0) {
      //   throw new NotFoundException('No tiene permisos para crear categorías');
      // }

      console.log('category', category);
      const newCategory = await this.categoryRepository.save(category);

      const registerlog: any = {
        "userId": 123,
        "roleId": 456,
        "activityType": "Create",
        "description": "Category created successfully.",
        "affectedObject": "Category",
        "success": true,
        "ipAddress": "192.168.1.1",
        "userAgent": "Mozilla/5.0",
        "timestamp": "2023-09-13T12:34:56.789Z"
      }

      await this.registerlogService.create(registerlog);
      return {
        statusCode: 200,
        message: 'Category list',
        data: newCategory,
      };
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Find all categories.
   *
   * @returns {Promise<any>} A promise that resolves to a list of categories with associated products.
   */
  async findAll(): Promise<any> {
    try {
      const categoriesWithProduct = await this.categoryRepository.find({
        relations: ['product'],
      });
      return {
        statusCode: 200,
        message: 'Category list',
        data: categoriesWithProduct,
      };
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Find all categories with pagination and filtering.
   *
   * @param query - Query parameters for pagination and filtering.
   * @returns {Promise<any>} A promise that resolves to paginated and filtered categories.
   */
  async findAllWithPaginationAndFilter(query: any): Promise<any> {
    console.log('query', query);
    const { name, page, limit, idProduct, idSite } = query;
    try {
      const skip = (page - 1) * limit;
      const queryBuilder = this.categoryRepository
        .createQueryBuilder('category')
        .leftJoinAndSelect('category.product', 'product')
        .leftJoinAndSelect('category.site', 'site')
        .skip(skip)
        .take(limit)
        .select([
          'category.idCategory',
          'category.name',
          'category.description',
          'category.rules',
        ])
        .where('site.idSite = :idSite', { idSite })
        .addSelect(['product.idProduct', 'product.name', 'site.idSite', 'site.name']);

        if (name) {
        queryBuilder.andWhere('LOWER(category.name) LIKE LOWER(:name)', {
          name: `%${name}%`,
        });
      }

      if (idProduct) {
        queryBuilder.andWhere('category.product = :idProduct', { idProduct })
      }

      const [categories, totalCategory] = await queryBuilder.getManyAndCount();
      const totalPages = Math.ceil(totalCategory / limit);
      console.log('queryBuilder', queryBuilder);

      if (page > totalPages) {
        throw new NotFoundException('No records found');
      }

      // Map the categories array to a flattened structure
      const modifiedCategories = categories.map((category) => {
        console.log('category', category);
        return {
          idCategory: category.idCategory,
          name: category.name,
          description: category.description,
          rules: category.rules,
          idProduct: category.product ? category.product.idProduct : null,
          productName: category.product ? category.product.name : null,
          idSite: category.site ? category.site.idSite : null,
          siteName: category.site ? category.site.name : null,
        };
      });

      return {
        data: modifiedCategories,
        totalCategory,
      };
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Update a category by ID.
   *
   * @param idCategory - Category ID.
   * @param updatedCategory - Updated category data.
   * @returns {Promise<any>} A promise that resolves to the updated category.
   */
  async updateCategory(
    idCategory: number,
    updatedCategory: Category,
  ): Promise<any> {
    // const id_module_category = 1;
    // const id_rol = '8196eafb-ddc8-4da0-afa1-8034d6dffb17'
    try {
      // const accessModule = await this.accessModulesService.getPaywallModuleAction(id_module_category, id_rol);

      // const updateAccessProduct = accessModule.filter((action: any) => action.description === 'Actualizar' && action.role === id_rol);

      // if (updateAccessProduct.length === 0) {
      //   throw new NotFoundException('No tiene permisos para editar categorías');
      // }

      const categoryToUpdate = await this.categoryRepository.findOne({
        where: { idCategory },
      });

      if (!categoryToUpdate) {
        throw new NotFoundException('Category not found');
      }

      // Update category fields with provided values
      categoryToUpdate.name = updatedCategory.name;
      categoryToUpdate.description = updatedCategory.description;
      categoryToUpdate.rules = updatedCategory.rules;
      categoryToUpdate.product = updatedCategory.product; // Update the relationship with the product

      const savedCategory = await this.categoryRepository.save(
        categoryToUpdate,
      );

      const registerlog: any = {
        "userId": 123,
        "roleId": 456,
        "activityType": "Update",
        "description": "Category details updated successfully.",
        "affectedObject": "Category",
        "success": true,
        "ipAddress": "192.168.1.1",
        "userAgent": "Mozilla/5.0",
        "timestamp": "2023-09-13T12:34:56.789Z"
      }

      await this.registerlogService.create(registerlog);
      return {
        statusCode: 200,
        message: 'Category updated',
        data: savedCategory,
      };
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }
}
