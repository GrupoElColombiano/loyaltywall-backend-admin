import { MigrationInterface, QueryRunner } from "typeorm";

export class SetAssets1698699973285 implements MigrationInterface {
    name = 'SetAssets1698699973285'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "assets" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "assets" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "type" SET DEFAULT 'image/jpeg'`);
        await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "size" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "size" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "assets" ALTER COLUMN "type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "assets" ADD "updatedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "assets" ADD "createdAt" TIMESTAMP NOT NULL`);
    }

}
