"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetVersionplanId1699453863680 = void 0;
class SetVersionplanId1699453863680 {
    constructor() {
        this.name = 'SetVersionplanId1699453863680';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "idVersionPlan"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "idVersionPlan" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "idVersionPlan"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "idVersionPlan" integer`);
    }
}
exports.SetVersionplanId1699453863680 = SetVersionplanId1699453863680;
//# sourceMappingURL=1699453863680-set_versionplan_id.js.map