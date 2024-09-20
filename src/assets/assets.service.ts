import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Assets } from './entity/assets.entity';

@Injectable()
export class AssetsService {

  constructor(@InjectRepository(Assets) private assetsRepository: Repository<Assets> ){}

  async createAssets(assets: Express.Multer.File): Promise<any> {
    try {
      const newAssets = new Assets();
      newAssets.name = assets.originalname;
      newAssets.base64Data = assets.buffer.toString('base64');
      newAssets.type = assets.mimetype;
      newAssets.size = assets.size;

      return await this.assetsRepository.save(newAssets);
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }

  async findAll(): Promise<any> {
    try {
      const assets = await this.assetsRepository.find();
      return {
        statusCode: 200,
        message: 'Assets list',
        data: assets,
      };
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }
}
