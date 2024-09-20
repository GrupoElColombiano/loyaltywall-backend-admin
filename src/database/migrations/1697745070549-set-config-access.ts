import { MigrationInterface, QueryRunner } from "typeorm";

export class SetConfigAccess1697745070549 implements MigrationInterface {
    name = 'SetConfigAccess1697745070549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cluster_event" ("id_cluster" integer NOT NULL, "id_event" integer NOT NULL, CONSTRAINT "PK_db7f6541eefc9effbe14a4c69af" PRIMARY KEY ("id_cluster", "id_event"))`);
        await queryRunner.query(`CREATE INDEX "IDX_82be2bb9a6f1a9f84e748eb3bc" ON "cluster_event" ("id_cluster") `);
        await queryRunner.query(`CREATE INDEX "IDX_a867eaae2be3a35c284a51dc7f" ON "cluster_event" ("id_event") `);
        await queryRunner.query(`ALTER TABLE "cluster_event" ADD CONSTRAINT "FK_82be2bb9a6f1a9f84e748eb3bc6" FOREIGN KEY ("id_cluster") REFERENCES "cluster"("id_cluster") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cluster_event" ADD CONSTRAINT "FK_a867eaae2be3a35c284a51dc7f0" FOREIGN KEY ("id_event") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster_event" DROP CONSTRAINT "FK_a867eaae2be3a35c284a51dc7f0"`);
        await queryRunner.query(`ALTER TABLE "cluster_event" DROP CONSTRAINT "FK_82be2bb9a6f1a9f84e748eb3bc6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a867eaae2be3a35c284a51dc7f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_82be2bb9a6f1a9f84e748eb3bc"`);
        await queryRunner.query(`DROP TABLE "cluster_event"`);
    }

}
