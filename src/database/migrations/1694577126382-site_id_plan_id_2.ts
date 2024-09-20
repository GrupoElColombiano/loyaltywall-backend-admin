import { MigrationInterface, QueryRunner } from "typeorm";

export class SiteIdPlanId21694577126382 implements MigrationInterface {
    name = 'SiteIdPlanId21694577126382'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sites_plan" ADD "idSite" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sites_plan" ADD "idPlan" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sites_plan" DROP COLUMN "idPlan"`);
        await queryRunner.query(`ALTER TABLE "sites_plan" DROP COLUMN "idSite"`);
    }

}
