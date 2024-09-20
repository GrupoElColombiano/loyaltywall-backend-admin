import { MigrationInterface, QueryRunner } from "typeorm";

export class SetUser1699618900118 implements MigrationInterface {
    name = 'SetUser1699618900118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "idKeycloack" character varying`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD CONSTRAINT "UQ_40a0874413c0b588b08727f43a1" UNIQUE ("idKeycloack")`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "document_type" character varying`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "document_number" character varying`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "birthdate" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "gener" character varying`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "phone" character varying`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "address" character varying`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "city" character varying`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "department" character varying`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "country" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "department"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "gener"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "birthdate"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "document_number"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "document_type"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP CONSTRAINT "UQ_40a0874413c0b588b08727f43a1"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "idKeycloack"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "isActive" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "role" character varying`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "image" character varying`);
    }

}
