"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetNewPlansFields1692380743605 = void 0;
class SetNewPlansFields1692380743605 {
    constructor() {
        this.name = 'SetNewPlansFields1692380743605';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "plans" ADD "time" character varying`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "typeDuration" character varying`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "duration" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "rate" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "renewal_rate" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "special_rate_enabled" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "special_rate" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "renewal_special_rate" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "start_date" date`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "end_date" date`);
        await queryRunner.query(`ALTER TABLE "paywall_module" ALTER COLUMN "createAt" DROP DEFAULT`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "paywall_module" ALTER COLUMN "createAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "end_date"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "start_date"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "renewal_special_rate"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "special_rate"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "special_rate_enabled"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "renewal_rate"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "rate"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "typeDuration"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "time"`);
    }
}
exports.SetNewPlansFields1692380743605 = SetNewPlansFields1692380743605;
//# sourceMappingURL=1692380743605-set-new-plans-fields.js.map