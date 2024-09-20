import { MigrationInterface, QueryRunner } from "typeorm";

export class SetClusterRelations1697641854617 implements MigrationInterface {
    name = 'SetClusterRelations1697641854617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cluster_events_event" ("clusterIdCluster" integer NOT NULL, "eventIdEvent" integer NOT NULL, CONSTRAINT "PK_47aa05790166343278a555cb18f" PRIMARY KEY ("clusterIdCluster", "eventIdEvent"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bd625986023f60f1e8b1d2d539" ON "cluster_events_event" ("clusterIdCluster") `);
        await queryRunner.query(`CREATE INDEX "IDX_d08617bbf153dc775e766819c3" ON "cluster_events_event" ("eventIdEvent") `);
        await queryRunner.query(`ALTER TABLE "cluster_events_event" ADD CONSTRAINT "FK_bd625986023f60f1e8b1d2d5390" FOREIGN KEY ("clusterIdCluster") REFERENCES "cluster"("id_cluster") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cluster_events_event" ADD CONSTRAINT "FK_d08617bbf153dc775e766819c39" FOREIGN KEY ("eventIdEvent") REFERENCES "event"("id_event") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster_events_event" DROP CONSTRAINT "FK_d08617bbf153dc775e766819c39"`);
        await queryRunner.query(`ALTER TABLE "cluster_events_event" DROP CONSTRAINT "FK_bd625986023f60f1e8b1d2d5390"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d08617bbf153dc775e766819c3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bd625986023f60f1e8b1d2d539"`);
        await queryRunner.query(`DROP TABLE "cluster_events_event"`);
    }

}
