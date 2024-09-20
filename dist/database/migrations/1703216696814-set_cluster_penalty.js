"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetClusterPenalty1703216696814 = void 0;
class SetClusterPenalty1703216696814 {
    constructor() {
        this.name = 'SetClusterPenalty1703216696814';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cluster_penalization" RENAME COLUMN "penaltyPoints" TO "penalty_cluster"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cluster_penalization" RENAME COLUMN "penalty_cluster" TO "penaltyPoints"`);
    }
}
exports.SetClusterPenalty1703216696814 = SetClusterPenalty1703216696814;
//# sourceMappingURL=1703216696814-set_cluster_penalty.js.map