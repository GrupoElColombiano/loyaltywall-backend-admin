import { Controller, Post, Get, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AssetsService } from './assets.service';
import { Public } from 'nest-keycloak-connect';

@Controller('assets')
export class AssetsController {

  constructor(private readonly assetsService: AssetsService) { }

  @Public(true)
  @Post('image')
  @UseInterceptors(FileInterceptor('image'))
  async createImage(@UploadedFile() image: Express.Multer.File) {
    console.log('image', image);
    return await this.assetsService.createAssets(image);
  }

  @Public(true)
  @Get('image/list')
  async findAll() {
    return await this.assetsService.findAll();
  }

}
