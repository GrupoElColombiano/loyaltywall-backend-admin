import { MigrationInterface, QueryRunner } from "typeorm";

export class SetVersionplanId1699453863680 implements MigrationInterface {
    name = 'SetVersionplanId1699453863680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "idVersionPlan"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "idVersionPlan" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "plan_versions" DROP COLUMN "idVersionPlan"`);
        await queryRunner.query(`ALTER TABLE "plan_versions" ADD "idVersionPlan" integer`);
    }

}
