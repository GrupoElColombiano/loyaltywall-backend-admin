"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetNewPlansFields1692824385127 = void 0;
class SetNewPlansFields1692824385127 {
    constructor() {
        this.name = 'SetNewPlansFields1692824385127';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD "paywallModuleId" integer`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD CONSTRAINT "FK_4072d596466fdb1f515f53ddace" FOREIGN KEY ("paywallModuleId") REFERENCES "paywall_module"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP CONSTRAINT "FK_4072d596466fdb1f515f53ddace"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP COLUMN "paywallModuleId"`);
    }
}
exports.SetNewPlansFields1692824385127 = SetNewPlansFields1692824385127;
//# sourceMappingURL=1692824385127-set-new-plans-fields.js.map