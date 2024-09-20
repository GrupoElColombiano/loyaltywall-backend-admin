import { Path } from "nestjs-i18n";
export type I18nTranslations = {
    "events": {
        "hello": string;
    };
    "test": {
        "HELLO": string;
        "createSite": string;
        "ContentTextSendCode1": string;
        "ContentTextSendCode2": string;
    };
    "validation": {
        "IS_STRING": string;
        "NOT_EMPTY": string;
        "IS_URL": string;
        "IS_BOOLEAN": string;
    };
};
export type I18nPath = Path<I18nTranslations>;
