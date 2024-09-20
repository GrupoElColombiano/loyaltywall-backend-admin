import { IsString, IsNumber, IsNotEmpty, IsArray } from 'class-validator';

export class CreateClusterDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
