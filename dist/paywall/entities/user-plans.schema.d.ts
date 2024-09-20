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
export type UserPlansDocument = Document & UserPlans;
export declare class UserPlans {
    id: number;
    idUser: string;
    idPlan: number;
    isActive: boolean;
    dateExpiredPlan: string;
    dateInitPlan: string;
    idVersion: string;
}
export declare const UserPlansSchema: import("mongoose").Schema<UserPlans, import("mongoose").Model<UserPlans, any, any, any, Document<unknown, any, UserPlans> & UserPlans & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserPlans, Document<unknown, {}, import("mongoose").FlatRecord<UserPlans>> & import("mongoose").FlatRecord<UserPlans> & {
    _id: import("mongoose").Types.ObjectId;
}>;
