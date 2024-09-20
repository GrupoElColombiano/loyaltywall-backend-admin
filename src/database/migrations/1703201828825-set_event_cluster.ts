import { MigrationInterface, QueryRunner } from "typeorm";

export class SetEventCluster1703201828825 implements MigrationInterface {
    name = 'SetEventCluster1703201828825'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster" DROP CONSTRAINT "FK_892aa9ea098a3203bd83c8ea414"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
        await queryRunner.query(`ALTER TABLE "cluster" DROP COLUMN "eventClusterIdEventCluster"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster" ADD "eventClusterIdEventCluster" integer`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "cluster" ADD CONSTRAINT "FK_892aa9ea098a3203bd83c8ea414" FOREIGN KEY ("eventClusterIdEventCluster") REFERENCES "event_cluster"("id_event_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
