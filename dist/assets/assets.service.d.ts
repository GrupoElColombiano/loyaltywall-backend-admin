/// <reference types="multer" />
import { Repository } from 'typeorm';
import { Assets } from './entity/assets.entity';
export declare class AssetsService {
    private assetsRepository;
    constructor(assetsRepository: Repository<Assets>);
    createAssets(assets: Express.Multer.File): Promise<any>;
    findAll(): Promise<any>;
}
