"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteIdPlanId21694577126382 = void 0;
class SiteIdPlanId21694577126382 {
    constructor() {
        this.name = 'SiteIdPlanId21694577126382';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "sites_plan" ADD "idSite" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sites_plan" ADD "idPlan" integer NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "sites_plan" DROP COLUMN "idPlan"`);
        await queryRunner.query(`ALTER TABLE "sites_plan" DROP COLUMN "idSite"`);
    }
}
exports.SiteIdPlanId21694577126382 = SiteIdPlanId21694577126382;
//# sourceMappingURL=1694577126382-site_id_plan_id_2.js.map