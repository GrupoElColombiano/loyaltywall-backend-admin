"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPayment1695406302488 = void 0;
class SetPayment1695406302488 {
    constructor() {
        this.name = 'SetPayment1695406302488';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "payment_gateways" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "payment_gateways" DROP COLUMN "notes"`);
        await queryRunner.query(`ALTER TABLE "payment_gateways" ADD "testMode" boolean NOT NULL DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "payment_gateways" DROP COLUMN "testMode"`);
        await queryRunner.query(`ALTER TABLE "payment_gateways" ADD "notes" text`);
        await queryRunner.query(`ALTER TABLE "payment_gateways" ADD "type" character varying NOT NULL`);
    }
}
exports.SetPayment1695406302488 = SetPayment1695406302488;
//# sourceMappingURL=1695406302488-set-payment.js.map