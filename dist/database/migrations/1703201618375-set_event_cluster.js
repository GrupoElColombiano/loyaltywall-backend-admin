"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEventCluster1703201618375 = void 0;
class SetEventCluster1703201618375 {
    constructor() {
        this.name = 'SetEventCluster1703201618375';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD CONSTRAINT "FK_7a6d435df444da9f0e3e1db2b3e" FOREIGN KEY ("eventsIdEvent") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP CONSTRAINT "FK_7a6d435df444da9f0e3e1db2b3e"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
    }
}
exports.SetEventCluster1703201618375 = SetEventCluster1703201618375;
//# sourceMappingURL=1703201618375-set_event_cluster.js.map