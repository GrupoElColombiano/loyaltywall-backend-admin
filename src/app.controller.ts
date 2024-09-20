import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public, Resource, Roles, Scopes, Unprotected } from 'nest-keycloak-connect';

//Documentation

import { ApiTags, ApiOperation } from '@nestjs/swagger';

//I18n
import { I18n, I18nContext } from 'nestjs-i18n';
import { I18nTranslations, I18nPath } from './i18n/generated/i18n.generated';

@ApiTags('MAIN')
@Controller()
@Unprotected()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Main' })
  getHello(): string {
    return this.appService.getHello();
  }

  // i18n example to translate hello
  @Get()
  getTranslation(@I18n() i18n: I18nContext<I18nTranslations>) {
    // return i18n.t('test.HELLO');
  }
}

// i18n Exceptions translate
export class ApiException extends Error {
  get translation(): I18nPath {
    return this.message as I18nPath;
  }

  get args(): any {
    return this._args;
  }

  constructor(
    key: I18nPath,
    private readonly _args?: any,
  ) {
    super(key);
  }
}
