import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserAdminDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserAdminDto) {}
// OmitType to not include the fields name, lastname, email, role, only password
export class UpdateUserPasswordDto extends OmitType(CreateUserAdminDto, [
  'firstName',
  'lastName',
  'email',
  'role',
]) {}
