"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetUserPoints1703611500624 = void 0;
class SetUserPoints1703611500624 {
    constructor() {
        this.name = 'SetUserPoints1703611500624';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_points" ADD "points" integer NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_points" DROP COLUMN "points"`);
    }
}
exports.SetUserPoints1703611500624 = SetUserPoints1703611500624;
//# sourceMappingURL=1703611500624-set_user_points.js.map