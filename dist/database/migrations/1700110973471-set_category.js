"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetCategory1700110973471 = void 0;
class SetCategory1700110973471 {
    constructor() {
        this.name = 'SetCategory1700110973471';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "categories" ADD "is_accessible_for_free" boolean NOT NULL DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "is_accessible_for_free"`);
    }
}
exports.SetCategory1700110973471 = SetCategory1700110973471;
//# sourceMappingURL=1700110973471-set_category.js.map