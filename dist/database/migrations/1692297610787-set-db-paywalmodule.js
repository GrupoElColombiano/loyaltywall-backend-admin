"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDbPaywalmodule1692297610787 = void 0;
class SetDbPaywalmodule1692297610787 {
    constructor() {
        this.name = 'SetDbPaywalmodule1692297610787';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "paywall_module" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_59cca1a07374ab8239145ebccc2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paywall_module_action" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_1334fb798cf8c960af1d9b7fd40" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paywall_module_action_relation" ("id" SERIAL NOT NULL, "paywallModuleId" integer, "paywallModuleActionId" integer, CONSTRAINT "PK_da43db32f82b42b69b1a78ec17d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_paywall_module_action_relation" ("id" SERIAL NOT NULL, "role" integer NOT NULL, "paywallModuleId" integer, "paywallModuleActionRelationId" integer, CONSTRAINT "PK_d50fdeadd31196d572847694f8d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_paywall_module" ("id" SERIAL NOT NULL, "role" integer NOT NULL, "status" integer NOT NULL, "paywallModuleId" integer, CONSTRAINT "PK_5cf910d5478ec6a35693632fd29" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" ADD CONSTRAINT "FK_1e2ff990d66e32b17ef77805843" FOREIGN KEY ("paywallModuleId") REFERENCES "paywall_module"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" ADD CONSTRAINT "FK_51ff8387e9f4fc36e68306c96a2" FOREIGN KEY ("paywallModuleActionId") REFERENCES "paywall_module_action"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" ADD CONSTRAINT "FK_594f85fa3a0b1028cdd8a3a81b5" FOREIGN KEY ("paywallModuleId") REFERENCES "paywall_module"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" ADD CONSTRAINT "FK_f9d191fcac07207aba34d2ab7c0" FOREIGN KEY ("paywallModuleActionRelationId") REFERENCES "paywall_module_action_relation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module" ADD CONSTRAINT "FK_4072d596466fdb1f515f53ddace" FOREIGN KEY ("paywallModuleId") REFERENCES "paywall_module"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "role_paywall_module" DROP CONSTRAINT "FK_4072d596466fdb1f515f53ddace"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" DROP CONSTRAINT "FK_f9d191fcac07207aba34d2ab7c0"`);
        await queryRunner.query(`ALTER TABLE "role_paywall_module_action_relation" DROP CONSTRAINT "FK_594f85fa3a0b1028cdd8a3a81b5"`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" DROP CONSTRAINT "FK_51ff8387e9f4fc36e68306c96a2"`);
        await queryRunner.query(`ALTER TABLE "paywall_module_action_relation" DROP CONSTRAINT "FK_1e2ff990d66e32b17ef77805843"`);
        await queryRunner.query(`DROP TABLE "role_paywall_module"`);
        await queryRunner.query(`DROP TABLE "role_paywall_module_action_relation"`);
        await queryRunner.query(`DROP TABLE "paywall_module_action_relation"`);
        await queryRunner.query(`DROP TABLE "paywall_module_action"`);
        await queryRunner.query(`DROP TABLE "paywall_module"`);
    }
}
exports.SetDbPaywalmodule1692297610787 = SetDbPaywalmodule1692297610787;
//# sourceMappingURL=1692297610787-set-db-paywalmodule.js.map