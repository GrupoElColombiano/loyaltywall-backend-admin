"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetCategory1700110057860 = void 0;
class SetCategory1700110057860 {
    constructor() {
        this.name = 'SetCategory1700110057860';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "categories" ADD "is_accessible_for_free" boolean`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "is_accessible_for_free"`);
    }
}
exports.SetCategory1700110057860 = SetCategory1700110057860;
//# sourceMappingURL=1700110057860-set_category.js.map