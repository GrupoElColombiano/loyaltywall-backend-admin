import { MigrationInterface, QueryRunner } from "typeorm";

export class SetLog1704314780955 implements MigrationInterface {
    name = 'SetLog1704314780955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "url" character varying`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "token" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "token"`);
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "url"`);
    }

}
