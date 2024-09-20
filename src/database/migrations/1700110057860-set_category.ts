import { MigrationInterface, QueryRunner } from "typeorm";

export class SetCategory1700110057860 implements MigrationInterface {
    name = 'SetCategory1700110057860'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD "is_accessible_for_free" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "is_accessible_for_free"`);
    }

}
