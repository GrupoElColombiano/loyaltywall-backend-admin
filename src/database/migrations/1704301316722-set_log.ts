import { MigrationInterface, QueryRunner } from "typeorm";

export class SetLog1704301316722 implements MigrationInterface {
    name = 'SetLog1704301316722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" ADD "points" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "error" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "error"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "points"`);
    }

}
