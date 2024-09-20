/// <reference types="multer" />
import { AssetsService } from './assets.service';
export declare class AssetsController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
    createImage(image: Express.Multer.File): Promise<any>;
    findAll(): Promise<any>;
}
