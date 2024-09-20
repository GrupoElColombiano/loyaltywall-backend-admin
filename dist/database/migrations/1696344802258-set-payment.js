"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPayment1696344802258 = void 0;
class SetPayment1696344802258 {
    constructor() {
        this.name = 'SetPayment1696344802258';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "payment_transactions" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" DROP COLUMN "timestamp"`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" DROP COLUMN "ipAddress"`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" DROP COLUMN "siteId"`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" ADD "userName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" ADD "status" boolean NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "payment_transactions" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" DROP COLUMN "userName"`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" ADD "siteId" integer`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" ADD "ipAddress" character varying`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" ADD "timestamp" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "payment_transactions" ADD "orderId" character varying NOT NULL`);
    }
}
exports.SetPayment1696344802258 = SetPayment1696344802258;
//# sourceMappingURL=1696344802258-set-payment.js.map