import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { KeycloakConfigService } from './keycloak-config.service';
import { RegisterlogModule } from 'src/registerlog/registerlog.module';

@Module({
  imports: [
    RegisterlogModule
  ],
  controllers: [AuthController],
  providers: [AuthService,
    KeycloakConfigService
  ],
  exports:[KeycloakConfigService]
})
export class AuthModule {}
