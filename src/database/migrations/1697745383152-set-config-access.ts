import { MigrationInterface, QueryRunner } from "typeorm";

export class SetConfigAccess1697745383152 implements MigrationInterface {
    name = 'SetConfigAccess1697745383152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster_events_event" DROP CONSTRAINT "FK_d08617bbf153dc775e766819c39"`);
        await queryRunner.query(`ALTER TABLE "cluster_events_event" ADD CONSTRAINT "FK_d08617bbf153dc775e766819c39" FOREIGN KEY ("eventIdEvent") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster_events_event" DROP CONSTRAINT "FK_d08617bbf153dc775e766819c39"`);
        await queryRunner.query(`ALTER TABLE "cluster_events_event" ADD CONSTRAINT "FK_d08617bbf153dc775e766819c39" FOREIGN KEY ("eventIdEvent") REFERENCES "event"("id_event") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
