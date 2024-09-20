import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { CreateProductDto } from './dto/product.dto';
import { Category } from 'src/category/entity/category.entity';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
import { AccessModulesService } from 'src/access-modules/access-modules.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly registerlogService: RegisterlogService,
    private readonly accessModulesService: AccessModulesService,
  ) {}

  async findAllWithPaginationAndFilter(query: any): Promise<any> {
    const { name, page, limit, idSite } = query;
    try {
      const skip = (page - 1) * limit;
      const queryBuilder = this.productRepository
        .createQueryBuilder('product')
        .skip(skip)
        .take(limit);

      //Filtrar por name con sensibilidad a mayúsculas y minúsculas
      if (name) {
        queryBuilder.andWhere('product.name ILIKE :name', {
          name: `%${name}%`,
        });
      }

      if (idSite) {
        queryBuilder
          .innerJoin('product.site', 'site')
          .andWhere('site.idSite = :idSite', { idSite });
      }

      const [products, totalProducts] = await queryBuilder.getManyAndCount();
      const totalPages = Math.ceil(totalProducts / limit);

      if (page > totalPages) {
        throw new NotFoundException('No se encontraron registros');
      }

      return {
        data: products,
        totalProducts,
      };
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }

  async createProduct(product: any, user: any): Promise<any> {
    const id_module_product = 2;
    const id_rol = '8196eafb-ddc8-4da0-afa1-8034d6dffb17'
    try {
      // const accessModule = await this.accessModulesService.getPaywallModuleAction(id_module_product, id_rol)

      // const createAccessProduct = accessModule.filter((action: any) => action.description === 'Crear' && action.role === id_rol);

      // if(createAccessProduct.length === 0){
      //   throw new NotFoundException('No tienes permisos para crear productos');
      // }
      //Si la propiedad del producto all_product es true, se configura a false la propiedad all_product de los demás productos del sitio
      if(product.all_product === true){
        await this.productRepository
        .createQueryBuilder()
        .update(Product)
        .set({ all_product: false })
        .execute();
      }
      const newProduct = await this.productRepository.save(product);
      const registerlog: any = {
        userId: 876,
        roleId: 6,
        activityType: 'Create',
        description: 'Product created successfully.',
        affectedObject: 'Product',
        success: true,
        ipAddress: 'user.ipAddress',
        userAgent: 'user.userAgent',
        timestamp: new Date(),
      };

      await this.registerlogService.create(registerlog);
      return {
        statusCode: 200,
        message: 'Product list',
        data: newProduct,
      };
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }

  async findAll(): Promise<any[]> {
    try {
      return await this.productRepository.find();
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }

  async findByFilter(query: any): Promise<any> {
    const { idSite, idProduct } = query;
    console.log('query', query);
    try {
      // Crear el queryBuilder sin ninguna condición inicial
      const queryBuilder = this.productRepository.createQueryBuilder('product');
      let queryBuilder2 = this.categoryRepository
        .createQueryBuilder('category')
        .innerJoin('category.site', 'site');
      //    .innerJoin('category.product', 'product_');

      // Agregar la relación con la tabla site y la condición para buscar por idSite
      if (idSite) {
        queryBuilder
          .innerJoin('product.site', 'site')
          .andWhere('site.idSite = :idSite', { idSite })
          .andWhere('product.isActive = :isActive', { isActive: true });

        queryBuilder2
          .andWhere('site.idSite = :idSite', { idSite })
          .andWhere('category.idProduct IS NULL');
      }

      // Agregar la condición para buscar por idProduct
      if (idProduct) {
        queryBuilder
          .andWhere('product.idProduct = :idProduct', { idProduct })
          .andWhere('product.isActive = :isActive', { isActive: true });

        queryBuilder2 = this.categoryRepository
          .createQueryBuilder('category')
          .innerJoin('category.site', 'site')
          .innerJoin('category.product', 'product_')
          .andWhere('site.idSite = :idSite', { idSite })
          .andWhere('product_.idProduct = :idProduct', {
            idProduct,
          });
      }

      if (idSite && idProduct) {
        queryBuilder2
          .andWhere('category.idProduct = :idProduct', { idProduct })
          .andWhere('category.idSite = :idSite', { idSite });
      }

      // Obtener los productos que coinciden con las condiciones de búsqueda
      const products = await queryBuilder.getMany();
      console.log('products', products);
      const category = await queryBuilder2.getMany();
      console.log('category', category);

      return {
        products,
        category,
      };
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }

  async editProduct(product: any, id: number): Promise<any> {
    // const id_module_product = 2;
    // const id_rol = '8196eafb-ddc8-4da0-afa1-8034d6dffb17'
    try {
      // const accessModule = await this.accessModulesService.getPaywallModuleAction(id_module_product, id_rol)

      // const editAccessProduct = accessModule.filter((action: any) => action.description === 'Actualizar' && action.role === id_rol);

      // if(editAccessProduct.length === 0){
      //   throw new NotFoundException('No tienes permisos para editar productos');
      // }

      const productToUpdated = await this.productRepository.findOne({
        where: { idProduct: id },
      });

      if (!productToUpdated) {
        throw new NotFoundException('Product with id ${id} not found');
      }

      if(product.all_product === true){
        await this.productRepository
        .createQueryBuilder()
        .update(Product)
        .set({ all_product: false })
        .execute();
      }

      productToUpdated.name = product.name;
      productToUpdated.description = product.description;
      productToUpdated.all_product = product.all_product;

      if (product.hasOwnProperty('isActive')) {
        productToUpdated.isActive = product.isActive;
      }

      const updatedProduct = await this.productRepository.save(
        productToUpdated,
      );

      const registerlog: any = {
        userId: 123,
        roleId: 456,
        activityType: 'Update',
        description: 'Product details updated successfully.',
        affectedObject: 'Product',
        success: true,
        ipAddress: '192.168.1.1',
        userAgent: 'Mozilla/5.0',
        timestamp: '2023-09-13T12:34:56.789Z',
      };

      await this.registerlogService.create(registerlog);
      return {
        statusCode: 200,
        message: 'Product updated',
        product: updatedProduct,
      };
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }

  async selecProduct(id: number): Promise<any> {
    try {
      const product = await this.productRepository.findOne({
        where: { idProduct: id },
      });

      if (!product) {
        throw new NotFoundException('Product with id ${id} not found');
      }

      return {
        statusCode: 200,
        message: 'Product selected',
        product,
      };
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }
}
