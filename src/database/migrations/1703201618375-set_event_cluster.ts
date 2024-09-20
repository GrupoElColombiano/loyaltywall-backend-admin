import { MigrationInterface, QueryRunner } from "typeorm";

export class SetEventCluster1703201618375 implements MigrationInterface {
    name = 'SetEventCluster1703201618375'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD CONSTRAINT "FK_7a6d435df444da9f0e3e1db2b3e" FOREIGN KEY ("eventsIdEvent") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP CONSTRAINT "FK_7a6d435df444da9f0e3e1db2b3e"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
    }

}
