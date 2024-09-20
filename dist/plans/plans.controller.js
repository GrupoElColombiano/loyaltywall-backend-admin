"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const plans_service_1 = require("./plans.service");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const swagger_1 = require("@nestjs/swagger");
let PlansController = exports.PlansController = class PlansController {
    constructor(plansService) {
        this.plansService = plansService;
    }
    async createPlan(planDto) {
        const planWithDefaultVersion = { ...planDto, idVersionPlan: 1 };
        return this.plansService.create(planWithDefaultVersion);
    }
    async createPlanWithVersion(planDto) {
        const planWithDefaultVersion = { ...planDto, idVersionPlan: 1 };
        return this.plansService.createPlanAnonimo(planWithDefaultVersion);
    }
    async createPlanWithNewVersion(planDto) {
        const planWithNewVersion = {
            ...planDto,
            idVersionPlan: planDto.idVersionPlan + 1,
        };
        return this.plansService.createVersionPlan(planWithNewVersion);
    }
    findAllPlans() {
        return this.plansService.findAllPlans();
    }
    async findAllPaginationVersion(query) {
        return await this.plansService.findByFilterVersionPlan(query);
    }
    async findAllPagination(query) {
        return await this.plansService.findByFilterAndPagination(query);
    }
    async findAllPlansWithCategoriesAndProducts() {
        return await this.plansService.findAllPlansWithCategoriesAndProducts();
    }
    findAll(page = 1, limit = 10) {
        return this.plansService.findAll(page, limit);
    }
    findByFilter(query) {
        return this.plansService.findByFilter(query);
    }
    findOne(id) {
        return this.plansService.findOne('', '', id);
    }
    getPlanUser(planName, userId) {
        return this.plansService.getPlanUser(planName, userId);
    }
    async setProductCategoriesPlan(params) {
        return this.plansService.setProductCategoriesPlan(params);
    }
    async getProductsCategoriesPlan(planId) {
        return this.plansService.getProductsCategoriesPlan(planId);
    }
    async updatePlan(id, updatedPlanDto) {
        return this.plansService.updatePlanFinal(id, updatedPlanDto);
    }
    update(id, isActive) {
        return this.plansService.updateIsActive(id, isActive);
    }
    async findAllRates() {
        return await this.plansService.findAllRates();
    }
    async findAllVersionsPlan(idPlan) {
        return await this.plansService.getVersionsPlan(idPlan);
    }
    getPaywallPlan(site, id, userId) {
        return this.plansService.findOne(site, userId, id);
    }
    async createPlanTemplate(body) {
        return this.plansService.createPlanTemplate(body);
    }
    async findAllPlansTemplate(id_template) {
        return await this.plansService.getPlanTemplate(id_template);
    }
    async deleteCategory(planId, idPlansProductCategory) {
        return await this.plansService.deleteCategory(planId, idPlansProductCategory);
    }
    async deleteCategoryProduct(idPlan, idProduct) {
        return await this.plansService.deleteCategoryProduct(idPlan, idProduct);
    }
    async updateCategoryAccess(idPlansProductCategory, body) {
        return await this.plansService.updateCategoryAccess(idPlansProductCategory, body);
    }
    async updatePlanState(idPlan, body) {
        await this.plansService.updatePlanState(idPlan, body);
    }
    setPlanVersioning(body) {
        return this.plansService.setPlanVersioning(body);
    }
    getPlanVersioning(idPlan) {
        return this.plansService.getPlanVersioning(idPlan);
    }
    getPlanSubscription(idPlan, idUser) {
        return this.plansService.getPlanSubscription(idPlan, idUser);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new plan' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "createPlan", null);
__decorate([
    (0, common_1.Post)('create-plan'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new plan' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "createPlanWithVersion", null);
__decorate([
    (0, common_1.Post)('create-new-version'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new plan with a new version' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "createPlanWithNewVersion", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiOperation)({ summary: 'Find all plans' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "findAllPlans", null);
__decorate([
    (0, common_1.Get)('filter-version'),
    (0, swagger_1.ApiOperation)({ summary: 'Find all plans with pagination and filtering' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "findAllPaginationVersion", null);
__decorate([
    (0, common_1.Get)('filter-pagination'),
    (0, swagger_1.ApiOperation)({ summary: 'Find all plans with pagination and filtering' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "findAllPagination", null);
__decorate([
    (0, common_1.Get)('config-site'),
    (0, swagger_1.ApiOperation)({ summary: 'Find all plans with their categories and products' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "findAllPlansWithCategoriesAndProducts", null);
__decorate([
    (0, common_1.Get)('pagination'),
    (0, swagger_1.ApiOperation)({ summary: 'Find all plans with pagination' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('filter'),
    (0, swagger_1.ApiOperation)({ summary: 'Find plans by filtering criteria' }),
    openapi.ApiResponse({ status: 200, type: [require("./entity/plan.entity").Plan] }),
    __param(0, (0, common_1.Query)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "findByFilter", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Find a plan by ID' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('planuser/:planName/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Find a plan by plan name and user ID' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('planName')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "getPlanUser", null);
__decorate([
    (0, common_1.Post)('product/categories'),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar un producto con sus respectivas categorias dentro de un plan' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "setProductCategoriesPlan", null);
__decorate([
    (0, common_1.Get)('products/categories/:planId'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar los productos con sus respectivas categorias dentro de un plan' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('planId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "getProductsCategoriesPlan", null);
__decorate([
    (0, common_1.Put)(':id/update'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a plan by ID' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "updatePlan", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update the status of a plan by ID' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('rates/list'),
    (0, swagger_1.ApiOperation)({ summary: 'Find all rates' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "findAllRates", null);
__decorate([
    (0, common_1.Get)('versions_plan/list/:idPlan'),
    (0, swagger_1.ApiOperation)({ summary: 'Find all versions of a plan' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('idPlan', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "findAllVersionsPlan", null);
__decorate([
    (0, common_1.Get)('paywall/plans/:id/:site/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Find a plan by usertype' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('site')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "getPaywallPlan", null);
__decorate([
    (0, common_1.Post)('plan-template/create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create relation Plan Template' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "createPlanTemplate", null);
__decorate([
    (0, common_1.Get)('plan-template/list/:id_template'),
    (0, swagger_1.ApiOperation)({ summary: 'Find all plans' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id_template')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "findAllPlansTemplate", null);
__decorate([
    (0, common_1.Delete)('product/categorie/:planId/:idPlansProductCategory'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una categoría de un producto en un plan' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('planId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('idPlansProductCategory', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "deleteCategory", null);
__decorate([
    (0, common_1.Delete)('product/categorie/all/:idPlan/:idProduct'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una categoría de un producto en un plan' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('idPlan', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('idProduct', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "deleteCategoryProduct", null);
__decorate([
    (0, common_1.Put)('product/categorie/:idPlansProductCategory'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar la categoria' }),
    openapi.ApiResponse({ status: 200, type: require("../common/entity/categorys-access.entity").CategorysAccess }),
    __param(0, (0, common_1.Param)('idPlansProductCategory', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "updateCategoryAccess", null);
__decorate([
    (0, common_1.Put)('product/categorie/update-state/:idPlan'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('idPlan')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "updatePlanState", null);
__decorate([
    (0, common_1.Post)('paywall/plan/versioning'),
    (0, swagger_1.ApiOperation)({ summary: 'Find a plan by id' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "setPlanVersioning", null);
__decorate([
    (0, common_1.Get)('paywall/plan/versioning/:idPlan'),
    (0, swagger_1.ApiOperation)({ summary: 'Find a plan by id' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('idPlan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "getPlanVersioning", null);
__decorate([
    (0, common_1.Get)('subscription/:idPlan/:idUser'),
    (0, swagger_1.ApiOperation)({ summary: 'Find a plan by id' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('idPlan')),
    __param(1, (0, common_1.Param)('idUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "getPlanSubscription", null);
exports.PlansController = PlansController = __decorate([
    (0, common_1.Controller)('plans'),
    (0, swagger_1.ApiTags)('PLANS'),
    (0, nest_keycloak_connect_1.Unprotected)(),
    __metadata("design:paramtypes", [plans_service_1.PlansService])
], PlansController);
//# sourceMappingURL=plans.controller.js.map