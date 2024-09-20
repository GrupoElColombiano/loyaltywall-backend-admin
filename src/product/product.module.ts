import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Category } from 'src/category/entity/category.entity';
import { RegisterlogModule } from 'src/registerlog/registerlog.module';
import { AccessModulesModule } from 'src/access-modules/access-modules.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Category]),
    RegisterlogModule,
    AccessModulesModule,
    ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
