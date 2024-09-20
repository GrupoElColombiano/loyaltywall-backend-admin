import {
  IsNumber,
  IsString,
  IsOptional,
} from 'class-validator';

export class UpdatePlanDto {
  @IsOptional()
  @IsNumber()
  idPlan?: number;

  @IsOptional()
  @IsNumber()
  idVersionPlan?: number;

  @IsOptional()
  @IsString()
  userType?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  name?: string;

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

  @IsOptional()
  @IsString()
  isActive?: boolean;
}
