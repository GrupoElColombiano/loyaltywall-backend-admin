"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetExpirePointCorrection1697663478383 = void 0;
class SetExpirePointCorrection1697663478383 {
    constructor() {
        this.name = 'SetExpirePointCorrection1697663478383';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP COLUMN "create_at"`);
    }
}
exports.SetExpirePointCorrection1697663478383 = SetExpirePointCorrection1697663478383;
//# sourceMappingURL=1697663478383-set-expire-point-correction.js.map