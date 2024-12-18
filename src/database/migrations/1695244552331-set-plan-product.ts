import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPlanProduct1695244552331 implements MigrationInterface {
    name = 'SetPlanProduct1695244552331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "unlimited"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "frequency"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "typeDuration"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "amount" integer`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "unlimited" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "frequency" character varying`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "typeDuration" character varying`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "duration" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plans" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plans" ALTER COLUMN "userType" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plans" ALTER COLUMN "isActive" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "rules" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "rules" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plans" ALTER COLUMN "isActive" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plans" ALTER COLUMN "userType" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plans" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "plans" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "typeDuration"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "frequency"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "unlimited"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "duration" integer`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "typeDuration" character varying`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "frequency" character varying`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "unlimited" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "amount" integer`);
    }

}
