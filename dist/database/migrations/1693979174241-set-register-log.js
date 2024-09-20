"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetRegisterLog1693979174241 = void 0;
class SetRegisterLog1693979174241 {
    constructor() {
        this.name = 'SetRegisterLog1693979174241';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "register_logs" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "roleId" integer NOT NULL, "activityType" character varying NOT NULL, "description" character varying NOT NULL, "affectedObject" character varying NOT NULL, "success" boolean NOT NULL, "ipAddress" character varying NOT NULL, "userAgent" character varying NOT NULL, "timestamp" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_04bca173f345acc5938d1086863" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "register_logs"`);
    }
}
exports.SetRegisterLog1693979174241 = SetRegisterLog1693979174241;
//# sourceMappingURL=1693979174241-set-register-log.js.map