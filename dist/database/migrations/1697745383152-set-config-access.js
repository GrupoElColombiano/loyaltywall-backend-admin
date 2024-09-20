"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetConfigAccess1697745383152 = void 0;
class SetConfigAccess1697745383152 {
    constructor() {
        this.name = 'SetConfigAccess1697745383152';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cluster_events_event" DROP CONSTRAINT "FK_d08617bbf153dc775e766819c39"`);
        await queryRunner.query(`ALTER TABLE "cluster_events_event" ADD CONSTRAINT "FK_d08617bbf153dc775e766819c39" FOREIGN KEY ("eventIdEvent") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cluster_events_event" DROP CONSTRAINT "FK_d08617bbf153dc775e766819c39"`);
        await queryRunner.query(`ALTER TABLE "cluster_events_event" ADD CONSTRAINT "FK_d08617bbf153dc775e766819c39" FOREIGN KEY ("eventIdEvent") REFERENCES "event"("id_event") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
}
exports.SetConfigAccess1697745383152 = SetConfigAccess1697745383152;
//# sourceMappingURL=1697745383152-set-config-access.js.map