import { MigrationInterface, QueryRunner } from "typeorm";

export class SetUserPlan1699620666412 implements MigrationInterface {
    name = 'SetUserPlan1699620666412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "isActive" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "isActive"`);
    }

}
