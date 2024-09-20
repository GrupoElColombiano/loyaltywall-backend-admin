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
exports.PlanVersionSchema = exports.PlanVersion = exports.PlansProductCategory = exports.categorysAccess = exports.Product = exports.Site = exports.Rate = exports.Category = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class Category {
}
exports.Category = Category;
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
class Rate {
}
exports.Rate = Rate;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Rate.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate.prototype, "rate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate.prototype, "rate_special", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Rate.prototype, "rate_special_renewal", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
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
class Site {
}
exports.Site = Site;
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
class Product {
}
exports.Product = Product;
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
class categorysAccess {
}
exports.categorysAccess = categorysAccess;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], categorysAccess.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], categorysAccess.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], categorysAccess.prototype, "unlimited", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], categorysAccess.prototype, "frequency", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], categorysAccess.prototype, "typeDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], categorysAccess.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Category }),
    __metadata("design:type", Category)
], categorysAccess.prototype, "category", void 0);
class PlansProductCategory {
}
exports.PlansProductCategory = PlansProductCategory;
__decorate([
    (0, mongoose_1.Prop)({ type: [Product] }),
    __metadata("design:type", Array)
], PlansProductCategory.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Site] }),
    __metadata("design:type", Array)
], PlansProductCategory.prototype, "sites", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [categorysAccess] }),
    __metadata("design:type", Array)
], PlansProductCategory.prototype, "categorysAccess", void 0);
let PlanVersion = exports.PlanVersion = class PlanVersion {
};
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", Number)
], PlanVersion.prototype, "idPlan", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], PlanVersion.prototype, "idVersionPlan", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PlanVersion.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PlanVersion.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PlanVersion.prototype, "userType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], PlanVersion.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PlanVersion.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PlanVersion.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)([Rate]),
    __metadata("design:type", Array)
], PlanVersion.prototype, "rates", void 0);
__decorate([
    (0, mongoose_1.Prop)([PlansProductCategory]),
    __metadata("design:type", Array)
], PlanVersion.prototype, "plansProductsCategory", void 0);
exports.PlanVersion = PlanVersion = __decorate([
    (0, mongoose_1.Schema)()
], PlanVersion);
exports.PlanVersionSchema = mongoose_1.SchemaFactory.createForClass(PlanVersion);
//# sourceMappingURL=plan-version.schema.js.map