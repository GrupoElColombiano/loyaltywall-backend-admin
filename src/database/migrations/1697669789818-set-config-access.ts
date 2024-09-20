import { MigrationInterface, QueryRunner } from "typeorm";

export class SetConfigAccess1697669789818 implements MigrationInterface {
    name = 'SetConfigAccess1697669789818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP CONSTRAINT "FK_d308f091ca9ae02c6ec4d2b63ad"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" ADD "plansProductCategoryIdPlansProductCategory" integer`);
        await queryRunner.query(`ALTER TABLE "categorys_access" ADD CONSTRAINT "FK_48df45f5d1640e58711c2758694" FOREIGN KEY ("plansProductCategoryIdPlansProductCategory") REFERENCES "PlansProductCategory"("idPlansProductCategory") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categorys_access" DROP CONSTRAINT "FK_48df45f5d1640e58711c2758694"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" DROP COLUMN "plansProductCategoryIdPlansProductCategory"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "id" integer`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD CONSTRAINT "FK_d308f091ca9ae02c6ec4d2b63ad" FOREIGN KEY ("id") REFERENCES "categorys_access"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
