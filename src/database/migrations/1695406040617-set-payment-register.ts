import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPaymentRegister1695406040617 implements MigrationInterface {
    name = 'SetPaymentRegister1695406040617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payment_transactions" ("id" SERIAL NOT NULL, "orderId" character varying NOT NULL, "amount" integer NOT NULL, "timestamp" TIMESTAMP NOT NULL, "ipAddress" character varying, "userId" integer, "siteId" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "gateway_id" integer, CONSTRAINT "PK_d32b3c6b0d2c1d22604cbcc8c49" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" ADD CONSTRAINT "FK_e786a5d8d5bfbafa6ae09c86074" FOREIGN KEY ("gateway_id") REFERENCES "payment_gateways"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment_transactions" DROP CONSTRAINT "FK_e786a5d8d5bfbafa6ae09c86074"`);
        await queryRunner.query(`DROP TABLE "payment_transactions"`);
    }

}
