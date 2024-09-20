"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetLog1704308704264 = void 0;
class SetLog1704308704264 {
    constructor() {
        this.name = 'SetLog1704308704264';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "roleId"`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "roleId" character varying`);
        await queryRunner.query(`ALTER TABLE "register_logs" ALTER COLUMN "ipAddress" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "register_logs" ALTER COLUMN "ipAddress" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "roleId"`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "roleId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "userId" integer NOT NULL`);
    }
}
exports.SetLog1704308704264 = SetLog1704308704264;
//# sourceMappingURL=1704308704264-set_log.js.map