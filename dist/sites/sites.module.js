"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesModule = void 0;
const dist_1 = require("@nestjs/typeorm/dist");
const common_1 = require("@nestjs/common");
const sites_controller_1 = require("./sites.controller");
const sites_service_1 = require("./sites.service");
const site_entity_1 = require("./entities/site.entity");
const plans_products_categories_entity_1 = require("../common/entity/plans-products-categories.entity");
const categorys_access_entity_1 = require("../common/entity/categorys-access.entity");
const category_entity_1 = require("../category/entity/category.entity");
const product_entity_1 = require("../product/entity/product.entity");
const cluster_penalization_entity_1 = require("../gamification/entities/cluster_penalization.entity");
const user_points_entity_1 = require("../puntos_usuario/entity/user_points.entity");
let SitesModule = exports.SitesModule = class SitesModule {
};
exports.SitesModule = SitesModule = __decorate([
    (0, common_1.Module)({
        imports: [dist_1.TypeOrmModule.forFeature([
                site_entity_1.Site,
                plans_products_categories_entity_1.PlansProductCategory,
                categorys_access_entity_1.CategorysAccess,
                category_entity_1.Category,
                product_entity_1.Product,
                cluster_penalization_entity_1.ClusterPenalization,
                user_points_entity_1.UserPoints,
            ])],
        controllers: [sites_controller_1.SitesController],
        providers: [sites_service_1.SitesService],
    })
], SitesModule);
//# sourceMappingURL=sites.module.js.map