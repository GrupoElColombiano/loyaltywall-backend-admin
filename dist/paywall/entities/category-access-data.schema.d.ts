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
export type CategoryAccessDataDocument = Document & CategoryData;
export declare class Category {
    idCategory: number;
    name: string;
    description: string;
    rules: string;
    is_accessible_for_free: boolean;
}
export declare class CategoryData {
    id: number;
    amount: number;
    unlimited: boolean;
    frequency: string;
    typeDuration: string;
    duration: number;
    category: Category;
}
export declare const CategoryAccDataSchema: import("mongoose").Schema<CategoryData, import("mongoose").Model<CategoryData, any, any, any, Document<unknown, any, CategoryData> & CategoryData & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CategoryData, Document<unknown, {}, import("mongoose").FlatRecord<CategoryData>> & import("mongoose").FlatRecord<CategoryData> & {
    _id: import("mongoose").Types.ObjectId;
}>;
