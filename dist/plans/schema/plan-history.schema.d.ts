/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Types } from 'mongoose';
export declare class Rate {
    id: number;
    time: string;
    rate: string;
    rate_special: string;
    rate_special_renewal: string;
    rate_renewal: string;
    duration: number;
    is_special: boolean;
    date_start: Date;
    date_end: Date;
}
export declare const RateSchema: import("mongoose").Schema<Rate, import("mongoose").Model<Rate, any, any, any, Document<unknown, any, Rate> & Rate & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Rate, Document<unknown, {}, import("mongoose").FlatRecord<Rate>> & import("mongoose").FlatRecord<Rate> & {
    _id: Types.ObjectId;
}>;
export declare class Product {
    idProduct: number;
    name: string;
    description: string;
    isActive: boolean;
    all_product: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product> & Product & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>> & import("mongoose").FlatRecord<Product> & {
    _id: Types.ObjectId;
}>;
export declare class Category {
    idCategory: number;
    name: string;
    description: string;
    rules: string;
    is_accessible_for_free: boolean;
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, Document<unknown, any, Category> & Category & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, Document<unknown, {}, import("mongoose").FlatRecord<Category>> & import("mongoose").FlatRecord<Category> & {
    _id: Types.ObjectId;
}>;
export declare class Site {
    idSite: number;
    name: string;
    description: string;
    url: string;
    isActive: boolean;
    createAt: Date;
    updateAt: Date;
}
export declare const SiteSchema: import("mongoose").Schema<Site, import("mongoose").Model<Site, any, any, any, Document<unknown, any, Site> & Site & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Site, Document<unknown, {}, import("mongoose").FlatRecord<Site>> & import("mongoose").FlatRecord<Site> & {
    _id: Types.ObjectId;
}>;
export declare class PlansProductsCategory {
    idPlansProductCategory: number;
    product: Product;
    sites: Site[];
    categorysAccess: Category[];
}
export declare const PlansProductsCategorySchema: import("mongoose").Schema<PlansProductsCategory, import("mongoose").Model<PlansProductsCategory, any, any, any, Document<unknown, any, PlansProductsCategory> & PlansProductsCategory & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PlansProductsCategory, Document<unknown, {}, import("mongoose").FlatRecord<PlansProductsCategory>> & import("mongoose").FlatRecord<PlansProductsCategory> & {
    _id: Types.ObjectId;
}>;
export declare class PlanHistory {
    idVersionPlan: number;
    idPlan: number;
    description: string;
    name: string;
    userType: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PlanHistorySchema: import("mongoose").Schema<PlanHistory, import("mongoose").Model<PlanHistory, any, any, any, Document<unknown, any, PlanHistory> & PlanHistory & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PlanHistory, Document<unknown, {}, import("mongoose").FlatRecord<PlanHistory>> & import("mongoose").FlatRecord<PlanHistory> & {
    _id: Types.ObjectId;
}>;
