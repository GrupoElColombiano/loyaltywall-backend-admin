"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const assets_entity_1 = require("./entity/assets.entity");
let AssetsService = exports.AssetsService = class AssetsService {
    constructor(assetsRepository) {
        this.assetsRepository = assetsRepository;
    }
    async createAssets(assets) {
        try {
            const newAssets = new assets_entity_1.Assets();
            newAssets.name = assets.originalname;
            newAssets.base64Data = assets.buffer.toString('base64');
            newAssets.type = assets.mimetype;
            newAssets.size = assets.size;
            return await this.assetsRepository.save(newAssets);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async findAll() {
        try {
            const assets = await this.assetsRepository.find();
            return {
                statusCode: 200,
                message: 'Assets list',
                data: assets,
            };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
exports.AssetsService = AssetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(assets_entity_1.Assets)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AssetsService);
//# sourceMappingURL=assets.service.js.map