import {
  IsString,
  IsNumber,
  IsOptional,
  IsDecimal,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {

  @IsString()
  @ApiProperty({ description: 'The name of the product' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The description of the product', required: false })
  description?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ description: 'Indicates if the product is active', required: false })
  isActive?: boolean;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ description: 'The site id of the product', required: false })
  idSite?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ description: 'The category id of the product', required: false })
  idCategory?: number;

}
