import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAdminEntity } from './entities/user.entity';
import { CreateUserAdminDto } from './dto/create-user.dto';
import { hashPassword } from 'src/utils/hash-password';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
import { UserPlan } from 'src/common/entity/user-plan.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserAdminEntity)
    private readonly userRepo: Repository<UserAdminEntity>,
    @InjectRepository(UserPlan)
    private readonly userPlanRepo: Repository<UserPlan>,
    private readonly registerLogService: RegisterlogService,
  ) {}

  async createUser(createUserAdminDto: any) {
    //Si el usuario existe, retornar un ok, si no existe, crearlo
    const { idKeycloak, email } = createUserAdminDto;

    console.log('createUserAdminDto', createUserAdminDto);
    const user = await this.userRepo.findOne({ where: { idKeycloak } });
    if (user) {
      return { message: 'User already exists' };
    }

    const newUser = await this.userRepo.create(createUserAdminDto);

    return await this.userRepo.save(newUser);
  }

  async getAllUser(page: number, limit: number, body: any) {
    const { idKeycloak, email } = body;
    try {
      const queryBuilder = await this.userRepo.createQueryBuilder('user');

      if (idKeycloak) {
        queryBuilder.andWhere('user.idKeycloak = :idKeycloak', {
          idKeycloak,
        });
      }

      if (email) {
        queryBuilder.andWhere('user.email = :email', { email });
      }

      const [result, total] = await queryBuilder
        .take(limit)
        .skip((page - 1) * limit)
        .getManyAndCount();

      return { result, total };
    }
    catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getUserPlanByIdKeycloak(idKeycloak: string) {
    try {
      const queryBuilder = await this.userRepo.createQueryBuilder('user');

      if (idKeycloak) {
        queryBuilder.andWhere('user.idKeycloak = :idKeycloak', {
          idKeycloak,
        });
      }

      const result = await queryBuilder.getOne();

      return {
        message: 'Usuario',
        result,
      };
    }
    catch (error) {
      throw new BadRequestException(error.message);
    }
  }

}
