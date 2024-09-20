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
import { Document } from 'mongoose';
export declare class Category {
    idCategory: number;
    name: string;
    description: string;
    rules: string;
    is_accessible_for_free: boolean;
}
export declare class Rate {
    id: number;
    time: string;
    rate: number;
    rate_special: number;
    rate_special_renewal: number;
    rate_renewal: number;
    duration: number;
    is_special: boolean;
    date_start: Date;
    date_end: Date;
}
export declare class Site {
    idSite: number;
    name: string;
    description: string;
    url: string;
    isActive: boolean;
    createAt: Date;
    updateAt: Date;
}
export declare class Product {
    idProduct: number;
    name: string;
    description: string;
    isActive: boolean;
    all_product: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare class categorysAccess {
    id: number;
    amount: number;
    unlimited: boolean;
    frequency: string;
    typeDuration: string;
    duration: number;
    category: Category;
}
export declare class PlansProductCategory {
    product: Product[];
    sites: Site[];
    categorysAccess: categorysAccess[];
}
export declare class PlanVersion {
    idPlan: number;
    idVersionPlan: number;
    description: string;
    name: string;
    userType: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    rates: Rate[];
    plansProductsCategory: PlansProductCategory[];
}
export declare const PlanVersionSchema: import("mongoose").Schema<PlanVersion, import("mongoose").Model<PlanVersion, any, any, any, Document<unknown, any, PlanVersion> & PlanVersion & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PlanVersion, Document<unknown, {}, import("mongoose").FlatRecord<PlanVersion>> & import("mongoose").FlatRecord<PlanVersion> & {
    _id: import("mongoose").Types.ObjectId;
}>;
