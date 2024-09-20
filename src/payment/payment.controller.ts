import { Controller, Post, Get, Body, Put, Param, HttpException, HttpStatus, Query  } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Unprotected, Public } from 'nest-keycloak-connect';

@Controller('payment')
@Unprotected()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  //Controlador para crear un nuevo PaymentGateway con ruta create/${idSite}
  @Post('create/:idSite')
  async createPaymentGateway(@Body() paymentGateway: any, @Param('idSite') idSite: number) {
    try {
      return await this.paymentService.createPaymentGateway(paymentGateway, idSite);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Controlador para editar un PaymentGateway por el idSite por query
  @Put('update')
  async updatePaymentGateway(@Query('idSite') idSite: number){
    try {
      return await this.paymentService.updatePaymentGateway(idSite);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Controlador para traer todos los PaymentGateways filtrados por el campo idSite
  @Get('findAll')
  async findAllPaymentGateways(@Query('idSite') idSite: number) {
    console.log('idSite', idSite);
    try {
      return await this.paymentService.findAllPaymentGateways(idSite);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
