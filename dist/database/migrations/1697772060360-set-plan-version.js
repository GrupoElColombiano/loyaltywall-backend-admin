"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPlanVersion1697772060360 = void 0;
class SetPlanVersion1697772060360 {
    constructor() {
        this.name = 'SetPlanVersion1697772060360';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "categorys_access_id_seq" OWNED BY "categorys_access"."id"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" ALTER COLUMN "id" SET DEFAULT nextval('"categorys_access_id_seq"')`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "categorys_access" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "categorys_access_id_seq"`);
    }
}
exports.SetPlanVersion1697772060360 = SetPlanVersion1697772060360;
//# sourceMappingURL=1697772060360-set-plan-version.js.map