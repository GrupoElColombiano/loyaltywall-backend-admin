import { MigrationInterface, QueryRunner } from "typeorm";

export class SetDb1691184456498 implements MigrationInterface {
    name = 'SetDb1691184456498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_35c00517e74eb50de31c6c1b343"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "siteIdSite" TO "idPlan"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_3b16c8cc0f96ff966afd61660c3" FOREIGN KEY ("idPlan") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_3b16c8cc0f96ff966afd61660c3"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "idPlan" TO "siteIdSite"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_35c00517e74eb50de31c6c1b343" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
