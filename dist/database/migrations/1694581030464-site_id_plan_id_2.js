"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteIdPlanId21694581030464 = void 0;
class SiteIdPlanId21694581030464 {
    constructor() {
        this.name = 'SiteIdPlanId21694581030464';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_65d5b0e46ec56af87f8fcb1c0a8"`);
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "sitesPlanId"`);
        await queryRunner.query(`ALTER TABLE "sites_plan" ADD CONSTRAINT "FK_16d55ffcf18035483827999eb46" FOREIGN KEY ("idSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sites_plan" ADD CONSTRAINT "FK_d573c9d22b79eaff482c57cf48c" FOREIGN KEY ("idPlan") REFERENCES "plans"("idPlan") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "sites_plan" DROP CONSTRAINT "FK_d573c9d22b79eaff482c57cf48c"`);
        await queryRunner.query(`ALTER TABLE "sites_plan" DROP CONSTRAINT "FK_16d55ffcf18035483827999eb46"`);
        await queryRunner.query(`ALTER TABLE "site" ADD "sitesPlanId" integer`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_65d5b0e46ec56af87f8fcb1c0a8" FOREIGN KEY ("sitesPlanId") REFERENCES "sites_plan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.SiteIdPlanId21694581030464 = SiteIdPlanId21694581030464;
//# sourceMappingURL=1694581030464-site_id_plan_id_2.js.map