import { MigrationInterface, QueryRunner } from "typeorm";

export class SetRolesSitesRelation1693517703074 implements MigrationInterface {
    name = 'SetRolesSitesRelation1693517703074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role_site_relation" ("id" SERIAL NOT NULL, "role" character varying NOT NULL, "isActive" boolean DEFAULT false, "idSite" integer, CONSTRAINT "PK_ac23f7934742baa96856e41daa2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "role_site_relation" ADD CONSTRAINT "FK_9b5ee64608a9bd1b6ea763b6041" FOREIGN KEY ("idSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_site_relation" DROP CONSTRAINT "FK_9b5ee64608a9bd1b6ea763b6041"`);
        await queryRunner.query(`DROP TABLE "role_site_relation"`);
    }

}
