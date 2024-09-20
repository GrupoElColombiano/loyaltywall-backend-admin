import { MigrationInterface, QueryRunner } from "typeorm";

export class SetDb1691515083659 implements MigrationInterface {
    name = 'SetDb1691515083659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "PlansProductCategory_idPlansProductCategory_seq" OWNED BY "PlansProductCategory"."idPlansProductCategory"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ALTER COLUMN "idPlansProductCategory" SET DEFAULT nextval('"PlansProductCategory_idPlansProductCategory_seq"')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ALTER COLUMN "idPlansProductCategory" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "PlansProductCategory_idPlansProductCategory_seq"`);
    }

}
