"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetClusterPenalty1703216212241 = void 0;
class SetClusterPenalty1703216212241 {
    constructor() {
        this.name = 'SetClusterPenalty1703216212241';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "cluster_penalization" ("id_cluster_penalization" SERIAL NOT NULL, "penaltyPoints" integer NOT NULL, "idSite" integer, CONSTRAINT "PK_d9e544215ae3a9265607d67da1f" PRIMARY KEY ("id_cluster_penalization"))`);
        await queryRunner.query(`ALTER TABLE "cluster_penalization" ADD CONSTRAINT "FK_51663f7274f1453f8a95db6c583" FOREIGN KEY ("idSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cluster_penalization" DROP CONSTRAINT "FK_51663f7274f1453f8a95db6c583"`);
        await queryRunner.query(`DROP TABLE "cluster_penalization"`);
    }
}
exports.SetClusterPenalty1703216212241 = SetClusterPenalty1703216212241;
//# sourceMappingURL=1703216212241-set_cluster_penalty.js.map