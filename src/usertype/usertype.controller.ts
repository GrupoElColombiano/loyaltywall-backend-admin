import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsertypeService } from './usertype.service';
import { UserTypeDto } from './dto/usertype.dto';
import { Public, Resource, Roles, Scopes, Unprotected } from 'nest-keycloak-connect';
@Controller('usertype')
@Unprotected()
export class UsertypeController {  
  constructor(private readonly usertypeService: UsertypeService) {}

  @Post()
  create(@Body() userType: UserTypeDto) {
    return this.usertypeService.create(userType);
  }

  @Get()
  findUserType() {
    return this.usertypeService.findUserType();
  }
}
