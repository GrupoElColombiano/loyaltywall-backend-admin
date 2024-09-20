import { Body, Controller, Get, Param, Post, Put, Query, Patch} from '@nestjs/common';
import { TemplateManagerService } from './template-manager.service';
import { Unprotected } from 'nest-keycloak-connect';


@Controller('template-manager')
@Unprotected()
export class TemplateManagerController {

  constructor(private readonly templateManagerService: TemplateManagerService) { }

  @Post('create')
  async create(@Body() body: any): Promise<any> {
    console.log('body', body)
    return await this.templateManagerService.create(body)
  }

  @Get('findAll')
  async findAll(@Query() query: any): Promise<any> {
    console.log('findAll', query)
    return await this.templateManagerService.findAll(query)
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.templateManagerService.findOne(id)
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateTemplateDto: any): Promise<any> {
    return await this.templateManagerService.update(id, updateTemplateDto);
  }

  @Patch(':id/activate')
  async activateTemplate(
    @Param('id') id: string,
    @Body('isActive') isActive: boolean
  ): Promise<any> {
    return this.templateManagerService.updateIsActive(id, isActive);
  }

}
