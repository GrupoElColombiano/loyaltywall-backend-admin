import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  ValidationPipe,
  Put,
  Param,
  Req,
  Headers,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Product } from './entity/product.entity';
import { CreateProductDto } from './dto/product.dto';
import {
  Public,
  Resource,
  Roles,
  Scopes,
  Unprotected,
} from 'nest-keycloak-connect';

@Controller('product')
@ApiTags('PRODUCTS')
@Unprotected()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({
    status: 201,
    description: 'The product has been successfully created',
    type: Product,
  })
  async createProduct(@Body() createProductDto: any): Promise<any> {
    console.log('createProductDto', createProductDto);
    let user;
    return await this.productService.createProduct(createProductDto, user);
  }

  @Public(true)
  @Get('list')
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({
    status: 200,
    description: 'Returns an array of products',
    type: [Product],
  })
  async findAll(): Promise<any[]> {
    return await this.productService.findAll();
  }

  @Get('filter-pagination')
  @ApiOperation({ summary: 'Get products with pagination and filter' })
  async findAllPagination(
    @Query(new ValidationPipe({ transform: true })) query: any,
    @Req() req: any,
    @Headers('Authorization') tokenAccess: string,
  ): Promise<any[]> {
    console.log('req', req.ip);
    console.log('req', req.headers['user-agent']);
    console.log('tokenAccess', tokenAccess);
    // const idUser = jwt_decode(tokenAccess);
    return await this.productService.findAllWithPaginationAndFilter(query);
  }

  @Get('filter-product')
  @ApiOperation({
    summary: 'Get products with filter for name, category and site',
  })
  async findAllFilter(@Query() query: any): Promise<any[]> {
    return await this.productService.findByFilter(query);
  }

  @Put('edit/:id')
  @ApiOperation({ summary: 'Edit a product' })
  @ApiResponse({})
  async editProduct(@Body() product: any, @Param() id: any): Promise<any> {
    return await this.productService.editProduct(product, id.id);
  }

  @Get('select/:id')
  @ApiOperation({ summary: 'Get a product by id' })
  @ApiResponse({})
  async selectProduct(@Param('id') id: any): Promise<any> {
    return await this.productService.selecProduct(id);
  }
}
