"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetProduct1700109923893 = void 0;
class SetProduct1700109923893 {
    constructor() {
        this.name = 'SetProduct1700109923893';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ADD "all_product" boolean NOT NULL DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "all_product"`);
    }
}
exports.SetProduct1700109923893 = SetProduct1700109923893;
//# sourceMappingURL=1700109923893-set_product.js.map