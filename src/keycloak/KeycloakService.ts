import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { PaywallModule } from 'src/common/entity/paywallModule.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { RolesService } from 'src/roles/roles.service';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
import { color } from 'console-log-colors';


@Injectable()
export class KeycloakService {
  private authServerUrl: string;
  private realm: string;
  private clientIdNumber: string;
  private clientId: string;
  private clientSecret: string;
  private realmlist: string;
  private outsideRealm: string;
  private outsideClientId: string;
  private outsideClientSecret: string;

  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(PaywallModule)
    private readonly paywallModuleRepository: Repository<PaywallModule>,
    private readonly configService: ConfigService,
    private readonly rolesService: RolesService,
    private readonly registerlogService: RegisterlogService
  ) {
    this.authServerUrl = this.configService.get('KEYCLOAK_AUTH_SERVER_URL');
    this.realm = this.configService.get('KEYCLOAK_REALM');
    this.clientIdNumber = this.configService.get('KEYCLOAK_CLIENT_ID_NUMBER');
    this.clientId = this.configService.get('KEYCLOAK_CLIENT_ID');
    this.clientSecret = this.configService.get('KEYCLOAK_SECRET');

    this.outsideRealm = this.configService.get('KEYCLOAK_REALM_CLIENT');
    this.outsideClientId = this.configService.get('KEYCLOAK_OUTSIDE_CLIENT_ID');
    this.outsideClientSecret = this.configService.get(
      'KEYCLOAK_OUTSIDE_SECRET'
    );
  }

  /**
   * Authenticate user and obtain an access token.
   * @param credentials - User login credentials.
   * @returns {Promise<any>} A promise that resolves to the obtained access token.
   */
  async loginTokenFinalUsers(credentials): Promise<any> {
    try {
      const headersRequest = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      const body = {
        client_id: 'backend-client-paywall',
        client_secret: 'uCZbaXKJumL5CH6adikmv8rxDvXcekD4',
        grant_type: 'client_credentials',
      };

      console.log('body', body, this.authServerUrl);
      const response = await firstValueFrom(
        this.httpService.post(
          `${this.authServerUrl}/realms/loyaltywall-client-dev/protocol/openid-connect/token`,
          body,
          { headers: headersRequest }
        )
      );

      return response.data;
    } catch (error) {
      console.log('error', error.message);
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Find all users with pagination and filter.
   *
   * @param {any} tokenAccess - The access token.
   * @param {Object} query - The query parameters including role, search, enabled, page, and limit.
   * @param {string} query.role - The role to filter by (optional).
   * @param {string} query.search - The search term (optional).
   * @param {string} query.enabled - The enabled status (optional).
   * @param {string} query.page - The page number (optional).
   * @param {string} query.limit - The maximum number of items per page (optional).
   * @returns {Promise<any>} - A promise that resolves to the user data.
   * @throws {NotFoundException} - If the user is not found.
   * @throws {Error} - If an unknown error occurs while searching for users.
   */
  async findAllWithPaginationAndFilterFinalUsers(
    tokenAccess: any,
    query: {
      role?: string;
      search?: string;
      enabled?: string;
      page?: string;
      limit?: string;
    }
  ): Promise<any> {
    const { role, search, enabled, page, limit } = query;

    const firstPage = parseInt(page, 10) || 1;
    const maxLimit = parseInt(limit, 10) || 10;

    try {
      const headersRequest = {
        'Content-Type': 'application/json',
        Authorization: `${tokenAccess}`,
      };

      const baseUrl = `${this.authServerUrl}/admin/realms/${this.outsideRealm}/users`;
      const queryParams = {
        role,
        search,
        enabled,
        first: (firstPage - 1) * maxLimit, // Calcula el índice del primer elemento a recuperar.
        max: maxLimit, // Establece el número máximo de elementos por página.
      };

      console.log(" baseUrl ", baseUrl)
      // Primera llamada para obtener el total de usuarios
      const totalResponse = await firstValueFrom(
        this.httpService.get(baseUrl, {
          headers: headersRequest,
        })
      );

      const totalUsers = totalResponse.data.length;

      console.log(" totalUsers ", totalUsers)
      // Segunda llamada para obtener los usuarios paginados
      const paginatedResponse = await firstValueFrom(
        this.httpService.get(baseUrl, {
          headers: headersRequest,
          params: queryParams,
        })
      );

      if (paginatedResponse.status === 200) {
        return {
          status: 200,
          message: 'Users found',
          total: totalUsers,
          totalUsers: totalResponse.data.length,
          totalUsersToday: 19,
          data: paginatedResponse.data,
        };
      } else if (paginatedResponse.status === 404) {
        throw new NotFoundException('User not found');
      } else {
        throw new Error('Unknown error searching users');
      }
    } catch (error) {
      console.log('error', error.message);
      throw new NotFoundException(error.message);
    }
  }


  /**
   * Authenticate user and obtain an access token.
   * @param credentials - User login credentials.
   * @returns {Promise<any>} A promise that resolves to the obtained access token.
   */
  async loginToken(credentials): Promise<any> {
    try {
      const headersRequest = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      const response = await firstValueFrom(
        this.httpService.post(
          `${this.authServerUrl}/realms/${this.realm}/protocol/openid-connect/token`,
          credentials,
          { headers: headersRequest }
        )
      );

      return response.data;
    } catch (error) {
      console.log('error', error.message);
      throw new NotFoundException(error.message);
    }
  }

  async refreshToken(refresh_token): Promise<any> {
    try {
      const headersRequest = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      const body = {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
      };

      const response = await firstValueFrom(
        this.httpService.post(
          `${this.authServerUrl}/realms/${this.realm}/protocol/openid-connect/token`,
          body,
          { headers: headersRequest }
        )
      );

      return response.data;
    } catch (error) {
      console.log('error', error.message);
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Create a new user.
   * @param user - User data to create.
   * @param tokenAccess - Authorization token.
   * @returns {Promise<any>} A promise that resolves to the created user data.
   */
  async createUser(user: any, tokenAccess: string): Promise<any> {
    try {
      const headersRequest = {
        'Content-Type': 'application/json',
        Authorization: `${tokenAccess}`,
        'custom-header': 'custom-header-value',
      };

      const response = await firstValueFrom(
        this.httpService.post(
          `${this.authServerUrl}/admin/realms/${this.realm}/users`,
          user,
          { headers: headersRequest }
        )
      );
      return response.data;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * List all users.
   * @param tokenAccess - Authorization token.
   * @returns {Promise<any>} A promise that resolves to a list of users.
   */
  async listUsers(tokenAccess: string): Promise<any> {
    console.log('reino'+this.realmlist);
    try {
      const headersRequest = {
        'Content-Type': 'application/json',
        Authorization: `${tokenAccess}`,
      };

      const response = await firstValueFrom(
        this.httpService.get(
          `${this.authServerUrl}/admin/realms/${this.realm}/users`,
          { headers: headersRequest }

        )
      );
      return response.data;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * List all roles.
   * @param tokenAccess - Authorization token.
   * @returns {Promise<any>} A promise that resolves to a list of roles.
   */
  async listRoles(tokenAccess: string): Promise<any> {
    try {
      const headersRequest = {
        'Content-Type': 'application/json',
        Authorization: `${tokenAccess}`,
      };

      const response = await firstValueFrom(
        this.httpService.get(
          `${this.authServerUrl}/admin/realms/${this.realm}/clients/${this.clientIdNumber}/roles`,
          { headers: headersRequest }
        )
      );
      const roles = response.data.filter(
        (role: any) => role.name !== 'uma_protection'
      );
      return roles;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Create a new paywall module.
   * @param paywallModule - Paywall module data to create.
   * @returns {Promise<PaywallModule>} A promise that resolves to the created paywall module.
   */
  async createPaywallModule(paywallModule: any): Promise<PaywallModule> {
    try {
      const response = await this.paywallModuleRepository.save(paywallModule);
      return response;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * List all paywall modules.
   * @returns {Promise<any>} A promise that resolves to a list of paywall modules.
   */
  async listPaywallModules(): Promise<any> {
    try {
      const response = await this.paywallModuleRepository.find();
      return response;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Edit a user by ID.
   * @param tokenAccess - Authorization token.
   * @param user - User data to update.
   * @param id - User ID.
   * @returns {Promise<any>} A promise that resolves to the updated user data.
   */
  async editUser(tokenAccess: string, user: any, id: any): Promise<any> {
    try {
      const headersRequest = {
        'Content-Type': 'application/json',
        Authorization: `${tokenAccess}`,
        'custom-header': 'custom-header-value',
      };

      const url = `${this.authServerUrl}/admin/realms/${this.realm}/users/${id}`;

      console.log('url', url);
      const response = await firstValueFrom(
        this.httpService.put(url, user, { headers: headersRequest })
      );
      console.log(color.green('response'), response)

      if (response.status === 204) {
        return {
          status: 200,
          message: `User with id: ${id} has been edited`,
          user: user,
        };
      } else {
        throw new NotFoundException('Failed to update the user');
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Find a user by ID.
   * @param tokenAccess - Authorization token.
   * @param id - User ID.
   * @returns {Promise<any>} A promise that resolves to the found user data.
   */
  async findUser(tokenAccess: string, id: any): Promise<any> {

    console.log('Servicio Keycloak', tokenAccess, id)
    try {
      const headersRequest = {
        'Content-Type': 'application/json',
        Authorization: `${tokenAccess}`,
      };

      const url = `https://auth.loyaltywall.com/admin/realms/${this.realm}/users/${id}`;
      const response = await fetch(url, { 
        method: "GET",
        headers: headersRequest 
      }).then(response => response.json()).catch(err => console.log('❌ error ❌', err));

      console.log("🚀 ~ KeycloakService ~ findUser ~ response:", response)
      if (response?.username) {
        return response;
      } 

      throw new NotFoundException('User not found');
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Find users by role.
   *
   * @param {string} tokenAccess - The access token.
   * @param {any} role - The role to search for.
   * @returns {Promise<any>} - A promise that resolves to the user data.
   * @throws {NotFoundException} - If the user is not found.
   * @throws {Error} - If an unknown error occurs while searching for users by role.
   */
  async findUsersByRole(tokenAccess: string, role: any) {
    try {
      const headersRequest = {
        'Content-Type': 'application/json',
        Authorization: `${tokenAccess}`,
      };

      const url = `${this.authServerUrl}/admin/realms/${this.realm}/clients/${this.clientIdNumber}/roles/${role}/users`;
      const response = await firstValueFrom(
        this.httpService.get(url, { headers: headersRequest })
      );

      console.log('response', response);
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 404) {
        throw new NotFoundException('Usuario no encontrado');
      } else {
        throw new Error('Error desconocido al buscar los usuarios por rol');
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * List roles by user.
   *
   * @param {string} tokenAccess - The access token.
   * @param {any} userId - The user ID to list roles for.
   * @returns {Promise<any>} - A promise that resolves to the list of roles.
   * @throws {NotFoundException} - If the user is not found.
   * @throws {Error} - If an unknown error occurs while searching for roles by user.
   */
  async listRolesByUser(tokenAccess: string, userId: any, clientIp?: any, userAgent?: any) {
    console.log("🚀 ~ KeycloakService ~ listRolesByUser ~ listRolesByUser:", JSON.stringify({
      tokenAccess, userId, clientIp, userAgent
    }))
    const registerlog: any = {
      "userId": userId,
      "roleId": this.realm,
      "activityType": "List Roll",
      "description": "List roll for user.",
      "affectedObject": "Keycloak",
      "success": true,
      "ipAddress": clientIp,
      "userAgent": userAgent,
      "timestamp": new Date(),
      "error": null,
      "url": this.authServerUrl,
      "token": tokenAccess,
    }
    try {
      const headersRequest = {
        'Content-Type': 'application/json',
        Authorization: `${tokenAccess}`,
      };
      console.log("🚀 ~ KeycloakService ~ listRolesByUser ~ headersRequest:", headersRequest)

      // const URL: any = `${this.authServerUrl}/admin/realms/${this.realm}/users/${userId}/role-mappings/clients/${this.clientIdNumber}`;
      const URL: any = `${this.authServerUrl}/admin/realms/${this.realm}/users/${userId}/role-mappings/clients/${this.clientIdNumber}`;
      // const URL: any = `${this.authServerUrl}/admin/realms/${this.realm}/users/${userId}/role-mappings`;
      console.log("🚀 ~ KeycloakService ~ listRolesByUser ~ URL: 461 ", URL);
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenAccess
        }
    });

    const data = await response.json();
    console.log("=== data ===", data);
    return data;
      // const response = await firstValueFrom(
      //   this.httpService.get(URL, { headers: headersRequest })
      // );
      // return firstValueFrom(
      //   this.httpService.get(URL, { headers: headersRequest })
      // ).then((response) => {
      //   console.log('✅ ✅ ✅ response ✅ ✅ ✅', { response })
      //   if (response.status === 200) {
      //     registerlog.success = false;
      //     // const reg_log = await this.registerlogService.create(registerlog);
      //     console.log("✅ ✅ ✅ data ✅ ✅ ✅", response.data);
      //     return response.data;
      //   }
      //   // } else if (response.status === 404) {
      //   //   throw new NotFoundException('User not found');
      //   // } else {
      //   //   throw new NotFoundException('Unkown error searching roles by user');
      //   // }
      // }).catch((err) => {
      //   console.log('✅ ✅ ✅ Error ✅ ✅ ✅', { err })
      // });
      // console.log('✅ ✅ ✅ response ✅ ✅ ✅', { response })
      // const url_key = `${this.authServerUrl}/admin/realms/${this.realm}/users/${userId}/role-mappings/clients/${this.clientIdNumber}`;
      // if (response.status === 200) {
      //   registerlog.success = false;
      //   const reg_log = await this.registerlogService.create(registerlog);
      //   console.log("✅ ✅ ✅ data ✅ ✅ ✅", response.data);
      //   return response.data;
      // } else if (response.status === 404) {
      //   throw new NotFoundException('User not found');
      // } else {
      //   throw new NotFoundException('Unkown error searching roles by user');
      // }
    } catch (error: any) {
      registerlog.success = false;
      registerlog.error = error;
      const reg_log = await this.registerlogService.create(registerlog);
      console.log(color.yellow(reg_log));
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Find all users with pagination and filter.
   *
   * @param {any} tokenAccess - The access token.
   * @param {Object} query - The query parameters including role, search, enabled, page, and limit.
   * @param {string} query.role - The role to filter by (optional).
   * @param {string} query.search - The search term (optional).
   * @param {string} query.enabled - The enabled status (optional).
   * @param {string} query.page - The page number (optional).
   * @param {string} query.limit - The maximum number of items per page (optional).
   * @returns {Promise<any>} - A promise that resolves to the user data.
   * @throws {NotFoundException} - If the user is not found.
   * @throws {Error} - If an unknown error occurs while searching for users.
   */
  async findAllWithPaginationAndFilter(
    tokenAccess: any,
    query: {
      role?: string;
      search?: string;
      enabled?: string;
      page?: string;
      limit?: string;
    }
  ): Promise<any> {
    const { role, search, enabled, page, limit } = query;

    const firstPage = parseInt(page, 10) || 1;
    const maxLimit = parseInt(limit, 10) || 10;

    try {
      const headersRequest = {
        'Content-Type': 'application/json',
        Authorization: `${tokenAccess}`,
      };

      const url = `${this.authServerUrl}/admin/realms/${this.realm}/users?role=${role}&search=${search}&enabled=${enabled}&first=${firstPage - 1}&max=${maxLimit}`;

      const queryParams = {
        role,
        search,
        enabled,
        first: (firstPage - 1) * maxLimit, // Calcula el índice del primer elemento a recuperar.
        max: maxLimit, // Establece el número máximo de elementos por página.
      };

      console.log('queryParams', queryParams);
      console.log('url', url);
      const response = await firstValueFrom(
        this.httpService.get(url, {
          headers: headersRequest,
          params: queryParams,
        })
      );

      console.log(response);

      if (response.status === 200) {
        return response.data;
      } else if (response.status === 404) {
        throw new NotFoundException('User not found');
      } else {
        throw new Error('Unkown error searching users');
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }



  async findAllWithPaginationAndFilterRoles(
    tokenAccess: any,
    query: {
      search?: string;
      page?: string;
      limit?: string;
      idSite?: string;
    }
  ): Promise<any> {
    const { search, page, limit, idSite } = query;
    console.log('== findAllWithPaginationAndFilterRoles ==');
    console.log('query', query);

    const firstPage = parseInt(page, 10) || 1;
    const maxLimit = parseInt(limit, 10) || 10;
    const idSiteInt = parseInt(idSite, 10) || 1;

    try {
      const headersRequest = {
        'Content-Type': 'application/json',
        Authorization: `${tokenAccess}`,
      };

      const url = `${this.authServerUrl}/admin/realms/${this.realm}/clients/${this.clientIdNumber}/roles?search=${search}&first=${firstPage - 1}&max=${maxLimit}`;

      console.log("🚀 ~ KeycloakService ~ url: 572", url);
      const queryParams = {
        search,
        first: (firstPage - 1) * maxLimit,
        max: maxLimit,
      };

      // const response = await firstValueFrom(
      //   this.httpService.get(url, {
      //     headers: headersRequest,
      //     params: queryParams,
      //   })
      // );

      const response = await fetch(url, {
        method: "GET",
        headers: headersRequest
    });

    console.log("🚀 ~ fetchRoles ~ response:", response)
    const data = await response.json();
    console.log("=== data ===", data);

      if (response.status === 200) {
        if (idSite) {
          const rolesWithSearchedSite = [];
          const roles = data.filter(
            (role: any) => role.name !== 'uma_protection'
          );
          console.log('roles', roles);

          const rolesIdFromSearch = roles.map((role) => role.id);

          //Llamar al servicio de get sites by role por cada rol
          await Promise.all(
            rolesIdFromSearch.map(async (roleId: any) => {
              const sitesForRole: any = await this.rolesService.getSitesByRole(
                roleId
              );
              // console.log('sitesForRole', sitesForRole);
              //Validar si el idRole enviado en esta url existe en ese listado
              sitesForRole.data.map((item: any) => {
                if (idSiteInt === item.idSite) {
                  rolesWithSearchedSite.push(roleId);
                }
              });
            })
          );

          // Devolver solo los roles que si tengan ese idSite
          const filteredRoles = data.filter((role) => rolesWithSearchedSite.includes(role.id)
          );
          return filteredRoles;
        } else {
          const roles = data.filter(
            (role: any) => role.name !== 'uma_protection'
          );
          return roles;
        }
      } else if (response.status === 404) {
        throw new NotFoundException('Role not found');
      } else {
        throw new Error('Unkown error searching roles');
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }


}
