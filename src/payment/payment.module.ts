import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentGateway } from './entity/payment.entity.entity';
import { PaymentTransaction } from './entity/payment-transactions.entity';
import { HttpModule } from '@nestjs/axios';
import { Subscription } from './entity/subscriptionsentity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentGateway, PaymentTransaction, Subscription]), HttpModule],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
