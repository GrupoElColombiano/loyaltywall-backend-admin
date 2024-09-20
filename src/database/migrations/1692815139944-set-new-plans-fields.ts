import { MigrationInterface, QueryRunner } from "typeorm";

export class SetNewPlansFields1692815139944 implements MigrationInterface {
    name = 'SetNewPlansFields1692815139944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP COLUMN "paywall_module_id"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD "isActive" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD "paywallModuleId" integer`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD "role" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD "role" integer`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" ADD "role" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP COLUMN "paywallModuleId"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD "paywall_module_id" integer`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD "status" integer NOT NULL`);
    }

}
