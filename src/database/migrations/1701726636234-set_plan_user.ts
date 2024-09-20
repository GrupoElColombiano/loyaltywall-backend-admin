import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPlanUser1701726636234 implements MigrationInterface {
    name = 'SetPlanUser1701726636234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "date_init_plan" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "date_init_plan"`);
    }

}
