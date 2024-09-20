import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPlanUser1701725925091 implements MigrationInterface {
    name = 'SetPlanUser1701725925091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "id_verson_plan"`);
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "is_active" boolean`);
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "id_version" character varying`);
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "id_user"`);
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "id_user" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "id_user"`);
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "id_user" text`);
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "id_version"`);
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "id_verson_plan" text`);
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "isActive" boolean`);
    }

}
