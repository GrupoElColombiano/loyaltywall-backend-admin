import { MigrationInterface, QueryRunner } from "typeorm";

export class SetSitesPlan1693864975079 implements MigrationInterface {
    name = 'SetSitesPlan1693864975079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "plans" ADD "siteIdSite" integer`);
        await queryRunner.query(`ALTER TABLE "site" ADD "sitesPlanId" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD CONSTRAINT "FK_4d132f583b64fda89aaf1026124" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_65d5b0e46ec56af87f8fcb1c0a8" FOREIGN KEY ("sitesPlanId") REFERENCES "sites_plan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_65d5b0e46ec56af87f8fcb1c0a8"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP CONSTRAINT "FK_4d132f583b64fda89aaf1026124"`);
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "sitesPlanId"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "siteIdSite"`);
    }

}
