import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import {
  Public,
  Resource,
  Roles,
  Scopes,
  Unprotected,
} from 'nest-keycloak-connect';
//Documentation
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('SITES')
@Controller('sites')
@Unprotected()
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  /**
   * Create a site.
   *
   * @param {CreateSiteDto} createSiteDto - The DTO object for creating a site.
   * @returns {Promise<Site>} The created site.
   */
  @Post('create')
  @ApiOperation({ summary: 'Create a site' })
  create(@Body() createSiteDto: CreateSiteDto) {
    return this.sitesService.create(createSiteDto);
  }

  /**
   * Get all the created sites.
   *
   * @returns {Promise<Site[]>} All the created sites.
   */
  @Get('list')
  @ApiOperation({ summary: 'Get all the created sites' })
  findAll() {
    return this.sitesService.findAll();
  }

  @Get('filter-site')
  @ApiOperation({ summary: 'Get all the created sites' })
  filterSites(@Query() query: any): Promise<any> {
    return this.sitesService.findByFilter(query);
  }

  @Get('filter-pagination')
  @ApiOperation({ summary: 'Get Sites with pagination and filter' })
  async findAllPagination(
    @Query(new ValidationPipe({ transform: true })) query: any,
  ): Promise<any[]> {
    console.log('query', query)
    return await this.sitesService.findAllWithPaginationAndFilter(query);
  }

  /**
   * Get a created site by ID.
   *
   * @param {string} idSite - The ID of the site to retrieve.
   * @returns {Promise<Site>} The found site.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Get a created sites by id' })
  findOne(@Param('id') id: string) {
    return this.sitesService.findOne(+id);
  }

  /**
   * Update a site by ID.
   *
   * @param {string} id - The ID of the site to update.
   * @param {UpdateSiteDto} updateSiteDto - The DTO object containing updated site data.
   * @returns {Promise<Site>} The updated site.
   */
  @Patch(':id')
  @ApiOperation({ summary: 'Update a site by id' })
  update(@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
    return this.sitesService.update(+id, updateSiteDto);
  }

  /**
   * Delete a site by ID.
   *
   * @param {string} id - The ID of the site to delete.
   * @returns {Promise<void>}
   */
  @Delete('remove/:id')
  @ApiOperation({ summary: 'Delete a site by id' })
  remove(@Param('id') id: number) {
    return this.sitesService.remove(id);
  }

  @Get('select/:id')
  @ApiOperation({ summary: 'Get all the created sites' })
  selectSite(@Param('id') id: number) {
    return this.sitesService.selectSites(id);
  }
}
