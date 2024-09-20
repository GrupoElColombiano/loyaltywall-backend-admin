import { MigrationInterface, QueryRunner } from "typeorm";

export class SetProduct1697063729794 implements MigrationInterface {
    name = 'SetProduct1697063729794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "planIdPlan" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_18ecb6f9dba5c4c691bc13fe1ed" FOREIGN KEY ("planIdPlan") REFERENCES "plans"("idPlan") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_18ecb6f9dba5c4c691bc13fe1ed"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "planIdPlan"`);
    }

}
