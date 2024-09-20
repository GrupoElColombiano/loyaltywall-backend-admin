"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetProduct1697063729794 = void 0;
class SetProduct1697063729794 {
    constructor() {
        this.name = 'SetProduct1697063729794';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ADD "planIdPlan" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_18ecb6f9dba5c4c691bc13fe1ed" FOREIGN KEY ("planIdPlan") REFERENCES "plans"("idPlan") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_18ecb6f9dba5c4c691bc13fe1ed"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "planIdPlan"`);
    }
}
exports.SetProduct1697063729794 = SetProduct1697063729794;
//# sourceMappingURL=1697063729794-set-product.js.map