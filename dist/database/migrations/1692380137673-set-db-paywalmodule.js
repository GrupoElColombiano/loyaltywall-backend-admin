"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDbPaywalmodule1692380137673 = void 0;
class SetDbPaywalmodule1692380137673 {
    constructor() {
        this.name = 'SetDbPaywalmodule1692380137673';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "typeDuration"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "rate"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "renewal_rate"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "special_rate_enabled"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "special_rate"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "renewal_special_rate"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "start_date"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "end_date"`);
        await queryRunner.query(`ALTER TABLE "paywall_module" ALTER COLUMN "createAt" SET DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "paywall_module" ALTER COLUMN "createAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "end_date" date`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "start_date" date`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "renewal_special_rate" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "special_rate" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "special_rate_enabled" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "renewal_rate" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "rate" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "duration" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "typeDuration" character varying`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "time" character varying`);
    }
}
exports.SetDbPaywalmodule1692380137673 = SetDbPaywalmodule1692380137673;
//# sourceMappingURL=1692380137673-set-db-paywalmodule.js.map