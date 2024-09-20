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
import { CategoryAccessDataDocument } from './category-access-data.schema';
export type PlanDataDocument = Document & PlanData;
export declare class Product {
    idProduct: number;
    name: string;
    description: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    all_product: boolean;
}
export declare class PlanData {
    idPlansProductCategory: number;
    product: Product;
    categorysAccess: CategoryAccessDataDocument[];
}
export declare const PlanDataSchema: import("mongoose").Schema<PlanData, import("mongoose").Model<PlanData, any, any, any, Document<unknown, any, PlanData> & PlanData & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PlanData, Document<unknown, {}, import("mongoose").FlatRecord<PlanData>> & import("mongoose").FlatRecord<PlanData> & {
    _id: import("mongoose").Types.ObjectId;
}>;
