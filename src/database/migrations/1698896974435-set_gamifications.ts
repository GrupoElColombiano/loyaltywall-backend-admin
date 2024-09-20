import { MigrationInterface, QueryRunner } from "typeorm";

export class SetGamifications1698896974435 implements MigrationInterface {
    name = 'SetGamifications1698896974435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "corde"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "site" ADD "corde" character varying(255)`);
    }

}
