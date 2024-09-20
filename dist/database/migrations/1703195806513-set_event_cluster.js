"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEventCluster1703195806513 = void 0;
class SetEventCluster1703195806513 {
    constructor() {
        this.name = 'SetEventCluster1703195806513';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "eventsIdEvent" integer`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD CONSTRAINT "FK_7a6d435df444da9f0e3e1db2b3e" FOREIGN KEY ("eventsIdEvent") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP CONSTRAINT "FK_7a6d435df444da9f0e3e1db2b3e"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "eventsIdEvent"`);
    }
}
exports.SetEventCluster1703195806513 = SetEventCluster1703195806513;
//# sourceMappingURL=1703195806513-set_event_cluster.js.map