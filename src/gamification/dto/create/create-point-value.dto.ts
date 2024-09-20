import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePointValueDto {
  @IsNumber()
  @IsNotEmpty()
  value: number; // Valor unitario del punto (en valor monetario)
}
