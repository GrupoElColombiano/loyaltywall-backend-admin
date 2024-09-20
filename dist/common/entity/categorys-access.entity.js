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
exports.CategorysAccess = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const plans_products_categories_entity_1 = require("../../common/entity/plans-products-categories.entity");
const category_entity_1 = require("../../category/entity/category.entity");
let CategorysAccess = exports.CategorysAccess = class CategorysAccess {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, category: { required: true, type: () => require("../../category/entity/category.entity").Category }, plansProductCategory: { required: true, type: () => require("./plans-products-categories.entity").PlansProductCategory }, amount: { required: true, type: () => Number }, unlimited: { required: true, type: () => Boolean }, frequency: { required: true, type: () => String }, typeDuration: { required: true, type: () => String }, duration: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CategorysAccess.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, category => category.categorysAccess),
    (0, typeorm_1.JoinColumn)({ name: 'idCategory' }),
    __metadata("design:type", category_entity_1.Category)
], CategorysAccess.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plans_products_categories_entity_1.PlansProductCategory, plansProductCategory => plansProductCategory.idPlansProductCategory),
    (0, typeorm_1.JoinColumn)({ name: 'idPlansProductCategory' }),
    __metadata("design:type", plans_products_categories_entity_1.PlansProductCategory)
], CategorysAccess.prototype, "plansProductCategory", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CategorysAccess.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], CategorysAccess.prototype, "unlimited", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CategorysAccess.prototype, "frequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'typeDuration', nullable: true }),
    __metadata("design:type", String)
], CategorysAccess.prototype, "typeDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CategorysAccess.prototype, "duration", void 0);
exports.CategorysAccess = CategorysAccess = __decorate([
    (0, typeorm_1.Entity)()
], CategorysAccess);
//# sourceMappingURL=categorys-access.entity.js.map