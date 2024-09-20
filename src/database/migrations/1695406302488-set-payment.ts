import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPayment1695406302488 implements MigrationInterface {
    name = 'SetPayment1695406302488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment_gateways" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "payment_gateways" DROP COLUMN "notes"`);
        await queryRunner.query(`ALTER TABLE "payment_gateways" ADD "testMode" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment_gateways" DROP COLUMN "testMode"`);
        await queryRunner.query(`ALTER TABLE "payment_gateways" ADD "notes" text`);
        await queryRunner.query(`ALTER TABLE "payment_gateways" ADD "type" character varying NOT NULL`);
    }

}
