import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UpdateUserPasswordDto } from '../dto/update-user.dto';

//Documentation
import { ApiTags } from '@nestjs/swagger';
import { UserProfileService } from './users.service.profile';
import { Public, Resource, Roles, Scopes, Unprotected } from 'nest-keycloak-connect';

@ApiTags('USERS-PROFILE')
@Controller('profile')
@Unprotected()
export class UserProfileController {
  constructor(private readonly UserProfileService: UserProfileService) {}

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserPasswordDto: UpdateUserPasswordDto,
  ) {
    return this.UserProfileService.updatePassword(+id, updateUserPasswordDto);
  }
}
