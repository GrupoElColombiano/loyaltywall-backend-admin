import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPuntosUsuario1702656061191 implements MigrationInterface {
    name = 'SetPuntosUsuario1702656061191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "points_movement" ("id" SERIAL NOT NULL, "total_points" integer NOT NULL, "current_points" integer NOT NULL, "expired_points" integer NOT NULL, "redeemed_points" integer NOT NULL, "site" integer NOT NULL, "user_id" integer NOT NULL, "system_date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a1e7651b3fa19c51a3e56ef4185" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "points_events" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "event_id" integer NOT NULL, "site" integer NOT NULL, "points" integer NOT NULL, "registration_date" TIMESTAMP NOT NULL DEFAULT now(), "expiration_date" TIMESTAMP NOT NULL, CONSTRAINT "PK_9a63fcb1b5a3b45930243300ffd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
        await queryRunner.query(`DROP TABLE "points_events"`);
        await queryRunner.query(`DROP TABLE "points_movement"`);
    }

}
