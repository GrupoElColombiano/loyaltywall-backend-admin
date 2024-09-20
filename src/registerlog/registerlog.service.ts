import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterLog } from './entity/register-log.entity';
import { PaymentTransaction } from './entity/payment-log.entity';

@Injectable()
export class RegisterlogService {

  constructor(
    @InjectRepository(RegisterLog)
    private readonly registerLogRepository: Repository<RegisterLog>,
    @InjectRepository(PaymentTransaction)
    private readonly paymentTransactionRepository: Repository<PaymentTransaction>,
  ) { }

  async create(registerLog: RegisterLog): Promise<RegisterLog> {
    try {
      return await this.registerLogRepository.save(registerLog);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async createPaymentTransaction(paymentTransaction: PaymentTransaction): Promise<PaymentTransaction> {
    try {
      return await this.paymentTransactionRepository.save(paymentTransaction);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // Método findAll que filtra por affectedObject de la tabla register_logs
  async findAll(registerLogDto: any): Promise<any> {
    const { affectedObject } = registerLogDto;
    try {
      let queryBuilder = this.registerLogRepository.createQueryBuilder('registerLog');

      // Si se proporciona un affectedObject, aplicar el filtro
      if (affectedObject) {
        queryBuilder = queryBuilder.where('registerLog.affectedObject = :affectedObject', { affectedObject })
        //Que el id sea mayor a 302
        .andWhere('registerLog.id > :id', { id: 325 })
      }

      const registerLogs = await queryBuilder.getMany();

      return {
        totoal_log: registerLogs.length,
        registerLogs,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // Método findAllPaymentTransaction que filtra por nombre de pasarela de pago
  async findAllPaymentTransaction(query: any, idSite:any): Promise<any> {
    const { name, payment } = query;
    console.log('query', query)
    try {
      let queryBuilder = this.paymentTransactionRepository.createQueryBuilder('paymentTransaction')
      .leftJoinAndSelect('paymentTransaction.gateway', 'gateway')

        //Filtrar por idSite
        queryBuilder = queryBuilder.where('paymentTransaction.idSite = :idSite', { idSite });

      // Si se proporciona un nombre, aplicar el filtro
      if (name) {
        queryBuilder = queryBuilder.where('paymentTransaction.name = :name', { name });
      }

      if(payment){
        queryBuilder = queryBuilder.where('paymentTransaction.gateway_id = :payment', { payment });
      }

      const paymentTransactions = await queryBuilder.getMany();
      console.log('paymentTransactions', paymentTransactions)

      return paymentTransactions;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(id: any): Promise<RegisterLog> {
    try {
      return await this.registerLogRepository.findOne(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
