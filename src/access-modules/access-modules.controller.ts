import { Controller, Get, Body, Put, Param } from '@nestjs/common';
import { AccessModulesService } from './access-modules.service';
import { Public } from 'nest-keycloak-connect';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

/**
 * Controller for managing access modules.
 * This controller provides routes for retrieving information and updating access modules.
 */
@Controller('access-modules')
@ApiTags('ACCESS MODULES')
export class AccessModulesController {
  constructor(private readonly accessModulesService: AccessModulesService) {}

  /**
   * Get the status of modules for a specific role.
   * @param id - The role's ID.
   * @returns {Object} Modules related to the role.
   */
  @Public(false)
  @Get('roles/:id')
  @ApiOperation({
    summary: 'Get module status by role',
    description: 'Retrieves the status of modules for a specific role.',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  getModulesStatusByRole(@Param('id') id: string) {
    return this.accessModulesService.getModulesStatusByRole(id);
  }

  /**
   * Get paywall module action for a specific role and module.
   * @param moduleId - The module's ID.
   * @param role - The role.
   */
  @Public(true)
  @Get('rolemoduleaction/:role')
  @ApiOperation({
    summary: 'Get role module action',
    description:
      'Retrieves the action of a role module for a specific role and module.',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  getRoleModuleAction(@Param('role') role: string, @Body() body: any) {
    console.log('role', role);
    return this.accessModulesService.getRolePaywallModule(role, body);
  }

  /**
   * Get paywall module action for a specific role and module.
   * @param moduleId - The module's ID.
   * @param role - The role.
   * @returns {Object} Paywall module action.
   */
  @Public(true)
  @Get('moduleaction/:moduleId/:role')
  @ApiOperation({
    summary: 'Get paywall module action',
    description:
      'Retrieves the action of a paywall module for a specific role and module.',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  getPaywallModuleAction(
    @Param('moduleId') moduleId: number,
    @Param('role') role: string,
  ) {
    console.log('por acá ingresó el role')
    return this.accessModulesService.getPaywallModuleAction(moduleId, role);
  }

  /**
   * Update paywall module action for a specific role and module.
   * @param product - The product data.
   * @param moduleId - The module's ID.
   * @param role - The role.
   * @param isActive - Indicates if the action is active.
   * @returns {Object} The result of the update.
   */
  @Public(false)
  @Put('moduleaction/:moduleId/:role/:isActive')
  @ApiOperation({
    summary: 'Update paywall module action',
    description:
      'Updates the action of a paywall module for a specific role and module.',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  getUpdatePaywallModuleAction(
    @Body() product: any,
    @Param('moduleId') moduleId: string,
    @Param('role') role: string,
    @Param('isActive') isActive: string,
  ) {
    return this.accessModulesService.getUpdatePaywallModuleAction(
      moduleId,
      role,
      isActive,
    );
  }

  /**
   * Update role module action for a specific role, module, and action relation.
   * @param moduleId - The module's ID.
   * @param role - The role.
   * @param ActionRelationId - The action relation ID.
   * @returns {Object} The result of the update.
   */
  @Public(false)
  @Put('rolemoduleaction/:moduleId/:ActionRelationId/:role')
  @ApiOperation({
    summary: 'Update role module action',
    description:
      'Updates the action of a role module for a specific role, module, and action relation.',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  setUpdateRolModuleAction(
    @Param('moduleId') moduleId: string,
    @Param('role') role: string,
    @Param('ActionRelationId') ActionRelationId: string,
  ) {
    return this.accessModulesService.setUpdateRolModuleAction(
      moduleId,
      ActionRelationId,
      role,
    );
  }

  /**
   * Get the list of paywall roles.
   * @returns {Object} The list of paywall roles.
   */
  @Get('list')
  @ApiOperation({
    summary: 'Get the list of paywall roles',
    description: 'Retrieves the list of paywall roles.',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  getRolePaywallModulle() {
    return this.accessModulesService.getRolePaywallModulle(2);
  }

  /**
   * Get all access modules.
   * @returns {Object} All access modules.
   */
  @Get()
  @ApiOperation({
    summary: 'Get all access modules',
    description: 'Retrieves all access modules.',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  findAll() {
    return this.accessModulesService.findAll();
  }

  /**
   * Get an access module by ID.
   * @param id - The ID of the access module.
   * @returns {Object} The access module with the specified ID.
   */
  @Get(':id')
  @ApiOperation({
    summary: 'Get an access module by ID',
    description: 'Retrieves an access module by its ID.',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  findOne(@Param('id') id: string) {
    return this.accessModulesService.findOne(+id);
  }

  /**
   * Update an access module by ID.
   * @param id - The ID of the access module to update.
   * @param updateAccessModule - The updated access module data.
   * @returns {Object} The updated access module.
   */
  @Put(':id')
  @ApiOperation({
    summary: 'Update an access module by ID',
    description: 'Updates an access module by its ID.',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  update(@Param('id') id: string, @Body() updateAccessModule: any) {
    return this.accessModulesService.update(+id, updateAccessModule);
  }
  @Public(false)
  @Get('active-modules/role/:roleId')
  async getModulesByRole(@Param('roleId') roleId: string) {
    return this.accessModulesService.getActiveModulesByRole(roleId);
  }
}
