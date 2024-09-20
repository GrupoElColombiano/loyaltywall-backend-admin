"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPuntosUsuario1702865480331 = void 0;
class SetPuntosUsuario1702865480331 {
    constructor() {
        this.name = 'SetPuntosUsuario1702865480331';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "event_cluster_event" ("id_event_cluster" integer NOT NULL, "id_event" integer NOT NULL, CONSTRAINT "PK_c0f1537c4722903a38da9521f4a" PRIMARY KEY ("id_event_cluster", "id_event"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d030aa63c60f54217ac25d9a57" ON "event_cluster_event" ("id_event_cluster") `);
        await queryRunner.query(`CREATE INDEX "IDX_d6c5a341d19a97d1c913a61bf5" ON "event_cluster_event" ("id_event") `);
        await queryRunner.query(`CREATE TABLE "event_cluster_cluster" ("id_event_cluster" integer NOT NULL, "id_cluster" integer NOT NULL, CONSTRAINT "PK_06101d2f2eed2211727edb48fd3" PRIMARY KEY ("id_event_cluster", "id_cluster"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f3dd1d2870dad64e94b0749d6a" ON "event_cluster_cluster" ("id_event_cluster") `);
        await queryRunner.query(`CREATE INDEX "IDX_334d4b4d4cd8c771186635f6a7" ON "event_cluster_cluster" ("id_cluster") `);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
        await queryRunner.query(`ALTER TABLE "event_cluster_event" ADD CONSTRAINT "FK_d030aa63c60f54217ac25d9a578" FOREIGN KEY ("id_event_cluster") REFERENCES "event_cluster"("id_event_cluster") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "event_cluster_event" ADD CONSTRAINT "FK_d6c5a341d19a97d1c913a61bf55" FOREIGN KEY ("id_event") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event_cluster_cluster" ADD CONSTRAINT "FK_f3dd1d2870dad64e94b0749d6a6" FOREIGN KEY ("id_event_cluster") REFERENCES "event_cluster"("id_event_cluster") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "event_cluster_cluster" ADD CONSTRAINT "FK_334d4b4d4cd8c771186635f6a7f" FOREIGN KEY ("id_cluster") REFERENCES "cluster"("id_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster_cluster" DROP CONSTRAINT "FK_334d4b4d4cd8c771186635f6a7f"`);
        await queryRunner.query(`ALTER TABLE "event_cluster_cluster" DROP CONSTRAINT "FK_f3dd1d2870dad64e94b0749d6a6"`);
        await queryRunner.query(`ALTER TABLE "event_cluster_event" DROP CONSTRAINT "FK_d6c5a341d19a97d1c913a61bf55"`);
        await queryRunner.query(`ALTER TABLE "event_cluster_event" DROP CONSTRAINT "FK_d030aa63c60f54217ac25d9a578"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
        await queryRunner.query(`DROP INDEX "public"."IDX_334d4b4d4cd8c771186635f6a7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f3dd1d2870dad64e94b0749d6a"`);
        await queryRunner.query(`DROP TABLE "event_cluster_cluster"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d6c5a341d19a97d1c913a61bf5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d030aa63c60f54217ac25d9a57"`);
        await queryRunner.query(`DROP TABLE "event_cluster_event"`);
    }
}
exports.SetPuntosUsuario1702865480331 = SetPuntosUsuario1702865480331;
//# sourceMappingURL=1702865480331-set_puntos_usuario.js.map