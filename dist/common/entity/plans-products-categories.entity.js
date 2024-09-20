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
exports.PlansProductCategory = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const plan_entity_1 = require("../../plans/entity/plan.entity");
const site_entity_1 = require("../../sites/entities/site.entity");
const product_entity_1 = require("../../product/entity/product.entity");
const categorys_access_entity_1 = require("../../common/entity/categorys-access.entity");
let PlansProductCategory = exports.PlansProductCategory = class PlansProductCategory {
    static _OPENAPI_METADATA_FACTORY() {
        return { idPlansProductCategory: { required: true, type: () => Number }, categorysAccess: { required: true, type: () => [require("./categorys-access.entity").CategorysAccess] }, sites: { required: true, type: () => require("../../sites/entities/site.entity").Site }, plan: { required: true, type: () => require("../../plans/entity/plan.entity").Plan }, product: { required: true, type: () => require("../../product/entity/product.entity").Product } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idPlansProductCategory' }),
    __metadata("design:type", Number)
], PlansProductCategory.prototype, "idPlansProductCategory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => categorys_access_entity_1.CategorysAccess, categorysAccess => categorysAccess.plansProductCategory),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", Array)
], PlansProductCategory.prototype, "categorysAccess", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site, site => site.plansProductCategory),
    (0, typeorm_1.JoinColumn)({ name: 'idSite' }),
    __metadata("design:type", site_entity_1.Site)
], PlansProductCategory.prototype, "sites", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plan_entity_1.Plan, plan => plan.plansProductsCategory),
    (0, typeorm_1.JoinColumn)({ name: 'idPlan' }),
    __metadata("design:type", plan_entity_1.Plan)
], PlansProductCategory.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, product => product.idProduct),
    (0, typeorm_1.JoinColumn)({ name: 'idProduct' }),
    __metadata("design:type", product_entity_1.Product)
], PlansProductCategory.prototype, "product", void 0);
exports.PlansProductCategory = PlansProductCategory = __decorate([
    (0, typeorm_1.Entity)({ name: 'PlansProductCategory' })
], PlansProductCategory);
//# sourceMappingURL=plans-products-categories.entity.js.map