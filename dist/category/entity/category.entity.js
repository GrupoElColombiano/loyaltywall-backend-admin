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
exports.Category = void 0;
const openapi = require("@nestjs/swagger");
const product_entity_1 = require("../../product/entity/product.entity");
const site_entity_1 = require("../../sites/entities/site.entity");
const typeorm_1 = require("typeorm");
const categorys_access_entity_1 = require("../../common/entity/categorys-access.entity");
const swagger_1 = require("@nestjs/swagger");
let Category = exports.Category = class Category {
    static _OPENAPI_METADATA_FACTORY() {
        return { idCategory: { required: true, type: () => Number }, site: { required: true, type: () => require("../../sites/entities/site.entity").Site }, product: { required: true, type: () => require("../../product/entity/product.entity").Product }, categorysAccess: { required: true, type: () => [require("../../common/entity/categorys-access.entity").CategorysAccess] }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, rules: { required: true, type: () => String }, is_accessible_for_free: { required: true, type: () => Boolean } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idCategory' }),
    __metadata("design:type", Number)
], Category.prototype, "idCategory", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site, (site) => site.category),
    (0, typeorm_1.JoinColumn)({ name: 'idSite' }),
    __metadata("design:type", site_entity_1.Site)
], Category.prototype, "site", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.category),
    (0, typeorm_1.JoinColumn)({ name: 'idProduct' }),
    __metadata("design:type", product_entity_1.Product)
], Category.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => categorys_access_entity_1.CategorysAccess, (categorysAccess) => categorysAccess.category),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", Array)
], Category.prototype, "categorysAccess", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "rules", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, swagger_1.ApiProperty)({ description: 'Una bandera para indicar que el artículo, evento o lugar es accesible de forma gratuita.',
    }),
    __metadata("design:type", Boolean)
], Category.prototype, "is_accessible_for_free", void 0);
exports.Category = Category = __decorate([
    (0, typeorm_1.Entity)({ name: 'categories' })
], Category);
//# sourceMappingURL=category.entity.js.map