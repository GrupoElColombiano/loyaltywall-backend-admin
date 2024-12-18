import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { RegisterlogModule } from 'src/registerlog/registerlog.module';
import { AccessModulesModule } from 'src/access-modules/access-modules.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Category ]),
    RegisterlogModule,
    AccessModulesModule,
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
