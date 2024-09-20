import {
  Controller,
  Get,
  Query,
  ParseIntPipe,
  Post,
  Body,
  Param,
  Put,
  ValidationPipe,
  Delete
} from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlanDto } from './dto/create/plan.dto';
import { UpdatePlanDto } from './dto/update/plan-update.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import {
  Public,
  Resource,
  Roles,
  Scopes,
  Unprotected,
} from 'nest-keycloak-connect';
import { ApiTags, ApiOperation } from '@nestjs/swagger'; // Import ApiOperation

@Controller('plans')
@ApiTags('PLANS') // Swagger tag for the controller
@Unprotected() // Controller is unprotected
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  /**
   * Create a new plan.
   * @param planDto - Plan data to create.
   * @returns {Promise<any>} A promise that resolves to the created plan.
   */
  @Post('create')
  @ApiOperation({ summary: 'Create a new plan' }) // Add ApiOperation summary
  async createPlan(@Body() planDto: any) {
    const planWithDefaultVersion = { ...planDto, idVersionPlan: 1 };
    return this.plansService.create(planWithDefaultVersion);
  }

  @Post('create-plan')
  @ApiOperation({ summary: 'Create a new plan' }) // Add ApiOperation summary
  async createPlanWithVersion(@Body() planDto: any) {
    const planWithDefaultVersion = { ...planDto, idVersionPlan: 1 };
    return this.plansService.createPlanAnonimo(planWithDefaultVersion);
  }

  /**
   * Create a new plan with a new version.
   * @param planDto - Plan data to create.
   * @returns {Promise<any>} A promise that resolves to the created plan.
   */
  @Post('create-new-version')
  @ApiOperation({ summary: 'Create a new plan with a new version' }) // Add ApiOperation summary
  async createPlanWithNewVersion(@Body() planDto: any) {
    const planWithNewVersion = {
      ...planDto,
      idVersionPlan: planDto.idVersionPlan + 1,
    };
    return this.plansService.createVersionPlan(planWithNewVersion);
  }

  /**
   * Find all plans.
   * @returns {Promise<any>} A promise that resolves to a list of plans.
   */
  @Get('list')
  @ApiOperation({ summary: 'Find all plans' }) // Add ApiOperation summary
  findAllPlans(): Promise<any> {
    return this.plansService.findAllPlans();
  }

  /**
   * Find all plans with pagination and filtering.
   * @param query - Query parameters for pagination and filtering.
   * @returns {Promise<any>} A promise that resolves to paginated and filtered plans.
   */
  @Get('filter-version')
  @ApiOperation({ summary: 'Find all plans with pagination and filtering' }) // Add ApiOperation summary
  async findAllPaginationVersion(@Query() query: any): Promise<any> {
    return await this.plansService.findByFilterVersionPlan(query);
  }

  /**
   * Find all plans with pagination and filtering.
   * @param query - Query parameters for pagination and filtering.
   * @returns {Promise<any>} A promise that resolves to paginated and filtered plans.
   */
  @Get('filter-pagination')
  @ApiOperation({ summary: 'Find all plans with pagination and filtering' }) // Add ApiOperation summary
  async findAllPagination(@Query( new ValidationPipe({ transform: true}) ) query: any): Promise<any> {
    return await this.plansService.findByFilterAndPagination(query);
  }

  //Obtener configuración de planes con sus categorías y productos
  /**
   * Find all plans with their categories and products.
   * @returns {Promise<any>} A promise that resolves to a list of plans.
   */
  @Get('config-site')
  @ApiOperation({ summary: 'Find all plans with their categories and products' }) // Add ApiOperation summary
  async findAllPlansWithCategoriesAndProducts(): Promise<any> {
    return await this.plansService.findAllPlansWithCategoriesAndProducts();
  }

  /**
   * Find all plans with pagination.
   * @param page - Page number.
   * @param limit - Limit of plans per page.
   * @returns {Promise<any>} A promise that resolves to paginated plans.
   */
  @Get('pagination')
  @ApiOperation({ summary: 'Find all plans with pagination' }) // Add ApiOperation summary
  findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    return this.plansService.findAll(page, limit);
  }

  /**
   * Find plans by filtering criteria.
   * @param query - Query parameters for filtering.
   * @returns {Promise<any>} A promise that resolves to filtered plans.
   */
  @Get('filter')
  @ApiOperation({ summary: 'Find plans by filtering criteria' }) // Add ApiOperation summary
  findByFilter(@Query(new ValidationPipe({ transform: true })) query: any) {
    return this.plansService.findByFilter(query);
  }

  /**
   * Find a plan by ID.
   * @param id - Plan ID.
   * @returns {Promise<any>} A promise that resolves to the found plan.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Find a plan by ID' }) // Add ApiOperation summary
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.plansService.findOne('','',id);
   // return this.plansService.getModuleActionsWithRelations('3', '112');//.findOne(+id);
  }

  @Get('planuser/:planName/:userId')
  @ApiOperation({ summary: 'Find a plan by plan name and user ID' })
  getPlanUser(
    @Param('planName') planName: string,
    @Param('userId') userId: string,
  ) {
    return this.plansService.getPlanUser(planName, userId);
  }



    /**
   * Update a plan by ID.
   * @param id - Plan ID.
   * @param updatedPlanDto - Updated plan data.
   * @returns {Promise<any>} A promise that resolves to the updated plan.
   */
    @Post('product/categories')
    @ApiOperation({ summary: 'Registrar un producto con sus respectivas categorias dentro de un plan' }) // Add ApiOperation summary
    async setProductCategoriesPlan(
      @Body() params: any,
    ) {
      // return this.plansService.updatePlan(id, updatedPlanDto);
      return this.plansService.setProductCategoriesPlan(params);
    }

    /**
   * Update a plan by ID.
   * @param id - Plan ID.
   * @param updatedPlanDto - Updated plan data.
   * @returns {Promise<any>} A promise that resolves to the updated plan.
   */
    @Get('products/categories/:planId')
    @ApiOperation({ summary: 'Listar los productos con sus respectivas categorias dentro de un plan' }) // Add ApiOperation summary
    async getProductsCategoriesPlan(
      @Param('planId') planId: number,

    ) {
      // return this.plansService.updatePlan(id, updatedPlanDto);
      return this.plansService.getProductsCategoriesPlan(planId);
    }

  /**
   * Update a plan by ID.
   * @param id - Plan ID.
   * @param updatedPlanDto - Updated plan data.
   * @returns {Promise<any>} A promise that resolves to the updated plan.
   */
  @Put(':id/update')
  @ApiOperation({ summary: 'Update a plan by ID' }) // Add ApiOperation summary
  async updatePlan(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedPlanDto: any,
  ) {
    // return this.plansService.updatePlan(id, updatedPlanDto);
    return this.plansService.updatePlanFinal(id, updatedPlanDto);
  }

  /**
   * Update the status of a plan by ID.
   * @param id - Plan ID.
   * @param isActive - New status of the plan.
   * @returns {Promise<any>} A promise that resolves to the updated plan.
   */
  @Put(':id')
  @ApiOperation({ summary: 'Update the status of a plan by ID' }) // Add ApiOperation summary
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('isActive') isActive: boolean,
  ) {
    return this.plansService.updateIsActive(id, isActive);
  }


  //Controlador para obtener todos los rates
  /**
   * Find all rates.
   * @returns {Promise<any>} A promise that resolves to a list of rates.
   */
  @Get('rates/list')
  @ApiOperation({ summary: 'Find all rates' }) // Add ApiOperation summary
  async findAllRates(): Promise<any> {
    return await this.plansService.findAllRates();
  }

  @Get('versions_plan/list/:idPlan')
  @ApiOperation({ summary: 'Find all versions of a plan' }) // Add ApiOperation summary
  async findAllVersionsPlan(@Param('idPlan', ParseIntPipe) idPlan: number): Promise<any> {
    return await this.plansService.getVersionsPlan(idPlan);
  }


  /**
   * Find a plan by ID.
   * @param id - Plan ID.
   * @returns {Promise<any>} A promise that resolves to the found plan.
   */
  @Get('paywall/plans/:id/:site/:userId')
  @ApiOperation({ summary: 'Find a plan by usertype' }) // Add ApiOperation summary
  getPaywallPlan(
    @Param('site') site: string,
    @Param('id') id: string,
    @Param('userId') userId: string
  ) {
    return this.plansService.findOne(site, userId, id);
  }

  /**
   * Create relation Plan Template.
   * @body body - Plan Template data to create.
   * @returns {Promise<any>} A promise that resolves to the found plan.
   */
  @Post('plan-template/create')
  @ApiOperation({ summary: 'Create relation Plan Template' }) // Add ApiOperation summary
  async createPlanTemplate(@Body() body: any) {
    return this.plansService.createPlanTemplate(body);
  }

  //Controlador para obtener todos los planes, recibiendo sólo el id_template por parametro
  /**
   * Find all plans.
   * @returns {Promise<any>} A promise that resolves to a list of plans.
   */
  @Get('plan-template/list/:id_template')
  @ApiOperation({ summary: 'Find all plans' }) // Add ApiOperation summary
  async findAllPlansTemplate(@Param('id_template') id_template: string): Promise<any> {
    return await this.plansService.getPlanTemplate(id_template);
  }


    // Endpoint para eliminar una categoría de un producto en un plan
    @Delete('product/categorie/:planId/:idPlansProductCategory')
    @ApiOperation({ summary: 'Eliminar una categoría de un producto en un plan' })
    async deleteCategory(
      @Param('planId', ParseIntPipe) planId: number,
      @Param('idPlansProductCategory', ParseIntPipe) idPlansProductCategory: number,
     // @Param('idProduct', ParseIntPipe) idProduct: number,
     // @Param('idCategorie', ParseIntPipe) idCategorie: number,
    ) {
        return await this.plansService.deleteCategory(planId, idPlansProductCategory);
    }


    @Delete('product/categorie/all/:idPlan/:idProduct')
    @ApiOperation({ summary: 'Eliminar una categoría de un producto en un plan' })
    async deleteCategoryProduct(
      @Param('idPlan', ParseIntPipe) idPlan: number,
      @Param('idProduct', ParseIntPipe) idProduct: number
    ) {
      return await this.plansService.deleteCategoryProduct(idPlan, idProduct);
    }


    /**
   * Update the status of a plan by ID.
   * @param idPlansProductCategory - Plan ID.
   * @param body - New status of the plan.
   * @returns {Promise<any>} A promise that resolves to the updated plan.
   */
    @Put('product/categorie/:idPlansProductCategory')
    @ApiOperation({ summary: 'Actualizar la categoria' }) // Add ApiOperation summary
    async updateCategoryAccess(
      @Param('idPlansProductCategory', ParseIntPipe) idPlansProductCategory: number,
      @Body() body: any,
    ) {
      return await this.plansService.updateCategoryAccess(idPlansProductCategory, body);
    }

    @Put('product/categorie/update-state/:idPlan')
    async updatePlanState(
      @Param('idPlan') idPlan: number,
      @Body() body: any,
    ): Promise<void> {
      await this.plansService.updatePlanState(idPlan, body);
    }

    /**
     * Find a plan by ID.
     * @param id - Plan ID.
     * @returns {Promise<any>} A promise that resolves to the found plan.
     */
    @Post('paywall/plan/versioning')
    @ApiOperation({ summary: 'Find a plan by id' }) // Add ApiOperation summary
    setPlanVersioning(
      @Body() body: any,
    ) {
      return this.plansService.setPlanVersioning(body);
    }


    @Get('paywall/plan/versioning/:idPlan')
    @ApiOperation({ summary: 'Find a plan by id' }) // Add ApiOperation summary
    getPlanVersioning(
      @Param('idPlan') idPlan: number,
    ) {
      return this.plansService.getPlanVersioning(idPlan);
    }


    setPlanSubscription
    @Get('subscription/:idPlan/:idUser')
    @ApiOperation({ summary: 'Find a plan by id' }) // Add ApiOperation summary
    getPlanSubscription(
      @Param('idPlan') idPlan: number,
      @Param('idUser') idUser: number
    ) {
      return this.plansService.getPlanSubscription(idPlan, idUser);
    }

}
