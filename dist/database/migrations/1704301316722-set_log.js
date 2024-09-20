"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetLog1704301316722 = void 0;
class SetLog1704301316722 {
    constructor() {
        this.name = 'SetLog1704301316722';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" ADD "points" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "error" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "error"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "points"`);
    }
}
exports.SetLog1704301316722 = SetLog1704301316722;
//# sourceMappingURL=1704301316722-set_log.js.map