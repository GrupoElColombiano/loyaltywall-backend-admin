import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPlanVersion1697772060360 implements MigrationInterface {
    name = 'SetPlanVersion1697772060360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "categorys_access_id_seq" OWNED BY "categorys_access"."id"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" ALTER COLUMN "id" SET DEFAULT nextval('"categorys_access_id_seq"')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categorys_access" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "categorys_access_id_seq"`);
    }

}
