// TypeORM
import { TypeOrmModule } from '@nestjs/typeorm/dist';

import { Module } from '@nestjs/common';

import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';
import { Site } from './entities/site.entity';
import { PlansProductCategory } from 'src/common/entity/plans-products-categories.entity';
import { CategorysAccess } from 'src/common/entity/categorys-access.entity';
import { Category } from 'src/category/entity/category.entity';
import { Product } from 'src/product/entity/product.entity';
import { ClusterPenalization } from 'src/gamification/entities/cluster_penalization.entity';
import { UserPoints } from 'src/puntos_usuario/entity/user_points.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Site,
    PlansProductCategory,
    CategorysAccess,
    Category,
    Product,
    ClusterPenalization,
    UserPoints,
  ])],
  controllers: [SitesController],
  providers: [SitesService],
})
export class SitesModule {}
