import { MigrationInterface, QueryRunner } from "typeorm";

export class SetExpirePointCorrection1697663478383 implements MigrationInterface {
    name = 'SetExpirePointCorrection1697663478383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP COLUMN "create_at"`);
    }

}
