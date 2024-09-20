"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetGamifications1698896974435 = void 0;
class SetGamifications1698896974435 {
    constructor() {
        this.name = 'SetGamifications1698896974435';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "corde"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "site" ADD "corde" character varying(255)`);
    }
}
exports.SetGamifications1698896974435 = SetGamifications1698896974435;
//# sourceMappingURL=1698896974435-set_gamifications.js.map