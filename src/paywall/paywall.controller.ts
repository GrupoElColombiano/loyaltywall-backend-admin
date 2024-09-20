import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PaywallService } from './paywall.service';
import { CreatePaywallDto } from './dto/create-paywall.dto';
import { UpdatePaywallDto } from './dto/update-paywall.dto';
import {
  Public,
  Resource,
  Roles,
  Scopes,
  Unprotected,
} from 'nest-keycloak-connect';

@Controller('paywall')
@Unprotected() // Controller is unprotected
export class PaywallController {
  constructor(private readonly paywallService: PaywallService) {}

  @Post()
  create(@Body() createPaywallDto: CreatePaywallDto) {
    return this.paywallService.create(createPaywallDto);
  }

  @Get()
  findAll() {
    return this.paywallService.findAll();
  }

  /*@Get(':id')
  findOne(@Param('id') id: string) {
    return this.paywallService.findOne(+id);
  }*/

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaywallDto: UpdatePaywallDto) {
    return this.paywallService.update(+id, updatePaywallDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paywallService.remove(+id);
  }

  @Post('metadata_paywall')
  async addMetadataPaywall(@Body() metadata: any): Promise<any> {
    return await this.paywallService.addMetadataPaywallMongo(metadata);
  }

  @Get('metadata_paywall')
  async getMetadataPaywall(
    @Query('uniqueId') uniqueId: string,
    @Query('userType') userType: string,
    @Query('site') site: string,
    @Query('isAccessibleForFree') isAccessibleForFree: boolean,
    @Query('amount') amount: number,
    @Query('category') category: string,
    @Query('duration') duration: number,
    @Query('unlimited') unlimited: boolean,
    @Query('allProduct') allProduct: boolean,
    @Query('identifier') identifier: number
  ): Promise<any> {
    return await this.paywallService.getMetadataPaywall(
      uniqueId,
      userType,
      site,
      isAccessibleForFree,
      amount,
      category,
      duration,
      unlimited,
      allProduct,
      identifier,
    );
  }

  @Post('plan_paywall')
  async addPlanPaywallMongo(@Body() metadata: any): Promise<any> {
    return await this.paywallService.addPlanPaywallMongo(metadata);
  }

  @Post('points_event')
  async addPointsEvent(@Body() metadata: any): Promise<any> {
    return await this.paywallService.registerPointsEvent(metadata);
  }

  
}
