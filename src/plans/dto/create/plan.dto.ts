import { IsNumber, IsString, IsOptional, IsBoolean, IsEnum } from 'class-validator';

export enum UserType {
  Suscrito = 'Suscrito',
  Anonimo = 'Anónimo',
  RegistradoSinPago = 'Registrado sin pago',
}

export class PlanDto {
  @IsString()
  description: string;

  @IsString()
  name: string;

  @IsEnum(UserType) // Modificado aquí para utilizar el enum UserType
  userType: UserType;

  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  @IsString()
  categories?: string;

  @IsOptional()
  @IsNumber()
  contentQuantity?: number;

  @IsOptional()
  @IsString()
  frequencyType?: string;

  @IsOptional()
  @IsString()
  durationType?: string;
}
