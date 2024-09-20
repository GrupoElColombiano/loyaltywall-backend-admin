"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPayment1695395705097 = void 0;
class SetPayment1695395705097 {
    constructor() {
        this.name = 'SetPayment1695395705097';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "payment_gateways" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "clientId" character varying NOT NULL, "apiKey" character varying NOT NULL, "image" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, "notes" text, CONSTRAINT "PK_2b022a3aafb792a1afe3e14e06f" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "payment_gateways"`);
    }
}
exports.SetPayment1695395705097 = SetPayment1695395705097;
//# sourceMappingURL=1695395705097-set-payment.js.map