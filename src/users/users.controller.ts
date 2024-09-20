import { Controller, Post, Body, Get, Query, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserAdminDto } from './dto/create-user.dto';

//Documentation
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { Public, Unprotected } from 'nest-keycloak-connect';
import axios from 'axios';

@ApiTags('USERS')
@Controller('users')
@Unprotected()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @Public()
  @ApiOperation({ summary: 'Create a new user' })
  async create(@Body() createUserAdminDto: any) {
    return await this.usersService.createUser(createUserAdminDto);
  }

  @Get('all')
  @Public()
  @ApiOperation({ summary: 'Get all users' })
  async getAll(@Body() createUserAdminDto: any, @Query('page') page: number, @Query('limit') limit: number) {
    return await this.usersService.getAllUser(page, limit, createUserAdminDto);
  }

  @Get(':idKeycloak')
  @Public()
  @ApiOperation({ summary: 'Get user by idKeycloak' })
  async getById(@Param('idKeycloak') idKeycloak: string) {
    return await this.usersService.getUserPlanByIdKeycloak(idKeycloak);
  }

  @Post('authenticate')
  async authenticate(@Body() body: { username: string, password: string }) {
    const { username, password } = body;
    const { KEYCLOAK_AUTH_SERVER_URL_CLIENT, KEYCLOAK_REALM_CLIENT, KEYCLOAK_CLIENT_ID_CLIENT, KEYCLOAK_SECRET_CLIENT } = process.env;

    console.log(" KEYCLOAK_AUTH_SERVER_URL_CLIENT ", KEYCLOAK_AUTH_SERVER_URL_CLIENT);
    console.log(" KEYCLOAK_CLIENT_ID_CLIENT ", KEYCLOAK_CLIENT_ID_CLIENT);
    console.log(" KEYCLOAK_CLIENT_ID_CLIENT ", KEYCLOAK_CLIENT_ID_CLIENT);
    console.log(" KEYCLOAK_SECRET_CLIENT: ", KEYCLOAK_SECRET_CLIENT);

    if (!KEYCLOAK_AUTH_SERVER_URL_CLIENT || !KEYCLOAK_REALM_CLIENT || !KEYCLOAK_CLIENT_ID_CLIENT || !KEYCLOAK_SECRET_CLIENT) {
      throw new HttpException('Keycloak environment variables not set up', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const tokenUrl = `${KEYCLOAK_AUTH_SERVER_URL_CLIENT}/realms/${KEYCLOAK_REALM_CLIENT}/protocol/openid-connect/token`;

    const formData = new URLSearchParams();
    formData.append('grant_type', 'password');
    formData.append('client_id', KEYCLOAK_CLIENT_ID_CLIENT);
    formData.append('client_secret', KEYCLOAK_SECRET_CLIENT);
    formData.append('username', username);
    formData.append('password', password);

    console.log(" EL TOKEN ", tokenUrl);
    try {
      const response = await axios.post(tokenUrl, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });  
      

      return response.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

}
