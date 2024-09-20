import { MigrationInterface, QueryRunner } from "typeorm";

export class SetRate1695071390047 implements MigrationInterface {
    name = 'SetRate1695071390047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ALTER COLUMN "idCategory" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD CONSTRAINT "FK_a3d30d366b574eacb7e01374c15" FOREIGN KEY ("idCategory") REFERENCES "categories"("idCategory") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP CONSTRAINT "FK_a3d30d366b574eacb7e01374c15"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ALTER COLUMN "idCategory" SET NOT NULL`);
    }

}
