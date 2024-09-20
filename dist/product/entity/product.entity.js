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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const site_entity_1 = require("../../sites/entities/site.entity");
const category_entity_1 = require("../../category/entity/category.entity");
const plans_products_categories_entity_1 = require("../../common/entity/plans-products-categories.entity");
const plan_entity_1 = require("../../plans/entity/plan.entity");
let Product = exports.Product = class Product {
    static _OPENAPI_METADATA_FACTORY() {
        return { idProduct: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: false, type: () => String }, isActive: { required: true, type: () => Boolean }, all_product: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, site: { required: true, type: () => require("../../sites/entities/site.entity").Site }, category: { required: true, type: () => [require("../../category/entity/category.entity").Category] }, plansProductCategory: { required: true, type: () => [require("../../common/entity/plans-products-categories.entity").PlansProductCategory] }, plan: { required: true, type: () => require("../../plans/entity/plan.entity").Plan } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'The unique identifier of the product' }),
    __metadata("design:type", Number)
], Product.prototype, "idProduct", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, swagger_1.ApiProperty)({ description: 'The name of the product' }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    (0, swagger_1.ApiProperty)({
        description: 'The description of the product',
        required: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, swagger_1.ApiProperty)({ description: 'Indicates if the product is active' }),
    __metadata("design:type", Boolean)
], Product.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, swagger_1.ApiProperty)({ description: 'all_product si true se configura un plan acceso a to dos los productos del sitio' }),
    __metadata("design:type", Boolean)
], Product.prototype, "all_product", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    (0, swagger_1.ApiProperty)({ description: 'The creation date of the product' }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    (0, swagger_1.ApiProperty)({ description: 'The last update date of the product' }),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site, site => site.products),
    (0, typeorm_1.JoinColumn)({ name: 'idSite' }),
    __metadata("design:type", site_entity_1.Site)
], Product.prototype, "site", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => category_entity_1.Category, category => category.product),
    (0, typeorm_1.JoinColumn)({ name: 'idCategory' }),
    __metadata("design:type", Array)
], Product.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => plans_products_categories_entity_1.PlansProductCategory, plansProductCategory => plansProductCategory.product),
    (0, typeorm_1.JoinColumn)({ name: 'idPlansProductCategory' }),
    __metadata("design:type", Array)
], Product.prototype, "plansProductCategory", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plan_entity_1.Plan, product => product.products),
    (0, typeorm_1.JoinColumn)({ name: 'idPlan' }),
    __metadata("design:type", plan_entity_1.Plan)
], Product.prototype, "plan", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
//# sourceMappingURL=product.entity.js.map