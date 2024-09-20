export declare class Plan {
    idPlan: number;
    idVersionPlan: number;
    description: string;
    name: string;
    userType: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare class Product {
    idProduct: number;
    name: string;
    description?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    plan: Plan;
}
