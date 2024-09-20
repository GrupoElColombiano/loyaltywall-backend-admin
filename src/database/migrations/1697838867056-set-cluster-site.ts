import { MigrationInterface, QueryRunner } from "typeorm";

export class SetClusterSite1697838867056 implements MigrationInterface {
    name = 'SetClusterSite1697838867056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "idSite" ("clusterIdCluster" integer NOT NULL, "siteIdSite" integer NOT NULL, CONSTRAINT "PK_e8dcea48ca659ec078c0c27ef43" PRIMARY KEY ("clusterIdCluster", "siteIdSite"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e5f777e5d682f9a23d215e2ad2" ON "idSite" ("clusterIdCluster") `);
        await queryRunner.query(`CREATE INDEX "IDX_fbf465aeb3ad9286e2418c2e6c" ON "idSite" ("siteIdSite") `);
        await queryRunner.query(`CREATE TABLE "id_cluster" ("siteIdSite" integer NOT NULL, "clusterIdCluster" integer NOT NULL, CONSTRAINT "PK_8e7423751c34a5c353218951124" PRIMARY KEY ("siteIdSite", "clusterIdCluster"))`);
        await queryRunner.query(`CREATE INDEX "IDX_97fe65af4fb9ab648ffda19847" ON "id_cluster" ("siteIdSite") `);
        await queryRunner.query(`CREATE INDEX "IDX_5c910ce09a831c0b0057b908a0" ON "id_cluster" ("clusterIdCluster") `);
        await queryRunner.query(`ALTER TABLE "idSite" ADD CONSTRAINT "FK_e5f777e5d682f9a23d215e2ad27" FOREIGN KEY ("clusterIdCluster") REFERENCES "cluster"("id_cluster") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "idSite" ADD CONSTRAINT "FK_fbf465aeb3ad9286e2418c2e6c2" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "id_cluster" ADD CONSTRAINT "FK_97fe65af4fb9ab648ffda198471" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "id_cluster" ADD CONSTRAINT "FK_5c910ce09a831c0b0057b908a0b" FOREIGN KEY ("clusterIdCluster") REFERENCES "cluster"("id_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "id_cluster" DROP CONSTRAINT "FK_5c910ce09a831c0b0057b908a0b"`);
        await queryRunner.query(`ALTER TABLE "id_cluster" DROP CONSTRAINT "FK_97fe65af4fb9ab648ffda198471"`);
        await queryRunner.query(`ALTER TABLE "idSite" DROP CONSTRAINT "FK_fbf465aeb3ad9286e2418c2e6c2"`);
        await queryRunner.query(`ALTER TABLE "idSite" DROP CONSTRAINT "FK_e5f777e5d682f9a23d215e2ad27"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5c910ce09a831c0b0057b908a0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97fe65af4fb9ab648ffda19847"`);
        await queryRunner.query(`DROP TABLE "id_cluster"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fbf465aeb3ad9286e2418c2e6c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e5f777e5d682f9a23d215e2ad2"`);
        await queryRunner.query(`DROP TABLE "idSite"`);
    }

}
