"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetConfigAccess1697717487763 = void 0;
class SetConfigAccess1697717487763 {
    constructor() {
        this.name = 'SetConfigAccess1697717487763';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "categorys_access" DROP CONSTRAINT "FK_48df45f5d1640e58711c2758694"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" RENAME COLUMN "plansProductCategoryIdPlansProductCategory" TO "idPlansProductCategory"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" ADD CONSTRAINT "FK_a9b5e511f8c3ee9c993908f27df" FOREIGN KEY ("idPlansProductCategory") REFERENCES "PlansProductCategory"("idPlansProductCategory") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "categorys_access" DROP CONSTRAINT "FK_a9b5e511f8c3ee9c993908f27df"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" RENAME COLUMN "idPlansProductCategory" TO "plansProductCategoryIdPlansProductCategory"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" ADD CONSTRAINT "FK_48df45f5d1640e58711c2758694" FOREIGN KEY ("plansProductCategoryIdPlansProductCategory") REFERENCES "PlansProductCategory"("idPlansProductCategory") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.SetConfigAccess1697717487763 = SetConfigAccess1697717487763;
//# sourceMappingURL=1697717487763-set-config-access.js.map