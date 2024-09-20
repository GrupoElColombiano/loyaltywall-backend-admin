import { MigrationInterface, QueryRunner } from "typeorm";

export class SetNewPlansFields1692824385127 implements MigrationInterface {
    name = 'SetNewPlansFields1692824385127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD "paywallModuleId" integer`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD CONSTRAINT "FK_4072d596466fdb1f515f53ddace" FOREIGN KEY ("paywallModuleId") REFERENCES "paywall_module"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP CONSTRAINT "FK_4072d596466fdb1f515f53ddace"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP COLUMN "paywallModuleId"`);
    }

}
