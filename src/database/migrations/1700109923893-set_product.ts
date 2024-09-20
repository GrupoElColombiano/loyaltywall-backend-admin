import { MigrationInterface, QueryRunner } from "typeorm";

export class SetProduct1700109923893 implements MigrationInterface {
    name = 'SetProduct1700109923893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "all_product" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "all_product"`);
    }

}
