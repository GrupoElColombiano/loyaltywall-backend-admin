import { MigrationInterface, QueryRunner } from "typeorm";

export class SetAccesModulePlanVer1698331260510 implements MigrationInterface {
    name = 'SetAccesModulePlanVer1698331260510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" DROP CONSTRAINT "FK_f9d191fcac07207aba34d2ab7c0"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" DROP COLUMN "paywallModuleActionRelationId"`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" ADD "active" boolean`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" ADD "rolePaywallModuleActionRelationId" integer`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" ADD CONSTRAINT "FK_6c75d1dca7f285f24f421889633" FOREIGN KEY ("rolePaywallModuleActionRelationId") REFERENCES "role_paywall_module_action_relation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" DROP CONSTRAINT "FK_6c75d1dca7f285f24f421889633"`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" DROP COLUMN "rolePaywallModuleActionRelationId"`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" ADD "paywallModuleActionRelationId" integer`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" ADD CONSTRAINT "FK_f9d191fcac07207aba34d2ab7c0" FOREIGN KEY ("paywallModuleActionRelationId") REFERENCES "paywall_module_action_relation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
