"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetRate1695071390047 = void 0;
class SetRate1695071390047 {
    constructor() {
        this.name = 'SetRate1695071390047';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ALTER COLUMN "idCategory" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD CONSTRAINT "FK_a3d30d366b574eacb7e01374c15" FOREIGN KEY ("idCategory") REFERENCES "categories"("idCategory") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP CONSTRAINT "FK_a3d30d366b574eacb7e01374c15"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ALTER COLUMN "idCategory" SET NOT NULL`);
    }
}
exports.SetRate1695071390047 = SetRate1695071390047;
//# sourceMappingURL=1695071390047-set-rate.js.map