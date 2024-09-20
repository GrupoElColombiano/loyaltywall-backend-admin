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
exports.Plan = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const sites_plan_entity_1 = require("../../common/entity/sites-plan.entity");
const site_entity_1 = require("../../sites/entities/site.entity");
const rate_entity_1 = require("../../common/entity/rate.entity");
const plans_products_categories_entity_1 = require("../../common/entity/plans-products-categories.entity");
const product_entity_1 = require("../../product/entity/product.entity");
const plan_versions_entity_1 = require("./plan-versions.entity");
const user_plan_entity_1 = require("../../common/entity/user-plan.entity");
const plan_template_entity_1 = require("../../plans/entity/plan-template.entity");
let Plan = exports.Plan = class Plan {
    constructor() {
        this.idVersionPlan = 1;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { idPlan: { required: false, type: () => Number }, idVersionPlan: { required: true, type: () => Number, default: 1 }, description: { required: true, type: () => String }, name: { required: true, type: () => String }, userType: { required: true, type: () => String }, isActive: { required: true, type: () => Boolean }, idSite: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, plansProductsCategory: { required: true, type: () => [require("../../common/entity/plans-products-categories.entity").PlansProductCategory] }, sitesPlan: { required: true, type: () => [require("../../common/entity/sites-plan.entity").SitesPlan] }, site: { required: true, type: () => require("../../sites/entities/site.entity").Site }, rates: { required: true, type: () => [require("../../common/entity/rate.entity").Rate] }, products: { required: true, type: () => require("../../product/entity/product.entity").Product }, planVersions: { required: true, type: () => [require("./plan-versions.entity").PlanVersion] }, userPlans: { required: true, type: () => [require("../../common/entity/user-plan.entity").UserPlan] }, planTemplates: { required: true, type: () => [require("./plan-template.entity").PlanTemplate] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idPlan' }),
    __metadata("design:type", Number)
], Plan.prototype, "idPlan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'idVersionPlan', default: 1 }),
    __metadata("design:type", Number)
], Plan.prototype, "idVersionPlan", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Plan.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Plan.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Plan.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Plan.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Plan.prototype, "idSite", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], Plan.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], Plan.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => plans_products_categories_entity_1.PlansProductCategory, plansProductsCategory => plansProductsCategory.plan),
    __metadata("design:type", Array)
], Plan.prototype, "plansProductsCategory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sites_plan_entity_1.SitesPlan, sitesPlan => sitesPlan.plan),
    __metadata("design:type", Array)
], Plan.prototype, "sitesPlan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site, site => site.plan),
    (0, typeorm_1.JoinColumn)({ name: 'idSite' }),
    __metadata("design:type", site_entity_1.Site)
], Plan.prototype, "site", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rate_entity_1.Rate, rate => rate.plan),
    __metadata("design:type", Array)
], Plan.prototype, "rates", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, product => product.plan),
    __metadata("design:type", product_entity_1.Product)
], Plan.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => plan_versions_entity_1.PlanVersion, planVersion => planVersion.plan),
    __metadata("design:type", Array)
], Plan.prototype, "planVersions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_plan_entity_1.UserPlan, userPlan => userPlan.plan),
    __metadata("design:type", Array)
], Plan.prototype, "userPlans", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => plan_template_entity_1.PlanTemplate, planTemplate => planTemplate.plan),
    __metadata("design:type", Array)
], Plan.prototype, "planTemplates", void 0);
exports.Plan = Plan = __decorate([
    (0, typeorm_1.Entity)({ name: 'plans' })
], Plan);
//# sourceMappingURL=plan.entity.js.map