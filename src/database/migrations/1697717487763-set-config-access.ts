import { MigrationInterface, QueryRunner } from "typeorm";

export class SetConfigAccess1697717487763 implements MigrationInterface {
    name = 'SetConfigAccess1697717487763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categorys_access" DROP CONSTRAINT "FK_48df45f5d1640e58711c2758694"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" RENAME COLUMN "plansProductCategoryIdPlansProductCategory" TO "idPlansProductCategory"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" ADD CONSTRAINT "FK_a9b5e511f8c3ee9c993908f27df" FOREIGN KEY ("idPlansProductCategory") REFERENCES "PlansProductCategory"("idPlansProductCategory") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categorys_access" DROP CONSTRAINT "FK_a9b5e511f8c3ee9c993908f27df"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" RENAME COLUMN "idPlansProductCategory" TO "plansProductCategoryIdPlansProductCategory"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" ADD CONSTRAINT "FK_48df45f5d1640e58711c2758694" FOREIGN KEY ("plansProductCategoryIdPlansProductCategory") REFERENCES "PlansProductCategory"("idPlansProductCategory") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
