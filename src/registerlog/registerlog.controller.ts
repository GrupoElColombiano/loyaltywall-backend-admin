import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { RegisterlogService } from './registerlog.service';
import { Public, Unprotected } from 'nest-keycloak-connect';
import { query } from 'express';

@Controller('registerlog')
@Unprotected()
export class RegisterlogController {

  constructor(private readonly registerlogService: RegisterlogService) {}

  @Public(true)
  @Post('create')
  async createRegisterlog(@Body() registerlogDto: any) {
    return this.registerlogService.create(registerlogDto);
  }

  @Public(true)
  @Post('createPaymentTransaction')
  async createPaymentTransactions(@Body() paymentTransactionDto: any) {
    return this.registerlogService.createPaymentTransaction(paymentTransactionDto);
  }

  @Public(true)
  @Post('createPaymentTransaction')
  async createPaymentTransaction(@Body() paymentTransactionDto: any) {
    return this.registerlogService.createPaymentTransaction(paymentTransactionDto);
  }

  // Método findAll que filtra por affectedObject de la tabla register_logs, usando query
  @Public(true)
  @Get('findAll')
  async findAll(@Query() registerlogDto: any) {
    return this.registerlogService.findAll(registerlogDto);
  }


  @Public(true)
  @Get(':idSite/findAllPaymentTransaction')
  async findAllPaymentTransaction(@Param('idSite') idSite: any, @Query() query: any) {
    return this.registerlogService.findAllPaymentTransaction(query, idSite);
  }

}
