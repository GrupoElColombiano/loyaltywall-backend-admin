"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const config_2 = require("../config");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoAWS = 'mongodb://loyaltywall:loyaltywall@paywall.cluster-crnoqmebp3b3.us-east-1.docdb.amazonaws.com:27017/?replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false';
const mongoLocal = 'mongodb+srv://deimar:LetsGoal123@cluster0.aofve.mongodb.net/?retryWrites=true&w=majority';
const dbNameAWS = 'loyaltywall';
const dbNameLocal = 'salgar-dorada-fc';
let DatabaseModule = exports.DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_2.default.KEY],
                useFactory: (configService) => {
                    const { user, host, dbName, password, port } = configService.postgres;
                    return {
                        type: 'postgres',
                        username: user,
                        host,
                        database: dbName,
                        password,
                        port,
                        synchronize: false,
                        autoLoadEntities: true,
                    };
                },
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    uri: mongoLocal,
                    dbName: dbNameLocal,
                }),
                inject: [config_1.ConfigService],
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env'],
            }),
        ],
        exports: [typeorm_1.TypeOrmModule, config_1.ConfigModule, mongoose_1.MongooseModule],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map