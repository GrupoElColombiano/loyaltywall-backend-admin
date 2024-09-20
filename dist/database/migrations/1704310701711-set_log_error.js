"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetLogError1704310701711 = void 0;
class SetLogError1704310701711 {
    constructor() {
        this.name = 'SetLogError1704310701711';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "error"`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "error" jsonb`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "error"`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "error" character varying`);
    }
}
exports.SetLogError1704310701711 = SetLogError1704310701711;
//# sourceMappingURL=1704310701711-set_log_error.js.map