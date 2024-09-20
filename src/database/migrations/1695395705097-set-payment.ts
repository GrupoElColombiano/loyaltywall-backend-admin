import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPayment1695395705097 implements MigrationInterface {
    name = 'SetPayment1695395705097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payment_gateways" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "clientId" character varying NOT NULL, "apiKey" character varying NOT NULL, "image" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, "notes" text, CONSTRAINT "PK_2b022a3aafb792a1afe3e14e06f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "payment_gateways"`);
    }

}
