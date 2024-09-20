import { MigrationInterface, QueryRunner } from "typeorm";

export class SetLogError1704310701711 implements MigrationInterface {
    name = 'SetLogError1704310701711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "error"`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "error" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "error"`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "error" character varying`);
    }

}
