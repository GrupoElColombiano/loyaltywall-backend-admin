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
exports.Site = void 0;
const openapi = require("@nestjs/swagger");
const plans_products_categories_entity_1 = require("../../common/entity/plans-products-categories.entity");
const product_entity_1 = require("../../product/entity/product.entity");
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../../category/entity/category.entity");
const sites_plan_entity_1 = require("../../common/entity/sites-plan.entity");
const plan_entity_1 = require("../../plans/entity/plan.entity");
const point_value_entity_1 = require("../../gamification/entities/point-value.entity");
const expire_point_entity_1 = require("../../gamification/entities/expire_point.entity");
const cluster_entity_1 = require("../../gamification/entities/cluster.entity");
const event_entity_1 = require("../../gamification/entities/event.entity");
const points_events_entity_1 = require("../../puntos_usuario/entity/points_events.entity");
const points_movement_entity_1 = require("../../puntos_usuario/entity/points_movement.entity");
const cluster_penalization_entity_1 = require("../../gamification/entities/cluster_penalization.entity");
const user_points_entity_1 = require("../../puntos_usuario/entity/user_points.entity");
const event_cluster_entity_1 = require("../../gamification/entities/event_cluster.entity");
let Site = exports.Site = class Site {
    static _OPENAPI_METADATA_FACTORY() {
        return { idSite: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, url: { required: true, type: () => String }, isActive: { required: true, type: () => Boolean }, createAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, category: { required: true, type: () => [require("../../category/entity/category.entity").Category] }, plansProductCategory: { required: true, type: () => [require("../../common/entity/plans-products-categories.entity").PlansProductCategory] }, products: { required: true, type: () => [require("../../product/entity/product.entity").Product] }, sitesPlan: { required: true, type: () => [require("../../common/entity/sites-plan.entity").SitesPlan] }, plan: { required: true, type: () => [require("../../plans/entity/plan.entity").Plan] }, point_value: { required: true, type: () => require("../../gamification/entities/point-value.entity").PointValue }, expire_time_point: { required: true, type: () => [require("../../gamification/entities/expire_point.entity").ExpireTimePoint] }, clusters: { required: true, type: () => [require("../../gamification/entities/cluster.entity").Cluster] }, events: { required: true, type: () => [require("../../gamification/entities/event.entity").Event] }, pointsEvents: { required: true, type: () => [require("../../puntos_usuario/entity/points_events.entity").PointsEvents] }, pointsMovement: { required: true, type: () => [require("../../puntos_usuario/entity/points_movement.entity").PointsMovement] }, clusterPenalization: { required: true, type: () => [require("../../gamification/entities/cluster_penalization.entity").ClusterPenalization] }, userPoints: { required: true, type: () => [require("../../puntos_usuario/entity/user_points.entity").UserPoints] }, event_clusters: { required: true, type: () => require("../../gamification/entities/event_cluster.entity").EventCluster } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Site.prototype, "idSite", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Site.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Site.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true, nullable: true }),
    __metadata("design:type", String)
], Site.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, nullable: true }),
    __metadata("design:type", Boolean)
], Site.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Site.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Site.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => category_entity_1.Category, category => category.site),
    __metadata("design:type", Array)
], Site.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => plans_products_categories_entity_1.PlansProductCategory, plansProductCategory => plansProductCategory.sites),
    __metadata("design:type", Array)
], Site.prototype, "plansProductCategory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, product => product.site),
    __metadata("design:type", Array)
], Site.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sites_plan_entity_1.SitesPlan, sitesPlan => sitesPlan.site),
    __metadata("design:type", Array)
], Site.prototype, "sitesPlan", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => plan_entity_1.Plan, plan => plan.site),
    (0, typeorm_1.JoinColumn)({ name: 'idPlan' }),
    __metadata("design:type", Array)
], Site.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => point_value_entity_1.PointValue, pointValue => pointValue.site),
    (0, typeorm_1.JoinColumn)({ name: 'idPointValue' }),
    __metadata("design:type", point_value_entity_1.PointValue)
], Site.prototype, "point_value", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => expire_point_entity_1.ExpireTimePoint, expireTimePoint => expireTimePoint.site),
    __metadata("design:type", Array)
], Site.prototype, "expire_time_point", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cluster_entity_1.Cluster, cluster => cluster.sites),
    __metadata("design:type", Array)
], Site.prototype, "clusters", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => event_entity_1.Event, event => event.sites, { nullable: true }),
    __metadata("design:type", Array)
], Site.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => points_events_entity_1.PointsEvents),
    (0, typeorm_1.JoinTable)({
        name: 'points_events',
        joinColumn: { name: 'id_points_events', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Site.prototype, "pointsEvents", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => points_movement_entity_1.PointsMovement),
    (0, typeorm_1.JoinTable)({
        name: 'points_movement',
        joinColumn: { name: 'id_points_movement', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Site.prototype, "pointsMovement", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cluster_penalization_entity_1.ClusterPenalization, clusterPenalization => clusterPenalization.site),
    __metadata("design:type", Array)
], Site.prototype, "clusterPenalization", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_points_entity_1.UserPoints, userPoints => userPoints.site),
    __metadata("design:type", Array)
], Site.prototype, "userPoints", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => event_cluster_entity_1.EventCluster, eventCluster => eventCluster.site),
    (0, typeorm_1.JoinColumn)({ name: 'id_event_cluster' }),
    __metadata("design:type", event_cluster_entity_1.EventCluster)
], Site.prototype, "event_clusters", void 0);
exports.Site = Site = __decorate([
    (0, typeorm_1.Entity)()
], Site);
//# sourceMappingURL=site.entity.js.map