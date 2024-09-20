import { MigrationInterface, QueryRunner } from "typeorm";

export class SetGamifications1697552209605 implements MigrationInterface {
    name = 'SetGamifications1697552209605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "points" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "event_repeats" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "porcentual_value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "porcentual_value" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "event_repeats" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "points" DROP DEFAULT`);
    }

}
