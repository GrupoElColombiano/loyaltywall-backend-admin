"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPlanTemplate1703741592264 = void 0;
class SetPlanTemplate1703741592264 {
    constructor() {
        this.name = 'SetPlanTemplate1703741592264';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "plan_template" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "id_template" character varying NOT NULL, "idPlan" integer, CONSTRAINT "PK_c3bbdf9c68025fd45022233ca9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "plan_template" ADD CONSTRAINT "FK_91a412130519cd641aba1cf4a91" FOREIGN KEY ("idPlan") REFERENCES "plans"("idPlan") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "plan_template" DROP CONSTRAINT "FK_91a412130519cd641aba1cf4a91"`);
        await queryRunner.query(`DROP TABLE "plan_template"`);
    }
}
exports.SetPlanTemplate1703741592264 = SetPlanTemplate1703741592264;
//# sourceMappingURL=1703741592264-set_plan_template.js.map