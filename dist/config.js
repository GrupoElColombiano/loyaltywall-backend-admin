"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        postgres: {
            dbName: process.env.POSTGRES_DB,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
        },
        mailer: {
            host: process.env.GMAIL_HOST,
            port: parseInt(process.env.GMAIL_PORT),
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
            secure: process.env.GMAIL_SECURE,
        },
    };
});
//# sourceMappingURL=config.js.map