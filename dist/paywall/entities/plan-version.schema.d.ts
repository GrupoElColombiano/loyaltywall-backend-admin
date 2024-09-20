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
import { PlanDataDocument } from './plan-data.schema';
export type PlanVerDocument = Document & PlanVersion;
export declare class Rate {
    id: number;
    time: string;
    rate: string;
    rate_special: string;
    rate_special_renewal: string;
    rate_renewal: string;
    duration: number;
    is_special: boolean;
    date_start: string;
    date_end: string;
}
export type RateDocument = Document & Rate;
export declare const RateSchema: import("mongoose").Schema<Rate, import("mongoose").Model<Rate, any, any, any, Document<unknown, any, Rate> & Rate & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Rate, Document<unknown, {}, import("mongoose").FlatRecord<Rate>> & import("mongoose").FlatRecord<Rate> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare class PlanVersion {
    idVersionPlan: number;
    idPlan: number;
    description: string;
    name: string;
    userType: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    plansProductsCategory: PlanDataDocument[];
    rates: Rate[];
}
export declare const PlanVersionSchema: import("mongoose").Schema<PlanVersion, import("mongoose").Model<PlanVersion, any, any, any, Document<unknown, any, PlanVersion> & PlanVersion & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PlanVersion, Document<unknown, {}, import("mongoose").FlatRecord<PlanVersion>> & import("mongoose").FlatRecord<PlanVersion> & {
    _id: import("mongoose").Types.ObjectId;
}>;
