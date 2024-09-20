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
exports.CategoryAccDataSchema = exports.CategoryData = exports.Category = void 0;
const mongoose_1 = require("@nestjs/mongoose");
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
let CategoryData = exports.CategoryData = class CategoryData {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], CategoryData.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], CategoryData.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], CategoryData.prototype, "unlimited", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CategoryData.prototype, "frequency", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CategoryData.prototype, "typeDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], CategoryData.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Category }),
    __metadata("design:type", Category)
], CategoryData.prototype, "category", void 0);
exports.CategoryData = CategoryData = __decorate([
    (0, mongoose_1.Schema)()
], CategoryData);
exports.CategoryAccDataSchema = mongoose_1.SchemaFactory.createForClass(CategoryData);
//# sourceMappingURL=category-access-data.schema.js.map