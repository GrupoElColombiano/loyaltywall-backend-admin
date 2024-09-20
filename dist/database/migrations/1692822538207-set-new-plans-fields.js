"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetNewPlansFields1692822538207 = void 0;
class SetNewPlansFields1692822538207 {
    constructor() {
        this.name = 'SetNewPlansFields1692822538207';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP COLUMN "paywallModuleId"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" ADD "role" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ALTER COLUMN "role" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ALTER COLUMN "isActive" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ALTER COLUMN "isActive" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ALTER COLUMN "role" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD "paywallModuleId" integer`);
    }
}
exports.SetNewPlansFields1692822538207 = SetNewPlansFields1692822538207;
//# sourceMappingURL=1692822538207-set-new-plans-fields.js.map