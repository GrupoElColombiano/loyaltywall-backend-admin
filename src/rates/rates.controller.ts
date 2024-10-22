import {
  Controller,
  Get,
  Query,
  ParseIntPipe,
  Post,
  Body,
  Param,
  Put,
  ValidationPipe,
  Delete
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger'; // 
import { Unprotected } from 'nest-keycloak-connect';
import { RatesService } from './rates.service';

@Controller('rates')
@ApiTags('RATES') // Swagger tag for the controller
@Unprotected() // Controller is unprotected
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get('findRatesByPlan/:planId')
  @ApiOperation({ summary: 'Get rates by plan' }) // Add 
  async getRatesByPlan(
    @Param('planId') planId: string,
  ) {
    console.log("🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯")
    return this.ratesService.getRatesByPlan({ planId });
  }
}