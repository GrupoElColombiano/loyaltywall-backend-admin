import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPuntosUsers1702967599943 implements MigrationInterface {
    name = 'SetPuntosUsers1702967599943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "clustersIdCluster" integer`);
        await queryRunner.query(`ALTER TABLE "cluster" ADD "eventClusterIdEventCluster" integer`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD CONSTRAINT "FK_619b1e50d41321d099855f180dc" FOREIGN KEY ("clustersIdCluster") REFERENCES "cluster"("id_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cluster" ADD CONSTRAINT "FK_892aa9ea098a3203bd83c8ea414" FOREIGN KEY ("eventClusterIdEventCluster") REFERENCES "event_cluster"("id_event_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster" DROP CONSTRAINT "FK_892aa9ea098a3203bd83c8ea414"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP CONSTRAINT "FK_619b1e50d41321d099855f180dc"`);
        await queryRunner.query(`ALTER TABLE "cluster" DROP COLUMN "eventClusterIdEventCluster"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "clustersIdCluster"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
    }

}
