declare const _default: (() => {
    postgres: {
        dbName: string;
        user: string;
        password: string;
        host: string;
        port: number;
    };
    mailer: {
        host: string;
        port: number;
        user: string;
        pass: string;
        secure: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    postgres: {
        dbName: string;
        user: string;
        password: string;
        host: string;
        port: number;
    };
    mailer: {
        host: string;
        port: number;
        user: string;
        pass: string;
        secure: string;
    };
}>;
export default _default;
