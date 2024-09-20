"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetUserPlan1699620666412 = void 0;
class SetUserPlan1699620666412 {
    constructor() {
        this.name = 'SetUserPlan1699620666412';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "isActive" boolean`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "isActive"`);
    }
}
exports.SetUserPlan1699620666412 = SetUserPlan1699620666412;
//# sourceMappingURL=1699620666412-set_user_plan.js.map