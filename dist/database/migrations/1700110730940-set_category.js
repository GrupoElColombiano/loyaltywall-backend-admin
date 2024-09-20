"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetCategory1700110730940 = void 0;
class SetCategory1700110730940 {
    constructor() {
        this.name = 'SetCategory1700110730940';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "is_accessible_for_free"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "categories" ADD "is_accessible_for_free" boolean`);
    }
}
exports.SetCategory1700110730940 = SetCategory1700110730940;
//# sourceMappingURL=1700110730940-set_category.js.map