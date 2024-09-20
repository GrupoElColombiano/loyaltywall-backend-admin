import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assets } from './entity/assets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assets])],
  providers: [AssetsService],
  controllers: [AssetsController]
})
export class AssetsModule {}
