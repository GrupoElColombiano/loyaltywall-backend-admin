"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetClusterSite1697816097172 = void 0;
class SetClusterSite1697816097172 {
    constructor() {
        this.name = 'SetClusterSite1697816097172';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "cluster_sites_site" ("clusterIdCluster" integer NOT NULL, "siteIdSite" integer NOT NULL, CONSTRAINT "PK_eafd5bb357972cf8f4a115be83a" PRIMARY KEY ("clusterIdCluster", "siteIdSite"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cf3db120632132a660a320d828" ON "cluster_sites_site" ("clusterIdCluster") `);
        await queryRunner.query(`CREATE INDEX "IDX_c76fca3215683f24f0593ac194" ON "cluster_sites_site" ("siteIdSite") `);
        await queryRunner.query(`CREATE TABLE "site_clusters_cluster" ("siteIdSite" integer NOT NULL, "clusterIdCluster" integer NOT NULL, CONSTRAINT "PK_a7b618ab9e43b040a9d4faadf50" PRIMARY KEY ("siteIdSite", "clusterIdCluster"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ee32d48c4832881280f7d0baad" ON "site_clusters_cluster" ("siteIdSite") `);
        await queryRunner.query(`CREATE INDEX "IDX_50acb138afb407a49f531532be" ON "site_clusters_cluster" ("clusterIdCluster") `);
        await queryRunner.query(`ALTER TABLE "cluster_sites_site" ADD CONSTRAINT "FK_cf3db120632132a660a320d828b" FOREIGN KEY ("clusterIdCluster") REFERENCES "cluster"("id_cluster") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cluster_sites_site" ADD CONSTRAINT "FK_c76fca3215683f24f0593ac1941" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "site_clusters_cluster" ADD CONSTRAINT "FK_ee32d48c4832881280f7d0baad9" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "site_clusters_cluster" ADD CONSTRAINT "FK_50acb138afb407a49f531532bed" FOREIGN KEY ("clusterIdCluster") REFERENCES "cluster"("id_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "site_clusters_cluster" DROP CONSTRAINT "FK_50acb138afb407a49f531532bed"`);
        await queryRunner.query(`ALTER TABLE "site_clusters_cluster" DROP CONSTRAINT "FK_ee32d48c4832881280f7d0baad9"`);
        await queryRunner.query(`ALTER TABLE "cluster_sites_site" DROP CONSTRAINT "FK_c76fca3215683f24f0593ac1941"`);
        await queryRunner.query(`ALTER TABLE "cluster_sites_site" DROP CONSTRAINT "FK_cf3db120632132a660a320d828b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_50acb138afb407a49f531532be"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ee32d48c4832881280f7d0baad"`);
        await queryRunner.query(`DROP TABLE "site_clusters_cluster"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c76fca3215683f24f0593ac194"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cf3db120632132a660a320d828"`);
        await queryRunner.query(`DROP TABLE "cluster_sites_site"`);
    }
}
exports.SetClusterSite1697816097172 = SetClusterSite1697816097172;
//# sourceMappingURL=1697816097172-set-cluster-site.js.map