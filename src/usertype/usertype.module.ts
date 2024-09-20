import { Module } from '@nestjs/common';
import { UsertypeService } from './usertype.service';
import { UsertypeController } from './usertype.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserType } from './entity/usertype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserType])],
  controllers: [UsertypeController],
  providers: [UsertypeService]
})
export class UsertypeModule {}
