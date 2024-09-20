// src/payment/payment.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentGateway } from './entity/payment.entity.entity';

@Injectable()
export class PaymentService {

  constructor(
    @InjectRepository(PaymentGateway)
    private readonly paymentGatewayRepository: Repository<PaymentGateway>,
  ) {}

  //Metodo para crear un nuevo PaymentGateway
  async createPaymentGateway(paymentGateway: any, idSite: any): Promise<PaymentGateway> {
    paymentGateway.idSite = idSite;
    /*
      {
  "apiKey": "edwdwedwed",
  "clientId": "your_evertec_client_id",
  "id": null,
  "idPayment": 1,
  "testMode": false
}
    */

    const paymentSave: any = {
      name: paymentGateway.name,
      clientId: paymentGateway.clientId,
      apiKey: paymentGateway.apiKey,
      id: paymentGateway.id || null,
      testMode: paymentGateway.testMode || false,
      isActive: paymentGateway.isActive || true,
      idSite,
    }
    console.log('Data del payment', paymentSave);
    return await this.paymentGatewayRepository.save(paymentSave)
  }

  //Metodo para editar un PaymentGateway
  async updatePaymentGateway(idSite: number){
    const paymentGateway = await this.paymentGatewayRepository.find({
      where: { idSite },
    });
    if (!paymentGateway) {
      throw new NotFoundException('PaymentGateway not found');
    }
    return await this.paymentGatewayRepository.save(paymentGateway);
  }

  //Metodo para traer todos los PaymentGateways filtrados por el campo idSite
  async findAllPaymentGateways(idSite: number): Promise<PaymentGateway[]> {
    return await this.paymentGatewayRepository.find({
      where: { idSite },
    });
  }
}
