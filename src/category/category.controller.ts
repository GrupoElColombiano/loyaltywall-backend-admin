import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
  Req,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import {
  Public,
  Resource,
  Roles,
  Scopes,
  Unprotected,
} from 'nest-keycloak-connect';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger'; // Import Swagger decorators

@Controller('category')
@ApiTags('CATEGORIES') // Swagger tag for the controller
@Unprotected() // Controller is unprotected
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  /**
   * Create a new category.
   *
   * @param body - Category data to create.
   * @returns {Promise<any>} A promise that resolves to the created category.
   */
  @Post('create')
  @ApiOperation({ summary: 'Create a new category' }) // Add ApiOperation summary
  async createCategory(@Body() body: any, @Req() req: any): Promise<any> {
    const client = {
      clientIp: req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress,
      userAgent: req.headers['user-agent'],
      Authorization: req.headers.authorization,
    }
    return await this.categoryService.createCategory(body);
  }

  /**
   * Find all categories.
   *
   * @returns {Promise<any>} A promise that resolves to a list of categories.
   */
  @Get('list')
  @ApiOperation({ summary: 'Find all categories' }) // Add ApiOperation summary
  async findAll(): Promise<any> {
    return await this.categoryService.findAll();
  }

  /**
   * Find all categories with pagination and filtering.
   *
   * @param query - Query parameters for pagination and filtering.
   * @returns {Promise<any[]>} A promise that resolves to paginated and filtered categories.
   */
  @Get('filter-pagination')
  @ApiOperation({
    summary: 'Find all categories with pagination and filtering',
  }) // Add ApiOperation summary
  @ApiQuery({ name: 'skip', type: Number, required: false }) // Swagger query parameter definition
  @ApiQuery({ name: 'limit', type: Number, required: false }) // Swagger query parameter definition
  async findAllPagination(
    @Query(new ValidationPipe({ transform: true })) query: any,
  ): Promise<any[]> {
    // Convertir los valores de "skip" y "limit" a números enteros
    const skip = parseInt(query.skip);
    const limit = parseInt(query.limit);

    return await this.categoryService.findAllWithPaginationAndFilter({
      ...query,
      skip,
      limit,
    });
  }

  /**
   * Update a category by ID.
   *
   * @param categoryId - Category ID.
   * @param updateData - Updated category data.
   * @returns {Promise<any>} A promise that resolves to the updated category.
   */
  @Put('update/:id')
  @ApiOperation({ summary: 'Update a category by ID' }) // Add ApiOperation summary
  @ApiParam({ name: 'id', type: Number }) // Swagger path parameter definition
  async updateCategory(
    @Param('id', ParseIntPipe) categoryId: number,
    @Body() updateData: any,
  ): Promise<any> {
    return await this.categoryService.updateCategory(categoryId, updateData);
  }
}
