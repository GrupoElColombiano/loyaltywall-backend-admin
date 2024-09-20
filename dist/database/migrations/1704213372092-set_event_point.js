"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEventPoint1704213372092 = void 0;
class SetEventPoint1704213372092 {
    constructor() {
        this.name = 'SetEventPoint1704213372092';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" ADD "points" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ADD "event_repeats" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ADD "porcentual_value" integer NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "porcentual_value"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "event_repeats"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "points"`);
    }
}
exports.SetEventPoint1704213372092 = SetEventPoint1704213372092;
//# sourceMappingURL=1704213372092-set_event_point.js.map