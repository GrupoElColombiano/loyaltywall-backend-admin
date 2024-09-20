"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetGamifications1697552209605 = void 0;
class SetGamifications1697552209605 {
    constructor() {
        this.name = 'SetGamifications1697552209605';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "points" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "event_repeats" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "porcentual_value" SET DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "porcentual_value" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "event_repeats" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "points" DROP DEFAULT`);
    }
}
exports.SetGamifications1697552209605 = SetGamifications1697552209605;
//# sourceMappingURL=1697552209605-set-gamifications.js.map