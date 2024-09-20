import { AppService } from './app.service';
import { I18nContext } from 'nestjs-i18n';
import { I18nTranslations, I18nPath } from './i18n/generated/i18n.generated';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getTranslation(i18n: I18nContext<I18nTranslations>): void;
}
export declare class ApiException extends Error {
    private readonly _args?;
    get translation(): I18nPath;
    get args(): any;
    constructor(key: I18nPath, _args?: any);
}
