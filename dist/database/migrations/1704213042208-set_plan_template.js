"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPlanTemplate1704213042208 = void 0;
class SetPlanTemplate1704213042208 {
    constructor() {
        this.name = 'SetPlanTemplate1704213042208';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "points"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "event_repeats"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "porcentual_value"`);
        await queryRunner.query(`ALTER TABLE "plan_template" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "plan_template" ALTER COLUMN "updated_at" SET DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "plan_template" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "plan_template" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "event" ADD "porcentual_value" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ADD "event_repeats" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ADD "points" integer NOT NULL DEFAULT '0'`);
    }
}
exports.SetPlanTemplate1704213042208 = SetPlanTemplate1704213042208;
//# sourceMappingURL=1704213042208-set_plan_template.js.map