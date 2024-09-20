"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetGamifications1697571726195 = void 0;
class SetGamifications1697571726195 {
    constructor() {
        this.name = 'SetGamifications1697571726195';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "point_value" ADD "id_site" integer`);
        await queryRunner.query(`ALTER TABLE "point_value" ADD CONSTRAINT "UQ_1a1e4bb75ae24b2f125353d36b3" UNIQUE ("id_site")`);
        await queryRunner.query(`ALTER TABLE "site" ADD "idPointValue" integer`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "UQ_6a4f2c06ad82432494fc37fe6a5" UNIQUE ("idPointValue")`);
        await queryRunner.query(`ALTER TABLE "point_value" ADD CONSTRAINT "FK_1a1e4bb75ae24b2f125353d36b3" FOREIGN KEY ("id_site") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_6a4f2c06ad82432494fc37fe6a5" FOREIGN KEY ("idPointValue") REFERENCES "point_value"("id_point_value") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_6a4f2c06ad82432494fc37fe6a5"`);
        await queryRunner.query(`ALTER TABLE "point_value" DROP CONSTRAINT "FK_1a1e4bb75ae24b2f125353d36b3"`);
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "UQ_6a4f2c06ad82432494fc37fe6a5"`);
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "idPointValue"`);
        await queryRunner.query(`ALTER TABLE "point_value" DROP CONSTRAINT "UQ_1a1e4bb75ae24b2f125353d36b3"`);
        await queryRunner.query(`ALTER TABLE "point_value" DROP COLUMN "id_site"`);
    }
}
exports.SetGamifications1697571726195 = SetGamifications1697571726195;
//# sourceMappingURL=1697571726195-set-gamifications.js.map