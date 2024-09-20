"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDb1691184574917 = void 0;
class SetDb1691184574917 {
    constructor() {
        this.name = 'SetDb1691184574917';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_3b16c8cc0f96ff966afd61660c3"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP CONSTRAINT "FK_cfe9c416caaabe7aa810b1eaa2a"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "idPlan" TO "idSite"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" RENAME COLUMN "sitesIdSite" TO "idSite"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_4f88577c3ca6126a27e06e96414" FOREIGN KEY ("idSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD CONSTRAINT "FK_b32e1b18700e9dc6e120160f086" FOREIGN KEY ("idSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP CONSTRAINT "FK_b32e1b18700e9dc6e120160f086"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_4f88577c3ca6126a27e06e96414"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" RENAME COLUMN "idSite" TO "sitesIdSite"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "idSite" TO "idPlan"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD CONSTRAINT "FK_cfe9c416caaabe7aa810b1eaa2a" FOREIGN KEY ("sitesIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_3b16c8cc0f96ff966afd61660c3" FOREIGN KEY ("idPlan") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.SetDb1691184574917 = SetDb1691184574917;
//# sourceMappingURL=1691184574917-set-db.js.map