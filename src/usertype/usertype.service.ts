import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from './entity/usertype.entity';

@Injectable()
export class UsertypeService {

  constructor(@InjectRepository(UserType) private readonly userTypeRepository: Repository<UserType>){}

  async create(userType: any): Promise<UserType> {
    try {
      console.log(userType);
      return await this.userTypeRepository.save(userType);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findUserType(): Promise<UserType[]> {
    try {
      const userType = await this.userTypeRepository.find();
      return userType;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

}
