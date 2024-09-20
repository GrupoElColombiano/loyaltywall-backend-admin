"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetSitesPlan1693863038003 = void 0;
class SetSitesPlan1693863038003 {
    constructor() {
        this.name = 'SetSitesPlan1693863038003';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "sites_plan" ("id" SERIAL NOT NULL, CONSTRAINT "PK_2401716a48763f3d70c04d8b178" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "sites_plan"`);
    }
}
exports.SetSitesPlan1693863038003 = SetSitesPlan1693863038003;
//# sourceMappingURL=1693863038003-set-sites-plan.js.map