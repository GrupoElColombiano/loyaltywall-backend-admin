import { MigrationInterface, QueryRunner } from "typeorm";

export class SetNewPlansFields1692822538207 implements MigrationInterface {
    name = 'SetNewPlansFields1692822538207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP COLUMN "paywallModuleId"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" ADD "role" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ALTER COLUMN "role" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ALTER COLUMN "isActive" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ALTER COLUMN "isActive" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ALTER COLUMN "role" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD "paywallModuleId" integer`);
    }

}
