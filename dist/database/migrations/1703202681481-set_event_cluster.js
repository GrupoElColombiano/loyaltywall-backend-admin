"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEventCluster1703202681481 = void 0;
class SetEventCluster1703202681481 {
    constructor() {
        this.name = 'SetEventCluster1703202681481';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
    }
}
exports.SetEventCluster1703202681481 = SetEventCluster1703202681481;
//# sourceMappingURL=1703202681481-set_event_cluster.js.map