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
exports.PlanHistorySchema = exports.PlanHistory = exports.PlansProductsCategorySchema = exports.PlansProductsCategory = exports.SiteSchema = exports.Site = exports.CategorySchema = exports.Category = exports.ProductSchema = exports.Product = exports.RateSchema = exports.Rate = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Rate = exports.Rate = class Rate {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Rate.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.Decimal128 }),
    __metadata("design:type", String)
], Rate.prototype, "rate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.Decimal128 }),
    __metadata("design:type", String)
], Rate.prototype, "rate_special", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.Decimal128 }),
    __metadata("design:type", String)
], Rate.prototype, "rate_special_renewal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.Decimal128 }),
    __metadata("design:type", String)
], Rate.prototype, "rate_renewal", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Rate.prototype, "is_special", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Rate.prototype, "date_start", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Rate.prototype, "date_end", void 0);
exports.Rate = Rate = __decorate([
    (0, mongoose_1.Schema)()
], Rate);
exports.RateSchema = mongoose_1.SchemaFactory.createForClass(Rate);
let Product = exports.Product = class Product {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Product.prototype, "idProduct", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Product.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Product.prototype, "all_product", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
exports.Product = Product = __decorate([
    (0, mongoose_1.Schema)()
], Product);
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
let Category = exports.Category = class Category {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Category.prototype, "idCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Category.prototype, "rules", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Category.prototype, "is_accessible_for_free", void 0);
exports.Category = Category = __decorate([
    (0, mongoose_1.Schema)()
], Category);
exports.CategorySchema = mongoose_1.SchemaFactory.createForClass(Category);
let Site = exports.Site = class Site {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Site.prototype, "idSite", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Site.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Site.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Site.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Site.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Site.prototype, "createAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Site.prototype, "updateAt", void 0);
exports.Site = Site = __decorate([
    (0, mongoose_1.Schema)()
], Site);
exports.SiteSchema = mongoose_1.SchemaFactory.createForClass(Site);
let PlansProductsCategory = exports.PlansProductsCategory = class PlansProductsCategory {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], PlansProductsCategory.prototype, "idPlansProductCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Product' }),
    __metadata("design:type", Product)
], PlansProductsCategory.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'Site' }),
    __metadata("design:type", Array)
], PlansProductsCategory.prototype, "sites", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'Category' }),
    __metadata("design:type", Array)
], PlansProductsCategory.prototype, "categorysAccess", void 0);
exports.PlansProductsCategory = PlansProductsCategory = __decorate([
    (0, mongoose_1.Schema)()
], PlansProductsCategory);
exports.PlansProductsCategorySchema = mongoose_1.SchemaFactory.createForClass(PlansProductsCategory);
let PlanHistory = exports.PlanHistory = class PlanHistory {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], PlanHistory.prototype, "idVersionPlan", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], PlanHistory.prototype, "idPlan", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PlanHistory.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PlanHistory.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PlanHistory.prototype, "userType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], PlanHistory.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PlanHistory.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PlanHistory.prototype, "updatedAt", void 0);
exports.PlanHistory = PlanHistory = __decorate([
    (0, mongoose_1.Schema)()
], PlanHistory);
exports.PlanHistorySchema = mongoose_1.SchemaFactory.createForClass(PlanHistory);
//# sourceMappingURL=plan-history.schema.js.map