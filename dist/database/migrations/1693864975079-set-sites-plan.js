"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetSitesPlan1693864975079 = void 0;
class SetSitesPlan1693864975079 {
    constructor() {
        this.name = 'SetSitesPlan1693864975079';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "plans" ADD "siteIdSite" integer`);
        await queryRunner.query(`ALTER TABLE "site" ADD "sitesPlanId" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD CONSTRAINT "FK_4d132f583b64fda89aaf1026124" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_65d5b0e46ec56af87f8fcb1c0a8" FOREIGN KEY ("sitesPlanId") REFERENCES "sites_plan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_65d5b0e46ec56af87f8fcb1c0a8"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP CONSTRAINT "FK_4d132f583b64fda89aaf1026124"`);
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "sitesPlanId"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "siteIdSite"`);
    }
}
exports.SetSitesPlan1693864975079 = SetSitesPlan1693864975079;
//# sourceMappingURL=1693864975079-set-sites-plan.js.map