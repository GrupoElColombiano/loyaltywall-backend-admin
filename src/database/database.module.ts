// typeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import config from '../config';
import { Module, Global } from '@nestjs/common';
//Instalar MongoDB con useFactory usando el ConfigService
import { MongooseModule } from '@nestjs/mongoose';

const mongoAWS =
  'mongodb://loyaltywall:loyaltywall@paywall.cluster-crnoqmebp3b3.us-east-1.docdb.amazonaws.com:27017/?replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false';
const mongoLocal =
  'mongodb+srv://deimar:LetsGoal123@cluster0.aofve.mongodb.net/?retryWrites=true&w=majority';
const dbNameAWS = 'loyaltywall';
const dbNameLocal = 'salgar-dorada-fc';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
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
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: mongoLocal,
        dbName: dbNameLocal,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env'], // Ubicación del archivo .env
    }),
  ],
  exports: [TypeOrmModule, ConfigModule, MongooseModule],
})
export class DatabaseModule {}

//set database AWS
