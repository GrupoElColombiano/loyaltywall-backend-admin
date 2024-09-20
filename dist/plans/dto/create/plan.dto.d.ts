export declare enum UserType {
    Suscrito = "Suscrito",
    Anonimo = "An\u00F3nimo",
    RegistradoSinPago = "Registrado sin pago"
}
export declare class PlanDto {
    description: string;
    name: string;
    userType: UserType;
    isActive: boolean;
    categories?: string;
    contentQuantity?: number;
    frequencyType?: string;
    durationType?: string;
}
