import { MigrationInterface, QueryRunner } from "typeorm";

export class SetEventPoint1704213372092 implements MigrationInterface {
    name = 'SetEventPoint1704213372092'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" ADD "points" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ADD "event_repeats" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ADD "porcentual_value" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "porcentual_value"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "event_repeats"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "points"`);
    }

}
