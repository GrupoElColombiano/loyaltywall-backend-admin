import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPlanTemplate1703741592264 implements MigrationInterface {
    name = 'SetPlanTemplate1703741592264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "plan_template" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "id_template" character varying NOT NULL, "idPlan" integer, CONSTRAINT "PK_c3bbdf9c68025fd45022233ca9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "plan_template" ADD CONSTRAINT "FK_91a412130519cd641aba1cf4a91" FOREIGN KEY ("idPlan") REFERENCES "plans"("idPlan") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "plan_template" DROP CONSTRAINT "FK_91a412130519cd641aba1cf4a91"`);
        await queryRunner.query(`DROP TABLE "plan_template"`);
    }

}
