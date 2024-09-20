"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPlanVersion1697748634692 = void 0;
class SetPlanVersion1697748634692 {
    constructor() {
        this.name = 'SetPlanVersion1697748634692';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "idPlan"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "userType"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "typeDuration"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "rate"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "renewalRate"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "isSpecialRateActive"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "specialRate"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "renewalSpecialRate"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "startDate"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "endDate"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "originalVersionIdPlan" integer`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD CONSTRAINT "FK_614e3f7528a08fb8f4d031925af" FOREIGN KEY ("originalVersionIdPlan") REFERENCES "plans"("idPlan") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP CONSTRAINT "FK_614e3f7528a08fb8f4d031925af"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "originalVersionIdPlan"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "endDate" date`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "startDate" date`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "renewalSpecialRate" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "specialRate" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "isSpecialRateActive" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "renewalRate" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "rate" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "duration" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "typeDuration" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "time" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "isActive" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "userType" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "idPlan" integer NOT NULL`);
    }
}
exports.SetPlanVersion1697748634692 = SetPlanVersion1697748634692;
//# sourceMappingURL=1697748634692-set-plan-version.js.map