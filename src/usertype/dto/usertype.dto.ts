import { IsNotEmpty, IsString } from 'class-validator';
import { Column } from 'typeorm';

export class UserTypeDto {
  @IsNotEmpty()
  @IsString()
  @Column({ default: 'Anónimo' })
  description: string;
}
