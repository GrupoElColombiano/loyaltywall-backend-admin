import { MigrationInterface, QueryRunner } from "typeorm";

export class SetSitesPlan1693863038003 implements MigrationInterface {
    name = 'SetSitesPlan1693863038003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sites_plan" ("id" SERIAL NOT NULL, CONSTRAINT "PK_2401716a48763f3d70c04d8b178" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sites_plan"`);
    }

}
