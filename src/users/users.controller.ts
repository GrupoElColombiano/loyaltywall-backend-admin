import { Controller, Post, Body, Get, Query, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserAdminDto } from './dto/create-user.dto';

//Documentation
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { ConfigService } from '@nestjs/config';
import { Public, Unprotected } from 'nest-keycloak-connect';
import axios from 'axios';

@ApiTags('USERS')
@Controller('users')
@Unprotected()
export class UsersController {
  private authServerUrl: string;
  private realm: string;
  private clientIdNumber: string;
  private clientId: string;
  private clientSecret: string;
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService
  ) {
    this.authServerUrl = this.configService.get('KEYCLOAK_AUTH_SERVER_URL');
    this.realm = this.configService.get('KEYCLOAK_OUTSIDE_REALM');
    this.clientIdNumber = this.configService.get('KEYCLOAK_OUTSIDE_CLIENT_ID_NUMBER');
    this.clientId = this.configService.get('KEYCLOAK_OUTSIDE_CLIENT_ID');
    this.clientSecret = this.configService.get('KEYCLOAK_OUTSIDE_SECRET');
  }

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
  async authenticate() {

    console.log("this.authServerUrl::::", this.authServerUrl);
    console.log("this.realm::::", this.realm);
    console.log("this.clientIdNumber::::", this.clientIdNumber);
    console.log("this.clientId::::", this.clientId);
    console.log("this.clientSecret::::", this.clientSecret);

    if (!this.authServerUrl || !this.realm || !this.clientIdNumber || !this.clientId || !this.clientSecret) {
      throw new HttpException('Keycloak environment variables not set up', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    console.log("Previous :::", {
      "this.authServerUrl": this.authServerUrl,
      "this.clientId": this.clientId,
      "this.clientSecret": this.clientSecret
    });
    const tokenUrl = `${this.authServerUrl}/realms/${this.realm}/protocol/openid-connect/token`;

    const formData = new URLSearchParams();
    formData.append('grant_type', 'client_credentials');
    formData.append('client_id', this.clientId);
    formData.append('client_secret', this.clientSecret);

    console.log(":: formData ::", JSON.stringify(formData));
    console.log(" EL TOKEN ", tokenUrl);

    const getData1 = formData.getAll("grant_type");
    const getData2 = formData.getAll("client_id");
    const getData3 = formData.getAll("client_secret");
    
    try {

      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
      }
      )
      const getData = await response.json();
      return getData;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

}
