import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {
  I18nValidationExceptionFilter,
  I18nValidationPipe,
  i18nValidationErrorFactory,
} from 'nestjs-i18n';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('LOYALTYWALL ADMIN API')
    .setDescription('API FOR LOYALTY WALL ADMINISTRATION PANEL')
    .setVersion('1.0')
    // .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  /*
  app.enableCors({
    origin: [
      'http://stage.qhubobogota.com'
      // ...otros sitios permitidos
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
*/
  app.useGlobalPipes(
    new I18nValidationPipe(),
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.useGlobalFilters(
    new I18nValidationExceptionFilter({
      detailedErrors: false,
    }),
  );
  // await app.listen(180); // DEV PORT
  await app.listen(80); // PROD PORT
}
bootstrap();
