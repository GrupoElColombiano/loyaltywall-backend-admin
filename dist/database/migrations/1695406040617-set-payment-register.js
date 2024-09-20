"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPaymentRegister1695406040617 = void 0;
class SetPaymentRegister1695406040617 {
    constructor() {
        this.name = 'SetPaymentRegister1695406040617';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "payment_transactions" ("id" SERIAL NOT NULL, "orderId" character varying NOT NULL, "amount" integer NOT NULL, "timestamp" TIMESTAMP NOT NULL, "ipAddress" character varying, "userId" integer, "siteId" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "gateway_id" integer, CONSTRAINT "PK_d32b3c6b0d2c1d22604cbcc8c49" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" ADD CONSTRAINT "FK_e786a5d8d5bfbafa6ae09c86074" FOREIGN KEY ("gateway_id") REFERENCES "payment_gateways"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "payment_transactions" DROP CONSTRAINT "FK_e786a5d8d5bfbafa6ae09c86074"`);
        await queryRunner.query(`DROP TABLE "payment_transactions"`);
    }
}
exports.SetPaymentRegister1695406040617 = SetPaymentRegister1695406040617;
//# sourceMappingURL=1695406040617-set-payment-register.js.map