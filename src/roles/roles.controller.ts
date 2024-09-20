import { Controller, Get, Put, Post, Body, Param } from '@nestjs/common';
import { RolesService } from './roles.service';

// Import Swagger annotations
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  Public,
  Resource,
  Roles,
  Scopes,
  Unprotected,
} from 'nest-keycloak-connect';

@ApiTags('ROLES')
@Controller('roles')
@Unprotected()
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  // Swagger annotation
  @ApiOperation({ summary: 'Assign sites to a role' })
  @ApiResponse({ status: 200, description: 'Sites assigned successfully' })
  @Post(':role/sites/create')
  assignSitesToRole(@Param('role') role: string, @Body() siteIds: any[]) {
    return this.rolesService.assignSitesToRole(role, siteIds);
  }

  // Swagger annotation
  @ApiOperation({ summary: 'Get sites by role' })
  @ApiResponse({ status: 200, description: 'Sites retrieved successfully' })
  @Get(':role/sites/list')
  getSitesByRole(@Param('role') role: string) {
    console.log(" HOLA QUE TAL ", role)
    return this.rolesService.getSitesByRole(role);
  }

  // Swagger annotation
  @ApiOperation({ summary: 'Update sites by role' })
  @ApiResponse({ status: 200, description: 'Sites updated successfully' })
  @Put(':role/sites/update')
  updateSitesForRole(@Param('role') role: string, @Body() siteIds: any[]) {
    return this.rolesService.updateSitesForRole(role, siteIds);
  }
}
