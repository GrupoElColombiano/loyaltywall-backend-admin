"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPlanUser1701725925091 = void 0;
class SetPlanUser1701725925091 {
    constructor() {
        this.name = 'SetPlanUser1701725925091';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "id_verson_plan"`);
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "is_active" boolean`);
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "id_version" character varying`);
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "id_user"`);
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "id_user" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "id_user"`);
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "id_user" text`);
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "id_version"`);
        await queryRunner.query(`ALTER TABLE "user_plan" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "id_verson_plan" text`);
        await queryRunner.query(`ALTER TABLE "user_plan" ADD "isActive" boolean`);
    }
}
exports.SetPlanUser1701725925091 = SetPlanUser1701725925091;
//# sourceMappingURL=1701725925091-set_plan_user.js.map