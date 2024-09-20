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
exports.PlanDataSchema = exports.PlanData = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const category_access_data_schema_1 = require("./category-access-data.schema");
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
    __metadata("design:type", String)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Product.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Product.prototype, "all_product", void 0);
exports.Product = Product = __decorate([
    (0, mongoose_1.Schema)()
], Product);
let PlanData = exports.PlanData = class PlanData {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], PlanData.prototype, "idPlansProductCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Product }),
    __metadata("design:type", Product)
], PlanData.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [category_access_data_schema_1.CategoryAccDataSchema] }),
    __metadata("design:type", Array)
], PlanData.prototype, "categorysAccess", void 0);
exports.PlanData = PlanData = __decorate([
    (0, mongoose_1.Schema)()
], PlanData);
exports.PlanDataSchema = mongoose_1.SchemaFactory.createForClass(PlanData);
//# sourceMappingURL=plan-data.schema.js.map