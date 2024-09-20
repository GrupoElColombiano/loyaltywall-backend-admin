import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPuntosUsers1702954687443 implements MigrationInterface {
    name = 'SetPuntosUsers1702954687443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "points_events" RENAME COLUMN "event_id" TO "eventIdEvent"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "pointsEventsId" integer`);
        await queryRunner.query(`ALTER TABLE "points_events" ALTER COLUMN "eventIdEvent" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "points_events" ADD CONSTRAINT "FK_bb345c1b75a0d8f1ac768345f27" FOREIGN KEY ("eventIdEvent") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_2671ad705325336d3ae1be4ea60" FOREIGN KEY ("pointsEventsId") REFERENCES "points_events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_2671ad705325336d3ae1be4ea60"`);
        await queryRunner.query(`ALTER TABLE "points_events" DROP CONSTRAINT "FK_bb345c1b75a0d8f1ac768345f27"`);
        await queryRunner.query(`ALTER TABLE "points_events" ALTER COLUMN "eventIdEvent" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "pointsEventsId"`);
        await queryRunner.query(`ALTER TABLE "points_events" RENAME COLUMN "eventIdEvent" TO "event_id"`);
    }

}
