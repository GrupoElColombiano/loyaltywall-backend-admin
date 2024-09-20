"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDb1691184456498 = void 0;
class SetDb1691184456498 {
    constructor() {
        this.name = 'SetDb1691184456498';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_35c00517e74eb50de31c6c1b343"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "siteIdSite" TO "idPlan"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_3b16c8cc0f96ff966afd61660c3" FOREIGN KEY ("idPlan") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_3b16c8cc0f96ff966afd61660c3"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "idPlan" TO "siteIdSite"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_35c00517e74eb50de31c6c1b343" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.SetDb1691184456498 = SetDb1691184456498;
//# sourceMappingURL=1691184456498-set-db.js.map