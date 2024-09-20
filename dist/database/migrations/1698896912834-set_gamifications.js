"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetGamifications1698896912834 = void 0;
class SetGamifications1698896912834 {
    constructor() {
        this.name = 'SetGamifications1698896912834';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "site" ADD "corde" character varying(255)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "corde"`);
    }
}
exports.SetGamifications1698896912834 = SetGamifications1698896912834;
//# sourceMappingURL=1698896912834-set_gamifications.js.map