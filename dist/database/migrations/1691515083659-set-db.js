"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDb1691515083659 = void 0;
class SetDb1691515083659 {
    constructor() {
        this.name = 'SetDb1691515083659';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "PlansProductCategory_idPlansProductCategory_seq" OWNED BY "PlansProductCategory"."idPlansProductCategory"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ALTER COLUMN "idPlansProductCategory" SET DEFAULT nextval('"PlansProductCategory_idPlansProductCategory_seq"')`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ALTER COLUMN "idPlansProductCategory" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "PlansProductCategory_idPlansProductCategory_seq"`);
    }
}
exports.SetDb1691515083659 = SetDb1691515083659;
//# sourceMappingURL=1691515083659-set-db.js.map