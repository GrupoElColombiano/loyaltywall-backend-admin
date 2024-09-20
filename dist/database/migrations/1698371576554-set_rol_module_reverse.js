"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetRolModuleReverse1698371576554 = void 0;
class SetRolModuleReverse1698371576554 {
    constructor() {
        this.name = 'SetRolModuleReverse1698371576554';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "paywall_module" DROP CONSTRAINT "FK_def5e08349bf3f87bdd1c10e7b2"`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" DROP CONSTRAINT "FK_6c75d1dca7f285f24f421889633"`);
        await queryRunner.query(`ALTER TABLE "paywall_module" DROP COLUMN "rolePaywallModuleId"`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" DROP COLUMN "rolePaywallModuleActionRelationId"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" ADD "paywallModuleActionRelationId" integer`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" ADD CONSTRAINT "FK_f9d191fcac07207aba34d2ab7c0" FOREIGN KEY ("paywallModuleActionRelationId") REFERENCES "paywall_module_action_relation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" DROP CONSTRAINT "FK_f9d191fcac07207aba34d2ab7c0"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" DROP COLUMN "paywallModuleActionRelationId"`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" ADD "rolePaywallModuleActionRelationId" integer`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" ADD "active" boolean`);
        await queryRunner.query(`ALTER TABLE "paywall_module" ADD "rolePaywallModuleId" integer`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" ADD CONSTRAINT "FK_6c75d1dca7f285f24f421889633" FOREIGN KEY ("rolePaywallModuleActionRelationId") REFERENCES "role_paywall_module_action_relation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "paywall_module" ADD CONSTRAINT "FK_def5e08349bf3f87bdd1c10e7b2" FOREIGN KEY ("rolePaywallModuleId") REFERENCES "role_paywall_module"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.SetRolModuleReverse1698371576554 = SetRolModuleReverse1698371576554;
//# sourceMappingURL=1698371576554-set_rol_module_reverse.js.map