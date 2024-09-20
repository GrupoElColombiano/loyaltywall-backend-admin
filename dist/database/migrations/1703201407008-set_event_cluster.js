"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEventCluster1703201407008 = void 0;
class SetEventCluster1703201407008 {
    constructor() {
        this.name = 'SetEventCluster1703201407008';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP CONSTRAINT "FK_619b1e50d41321d099855f180dc"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "id_event"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "eventsIdEvent" integer`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD CONSTRAINT "FK_f32e53d7efb0cf9f44f019d91e1" FOREIGN KEY ("id_cluster") REFERENCES "cluster"("id_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP CONSTRAINT "FK_f32e53d7efb0cf9f44f019d91e1"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "eventsIdEvent"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "id_event" integer`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD CONSTRAINT "FK_619b1e50d41321d099855f180dc" FOREIGN KEY ("id_cluster") REFERENCES "cluster"("id_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.SetEventCluster1703201407008 = SetEventCluster1703201407008;
//# sourceMappingURL=1703201407008-set_event_cluster.js.map