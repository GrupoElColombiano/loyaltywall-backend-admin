import { MigrationInterface, QueryRunner } from "typeorm";

export class SetGamifications1698896912834 implements MigrationInterface {
    name = 'SetGamifications1698896912834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "site" ADD "corde" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "corde"`);
    }

}
