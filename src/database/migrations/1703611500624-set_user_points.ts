import { MigrationInterface, QueryRunner } from "typeorm";

export class SetUserPoints1703611500624 implements MigrationInterface {
    name = 'SetUserPoints1703611500624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_points" ADD "points" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_points" DROP COLUMN "points"`);
    }

}
