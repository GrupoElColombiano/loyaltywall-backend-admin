import { MigrationInterface, QueryRunner } from "typeorm";

export class SetUserPoints1703600024874 implements MigrationInterface {
    name = 'SetUserPoints1703600024874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_points" ADD "system_date" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_points" DROP COLUMN "system_date"`);
    }

}
