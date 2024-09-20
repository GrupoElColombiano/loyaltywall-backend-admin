import { MigrationInterface, QueryRunner } from "typeorm";

export class SetGamifications1697509329123 implements MigrationInterface {
    name = 'SetGamifications1697509329123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "event" ("id_event" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, "points" integer NOT NULL, "event_repeats" integer NOT NULL, "porcentual_value" integer NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_b535fbe8ec6d832dde22065ebdb" UNIQUE ("name"), CONSTRAINT "UQ_d345d5fafe5dd3261d69a295068" UNIQUE ("description"), CONSTRAINT "PK_a00138db948289d40622a8baaa2" PRIMARY KEY ("id_event"))`);
        await queryRunner.query(`CREATE TABLE "event_cluster" ("id_event_cluster" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "UQ_1edb7b6b37af7cf77031782c2dd" UNIQUE ("name"), CONSTRAINT "PK_36e550a881e82f6a422bc683e31" PRIMARY KEY ("id_event_cluster"))`);
        await queryRunner.query(`CREATE TABLE "cluster" ("id_cluster" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_2baf81de2d47a4721c82b260d63" UNIQUE ("name"), CONSTRAINT "PK_454cdc1938154bbd688a55126f9" PRIMARY KEY ("id_cluster"))`);
        await queryRunner.query(`CREATE TABLE "point_value" ("id_point_value" SERIAL NOT NULL, "value" integer NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_7fdc7a6afd89ef8908028bf714f" PRIMARY KEY ("id_point_value"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "point_value"`);
        await queryRunner.query(`DROP TABLE "cluster"`);
        await queryRunner.query(`DROP TABLE "event_cluster"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }

}
