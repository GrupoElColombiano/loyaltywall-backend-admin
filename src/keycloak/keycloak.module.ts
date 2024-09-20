import { Module } from '@nestjs/common';
import { KeycloakService } from './KeycloakService';
import { KeycloakController } from './keycloak.controller';
import { HttpModule } from '@nestjs/axios';
import { CommonModule } from 'src/common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaywallModule } from 'src/common/entity/paywallModule.entity';
import { RolesModule } from 'src/roles/roles.module';
import { RegisterlogModule } from 'src/registerlog/registerlog.module';

@Module({
  imports: [
    HttpModule,
    CommonModule,
    RolesModule,
    TypeOrmModule.forFeature([
      PaywallModule
    ]),
    RegisterlogModule,
  ],
  providers: [KeycloakService],
  controllers: [KeycloakController],
})
export class KeycloakModule {}