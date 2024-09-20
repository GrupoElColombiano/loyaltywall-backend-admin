"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEventCluster1703201828825 = void 0;
class SetEventCluster1703201828825 {
    constructor() {
        this.name = 'SetEventCluster1703201828825';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cluster" DROP CONSTRAINT "FK_892aa9ea098a3203bd83c8ea414"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
        await queryRunner.query(`ALTER TABLE "cluster" DROP COLUMN "eventClusterIdEventCluster"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cluster" ADD "eventClusterIdEventCluster" integer`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "cluster" ADD CONSTRAINT "FK_892aa9ea098a3203bd83c8ea414" FOREIGN KEY ("eventClusterIdEventCluster") REFERENCES "event_cluster"("id_event_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.SetEventCluster1703201828825 = SetEventCluster1703201828825;
//# sourceMappingURL=1703201828825-set_event_cluster.js.map