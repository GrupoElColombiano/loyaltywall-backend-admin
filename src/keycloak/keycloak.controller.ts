import {
  Body,
  Controller,
  Headers,
  Post,
  Get,
  Put,
  Param,
  ValidationPipe,
  Query,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { KeycloakService } from './KeycloakService';
import { Public } from 'nest-keycloak-connect';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
// import { color } from 'console-log-colors';

@Controller('keycloak')
@ApiTags('KEYCLOAK') // Swagger tag for the controller
@ApiBearerAuth()
export class KeycloakController {
  constructor(private readonly keycloakService: KeycloakService) {}

  /**
   * Login and retrieve an authentication token.
   * @param credentials - User credentials for login.
   * @returns {Promise<any>} A promise that resolves to the authentication token.
   */
  @Public(true)
  @Post('final-user/token')
  @ApiOperation({ summary: 'Login and retrieve an authentication token' })
  async loginTokenFinalUsers(@Body() credentials: any): Promise<any> {
    console.log('credentials', credentials);
    return await this.keycloakService.loginTokenFinalUsers(credentials);
  }

  @Public(true)
  @Get('final-users/filter-pagination')
  @ApiOperation({ summary: 'Get users with pagination and filter' })
  async findAllWithPaginationAndFilterFinalUsers(
    @Headers('Authorization') tokenAccess: string,
    @Query(new ValidationPipe({ transform: true })) query: any,
  ): Promise<any[]> {
    console.log('ingreso al controller', query);
    return await this.keycloakService.findAllWithPaginationAndFilterFinalUsers(
      tokenAccess,
      query,
    );
  }


  /**
   * Login and retrieve an authentication token.
   * @param credentials - User credentials for login.
   * @returns {Promise<any>} A promise that resolves to the authentication token.
   */
  @Public(true)
  @Post('token')
  @ApiOperation({ summary: 'Login and retrieve an authentication token' })
  async loginToken(@Body() credentials: any): Promise<any> {
    console.log('credentials', credentials);
    return await this.keycloakService.loginToken(credentials);
  }

  /**
   * Refresh an authentication token.
   * @param refresh_token - Refresh token to refresh the authentication token.
   * @returns {Promise<any>} A promise that resolves to the refreshed authentication token.
   */
  @Post('refresh-token')
  @ApiOperation({
    summary: 'Login and retrieve an authentication refresh token',
  }) // Descripción del endpoint en Swagger
  @ApiResponse({ status: 200, description: 'Token refreshed successfully' }) // Respuesta exitosa en Swagger
  @ApiResponse({ status: 404, description: 'Not Found' }) //
  @Public(true)
  @Post('refresh-token')
  @ApiOperation({
    summary: 'Login and retrieve an authentication refresh token',
  })
  async refreshToken(
    @Body('refresh_token') refresh_token: string,
  ): Promise<any> {
    return await this.keycloakService.refreshToken(refresh_token);
  }

  /**
   * Create a new user.
   * @param user - User data to create.
   * @param tokenAccess - Authorization token.
   * @returns {Promise<any>} A promise that resolves to the created user data.
   */
  @Public(true)
  @Post('users/create')
  @ApiOperation({ summary: 'Create a new user' })
  async createUser(
    @Body() user: any,
    @Headers('Authorization') tokenAccess: string,
  ): Promise<any> {
    return await this.keycloakService.createUser(user, tokenAccess);
  }

  @Public(true)
  @Get('users/filter-pagination')
  @ApiOperation({ summary: 'Get users with pagination and filter' })
  async findAllPagination(
    @Headers('Authorization') tokenAccess: string,
    @Query(new ValidationPipe({ transform: true })) query: any,
  ): Promise<any[]> {
    console.log('ingreso al controller', query);
    return await this.keycloakService.findAllWithPaginationAndFilter(
      tokenAccess,
      query,
    );
  }

  /**
   * List all users.
   * @param tokenAccess - Authorization token.
   * @returns {Promise<any>} A promise that resolves to a list of users.
   */
  @Public(true)
  @Get('users/list')
  @ApiOperation({ summary: 'List all users' })
  async listUsers(@Headers('Authorization') tokenAccess: string): Promise<any> {
    console.log('token', tokenAccess);
    return await this.keycloakService.listUsers(tokenAccess);
  }

  /**
   * Get roles with pagination and filter.
   * @param {string} tokenAccess - The authorization token.
   * @param {any} query - Query parameters for pagination and filtering.
   * @returns {Promise<any[]>} A Promise that resolves to an array of roles.
   */
  @Public(true)
  @Get('roles/filter-pagination')
  @ApiOperation({ summary: 'Get roles with pagination and filter' })
  async findAllPaginationRoles(
    @Headers('Authorization') tokenAccess: string,
    @Query(new ValidationPipe({ transform: true })) query: any,
  ): Promise<any[]> {
    return await this.keycloakService.findAllWithPaginationAndFilterRoles(
      tokenAccess,
      query,
    );
  }

  /**
   * List all roles.
   * @param tokenAccess - Authorization token.
   * @returns {Promise<any>} A promise that resolves to a list of roles.
   */
  @Public(true)
  @Get('roles/list')
  @ApiOperation({ summary: 'List all roles' })
  async listRoles(@Headers('Authorization') tokenAccess: string): Promise<any> {
    console.log('token', tokenAccess);
    return await this.keycloakService.listRoles(tokenAccess);
  }

  /**
   * Create a new paywall module.
   * @param paywallModule - Paywall module data to create.
   * @returns {Promise<any>} A promise that resolves to the created paywall module data.
   */
  @Public(true)
  @Post('paywallModule')
  @ApiOperation({ summary: 'Create a new paywall module' })
  async createPaywallModule(@Body() paywallModule: any): Promise<any> {
    return await this.keycloakService.createPaywallModule(paywallModule);
  }

  /**
   * List all paywall modules.
   * @returns {Promise<any>} A promise that resolves to a list of paywall modules.
   */
  @Public(true)
  @Get('paywallModule')
  @ApiOperation({ summary: 'List all paywall modules' })
  async listPaywallModule(): Promise<any> {
    return await this.keycloakService.listPaywallModules();
  }

  /**
   * Edit a user by ID.
   * @param user - User data to update.
   * @param id - User ID.
   * @param tokenAccess - Authorization token.
   * @returns {Promise<any>} A promise that resolves to the updated user data.
   */
  @Public(true)
  @Put('users/edit/:id')
  @ApiOperation({ summary: 'Edit a user by ID' })
  @ApiResponse({ status: 200, description: 'Success' })
  async editUser(
    @Body() user: any,
    @Param('id') id: any,
    @Headers('Authorization') tokenAccess: string,
  ): Promise<any> {
    return await this.keycloakService.editUser(tokenAccess, user, id);
  }

  /**
   * Find a user by ID.
   * @param tokenAccess - Authorization token.
   * @param id - User ID.
   * @returns {Promise<any>} A promise that resolves to the found user data.
   */
  @Public(true)
  @Get('users/:id')
  @ApiOperation({ summary: 'Find a user by ID' })
  async listUser(
    @Headers('Authorization') tokenAccess: string,
    @Param('id') id: any,
  ): Promise<any> {
    // console.log('token', tokenAccess);
    return await this.keycloakService.findUser(tokenAccess, id);
  }

  /**
   * Controller to list users by role.
   *
   * @param {string} tokenAccess - The authorization token.
   * @param {string} role - The role to filter users by.
   * @returns {Promise<any>} - A promise that resolves to the list of users with the specified role.
   */
  @Public(true)
  @Get('users/:role/list')
  @ApiOperation({ summary: 'Find a user by role' })
  async listUserByRol(
    @Headers('Authorization') tokenAccess: string,
    @Param('role') role: any,
  ): Promise<any> {
    console.log('token', role)
    return await this.keycloakService.findUsersByRole(tokenAccess, role);
  }

  /**
   * Controller to list roles by user.
   *
   * @param {string} tokenAccess - The authorization token.
   * @param {string} userId - The user ID to list roles for.
   * @returns {Promise<any>} - A promise that resolves to the list of roles assigned to the specified user.
   */
  @Public(true)
  @Get('roles/:userId/list')
  @ApiOperation({ summary: 'Find roles from user id' })
  async listRolesByUser(
    @Headers('Authorization') tokenAccess: string,
    @Param('userId') userId: any,
    @Req() req: any,
  ): Promise<any> {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    console.log("🚗 roles by userId executed 🚗", JSON.stringify({ userId, clientIp, userAgent, tokenAccess }));
    return await this.keycloakService.listRolesByUser(tokenAccess, userId, clientIp, userAgent);
  }
}
