import { IsString, IsNotEmpty, Length, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserAdminDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Deimar D.' })
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Perea Moreno' })
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Image' })
  readonly image?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Role' })
  readonly role?: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  @ApiProperty({ description: '1234' })
  readonly password: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'ddpream@unal.edu.co' })
  readonly email: string;
}
