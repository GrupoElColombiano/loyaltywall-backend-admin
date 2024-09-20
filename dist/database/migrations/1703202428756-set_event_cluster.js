"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEventCluster1703202428756 = void 0;
class SetEventCluster1703202428756 {
    constructor() {
        this.name = 'SetEventCluster1703202428756';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP CONSTRAINT "FK_7a6d435df444da9f0e3e1db2b3e"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "eventsIdEvent"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "id_event" integer`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD CONSTRAINT "FK_1ac1805988455108c0598a7408a" FOREIGN KEY ("id_event") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP CONSTRAINT "FK_1ac1805988455108c0598a7408a"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "id_event"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "eventsIdEvent" integer`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD CONSTRAINT "FK_7a6d435df444da9f0e3e1db2b3e" FOREIGN KEY ("eventsIdEvent") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.SetEventCluster1703202428756 = SetEventCluster1703202428756;
//# sourceMappingURL=1703202428756-set_event_cluster.js.map