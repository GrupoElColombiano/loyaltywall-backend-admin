import { MigrationInterface, QueryRunner } from "typeorm";

export class SetDb1691512677390 implements MigrationInterface {
    name = 'SetDb1691512677390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "idProduct" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "idCategory" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "idCategory"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "idProduct"`);
    }

}
