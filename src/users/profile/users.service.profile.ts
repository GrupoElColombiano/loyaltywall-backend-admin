import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Injectable, NotFoundException } from '@nestjs/common';
import { UserAdminEntity } from '../entities/user.entity';
import { UpdateUserPasswordDto } from '../dto/update-user.dto';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(UserAdminEntity)
    private userRepo: Repository<UserAdminEntity>,
  ) {}

  async updatePassword(
    id: number,
    updateUserPasswordDto: UpdateUserPasswordDto,
  ) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    // user.password = updateUserPasswordDto.password;
    return this.userRepo.save(user);
  }
}
