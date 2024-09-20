"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetUserPoints1703600024874 = void 0;
class SetUserPoints1703600024874 {
    constructor() {
        this.name = 'SetUserPoints1703600024874';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_points" ADD "system_date" TIMESTAMP NOT NULL DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_points" DROP COLUMN "system_date"`);
    }
}
exports.SetUserPoints1703600024874 = SetUserPoints1703600024874;
//# sourceMappingURL=1703600024874-set_user_points.js.map