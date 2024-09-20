import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPlanTemplate1704213042208 implements MigrationInterface {
    name = 'SetPlanTemplate1704213042208'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "points"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "event_repeats"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "porcentual_value"`);
        await queryRunner.query(`ALTER TABLE "plan_template" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "plan_template" ALTER COLUMN "updated_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "plan_template" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "plan_template" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "event" ADD "porcentual_value" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ADD "event_repeats" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ADD "points" integer NOT NULL DEFAULT '0'`);
    }

}
