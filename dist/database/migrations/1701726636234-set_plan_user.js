"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPlanUser1701726636234 = void 0;
class SetPlanUser1701726636234 {
    constructor() {
        this.name = 'SetPlanUser1701726636234';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "date_init_plan" TIMESTAMP`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "date_init_plan"`);
    }
}
exports.SetPlanUser1701726636234 = SetPlanUser1701726636234;
//# sourceMappingURL=1701726636234-set_plan_user.js.map