import { Module } from '@nestjs/common';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { KeycloakConfigService } from './keycloak-config.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'B0araNMhssgkcgFXgzYEMqsiOOF3ZmMT',
      signOptions: { expiresIn: '60s' }, // You can customize this
    }),
    KeycloakConnectModule.registerAsync({
      useClass: KeycloakConfigService, // This class provides Keycloak options
    }),
  ],
  providers: [
    KeycloakConfigService,
    JwtAuthGuard, // Provide your custom JWT guard
    {
      provide: 'APP_GUARD', // Apply the guard globally if needed
      useClass: JwtAuthGuard,
    },
  ],
  exports: [KeycloakConnectModule, JwtAuthGuard],
})
export class KeycloakModuleAuth {}