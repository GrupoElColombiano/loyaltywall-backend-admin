// Config env variables
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './enviroments';
import config from './config';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SitesModule } from './sites/sites.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { DatabaseModule } from './database/database.module';
import { MailModule } from './mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import { ProductModule } from './product/product.module';
import { PlansModule } from './plans/plans.module';
import { UsertypeModule } from './usertype/usertype.module';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { CommonModule } from './common/common.module';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { KeycloakConfigService } from './auth/keycloak-config.service';
import { KeycloakModule } from './keycloak/keycloak.module';
import { AccessModulesModule } from './access-modules/access-modules.module';
import { TemplateManagerModule } from './template-manager/template-manager.module';
import { RegisterlogModule } from './registerlog/registerlog.module';
import { GamificationModule } from './gamification/gamification.module';
import { AssetsModule } from './assets/assets.module';
import { PuntosUsuarioModule } from './puntos_usuario/puntos_usuario.module';
import { PaywallModule } from './paywall/paywall.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    // JwtModule.register({
    //   secret: 'secret',
    //   signOptions: { expiresIn: '1h' },
    // }),
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [AuthModule],
    }),
    UsersModule,
    SitesModule,
    AuthModule,
    RolesModule,
    DatabaseModule,
    MailModule,
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: join(__dirname, '/i18n/'),
        watch: true,
      },
      typesOutputPath: join(
        __dirname,
        '../src/i18n/generated/i18n.generated.ts',
      ),
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
    }),
    ProductModule,
    PlansModule,
    UsertypeModule,
    CategoryModule,
    CommonModule,
    KeycloakModule,
    AccessModulesModule,
    TemplateManagerModule,
    RegisterlogModule,
    GamificationModule,
    AssetsModule,
    PuntosUsuarioModule,
    PaywallModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
