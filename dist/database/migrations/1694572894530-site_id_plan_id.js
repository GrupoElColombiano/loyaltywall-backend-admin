"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteIdPlanId1694572894530 = void 0;
class SiteIdPlanId1694572894530 {
    constructor() {
        this.name = 'SiteIdPlanId1694572894530';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "plans" ADD "idSite" integer`);
        await queryRunner.query(`ALTER TABLE "site" ADD "sitesPlanId" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD CONSTRAINT "FK_a58b4d5e0d2a96b339f53c7ee1a" FOREIGN KEY ("idSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_65d5b0e46ec56af87f8fcb1c0a8" FOREIGN KEY ("sitesPlanId") REFERENCES "sites_plan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_65d5b0e46ec56af87f8fcb1c0a8"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP CONSTRAINT "FK_a58b4d5e0d2a96b339f53c7ee1a"`);
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "sitesPlanId"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "idSite"`);
    }
}
exports.SiteIdPlanId1694572894530 = SiteIdPlanId1694572894530;
//# sourceMappingURL=1694572894530-site_id_plan_id.js.map