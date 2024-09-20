import { MigrationInterface, QueryRunner } from "typeorm";

export class SetLog1704308704264 implements MigrationInterface {
    name = 'SetLog1704308704264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "roleId"`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "roleId" character varying`);
        await queryRunner.query(`ALTER TABLE "register_logs" ALTER COLUMN "ipAddress" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register_logs" ALTER COLUMN "ipAddress" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "roleId"`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "roleId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "register_logs" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "register_logs" ADD "userId" integer NOT NULL`);
    }

}
