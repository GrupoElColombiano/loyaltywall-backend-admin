import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserAdminEntity } from './entities/user.entity';
import { UsersService } from './users.service';
import { UserProfileController } from './profile/users.controller.profile';
import { UserProfileService } from './profile/users.service.profile';
import { RegisterlogModule } from 'src/registerlog/registerlog.module';
import { UserPlan } from 'src/common/entity/user-plan.entity';
import { UserPoints } from 'src/puntos_usuario/entity/user_points.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAdminEntity, UserPlan, UserPoints]), RegisterlogModule],
  controllers: [UsersController, UserProfileController],
  providers: [UsersService, UserProfileService],
})
export class UsersModule {}
