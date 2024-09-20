"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetAssets1698698672768 = void 0;
class SetAssets1698698672768 {
    constructor() {
        this.name = 'SetAssets1698698672768';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "assets" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "base64Data" character varying NOT NULL, "type" character varying NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_da96729a8b113377cfb6a62439c" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "assets"`);
    }
}
exports.SetAssets1698698672768 = SetAssets1698698672768;
//# sourceMappingURL=1698698672768-set_assets.js.map