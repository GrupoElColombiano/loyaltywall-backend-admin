import { Module } from '@nestjs/common';
import { RegisterlogService } from './registerlog.service';
import { RegisterlogController } from './registerlog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterLog } from './entity/register-log.entity';
import { PaymentTransaction } from './entity/payment-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterLog, PaymentTransaction])],
  providers: [RegisterlogService],
  controllers: [RegisterlogController],
  exports: [RegisterlogService],
})
export class RegisterlogModule {}
