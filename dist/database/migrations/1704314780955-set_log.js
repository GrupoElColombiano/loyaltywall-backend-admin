"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetLog1704314780955 = void 0;
class SetLog1704314780955 {
    constructor() {
        this.name = 'SetLog1704314780955';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "url" character varying`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "token" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "token"`);
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "url"`);
    }
}
exports.SetLog1704314780955 = SetLog1704314780955;
//# sourceMappingURL=1704314780955-set_log.js.map