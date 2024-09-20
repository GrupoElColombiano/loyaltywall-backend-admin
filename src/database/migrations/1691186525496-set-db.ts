import { MigrationInterface, QueryRunner } from "typeorm";

export class SetDb1691186525496 implements MigrationInterface {
    name = 'SetDb1691186525496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_d1f695b7b6024f9de5be0ddb8eb"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_b3351b0fd1acbaa06953535b8c4"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "siteIdSite"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "productIdProduct"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "idSite" integer`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "idProduct" integer`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_2c2b0e50a64530b0efebb9815f0" FOREIGN KEY ("idSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_b50a7fb7ec0fb1cf1a7bee1468e" FOREIGN KEY ("idProduct") REFERENCES "product"("idProduct") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_b50a7fb7ec0fb1cf1a7bee1468e"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_2c2b0e50a64530b0efebb9815f0"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "idProduct"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "idSite"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "productIdProduct" integer`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "siteIdSite" integer`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_b3351b0fd1acbaa06953535b8c4" FOREIGN KEY ("productIdProduct") REFERENCES "product"("idProduct") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_d1f695b7b6024f9de5be0ddb8eb" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
