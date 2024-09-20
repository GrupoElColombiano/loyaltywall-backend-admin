"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDb1691512677390 = void 0;
class SetDb1691512677390 {
    constructor() {
        this.name = 'SetDb1691512677390';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "idProduct" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "idCategory" integer NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "idCategory"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "idProduct"`);
    }
}
exports.SetDb1691512677390 = SetDb1691512677390;
//# sourceMappingURL=1691512677390-set-db.js.map