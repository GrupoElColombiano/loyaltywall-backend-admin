"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansModule = void 0;
const common_1 = require("@nestjs/common");
const plans_service_1 = require("./plans.service");
const plans_controller_1 = require("./plans.controller");
const typeorm_1 = require("@nestjs/typeorm");
const plans_products_categories_entity_1 = require("../common/entity/plans-products-categories.entity");
const mongoose_1 = require("@nestjs/mongoose");
const plan_version_schema_1 = require("./schema/plan-version.schema");
const template_schema_1 = require("../template-manager/chemma/template.schema");
const sites_plan_entity_1 = require("../common/entity/sites-plan.entity");
const registerlog_module_1 = require("../registerlog/registerlog.module");
const rate_entity_1 = require("../common/entity/rate.entity");
const category_entity_1 = require("../category/entity/category.entity");
const categorys_access_entity_1 = require("../common/entity/categorys-access.entity");
const plan_versions_entity_1 = require("./entity/plan-versions.entity");
const plan_product_category_schema_1 = require("./schema/plan-product-category.schema");
const user_plan_entity_1 = require("../common/entity/user-plan.entity");
const plan_template_entity_1 = require("./entity/plan-template.entity");
const subscription_entity_1 = require("./entity/subscription.entity");
const event_entity_1 = require("../common/entity/event.entity");
const site_entity_1 = require("../common/entity/site.entity");
const points_events_entity_1 = require("../common/entity/points-events.entity");
const events_points_site_entity_1 = require("../common/entity/events-points-site.entity");
const versioning_schema_1 = require("../paywall/entities/versioning.schema");
const plan_entity_1 = require("./entity/plan.entity");
const plan_schema_1 = require("../paywall/entities/plan.schema");
const plan_history_schema_1 = require("./schema/plan-history.schema");
const plan_user_history_entity_1 = require("./entity/plan_user_history.entity");
let PlansModule = exports.PlansModule = class PlansModule {
};
exports.PlansModule = PlansModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: plan_version_schema_1.PlanVersion.name, schema: plan_version_schema_1.PlanVersionSchema },
                { name: template_schema_1.Template.name, schema: template_schema_1.TemplateSchema },
                { name: versioning_schema_1.Versioning.name, schema: versioning_schema_1.VersioningSchema },
                { name: plan_schema_1.Plan.name, schema: plan_schema_1.PlanSchema },
                { name: plan_history_schema_1.PlanHistory.name, schema: plan_history_schema_1.PlanHistorySchema },
            ]),
            typeorm_1.TypeOrmModule.forFeature([
                plan_entity_1.Plan,
                plans_products_categories_entity_1.PlansProductCategory,
                sites_plan_entity_1.SitesPlan,
                rate_entity_1.Rate,
                category_entity_1.Category,
                categorys_access_entity_1.CategorysAccess,
                plan_versions_entity_1.PlanVersion,
                plan_product_category_schema_1.Product,
                user_plan_entity_1.UserPlan,
                plan_template_entity_1.PlanTemplate,
                subscription_entity_1.Subscription,
                event_entity_1.Event,
                points_events_entity_1.PointsEvents,
                events_points_site_entity_1.EventsPointsSite,
                site_entity_1.Site,
                plan_user_history_entity_1.PlanUserHistory,
            ]),
            registerlog_module_1.RegisterlogModule,
        ],
        controllers: [plans_controller_1.PlansController],
        providers: [plans_service_1.PlansService],
    })
], PlansModule);
//# sourceMappingURL=plans.module.js.map