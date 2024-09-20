import { MigrationInterface, QueryRunner } from "typeorm";

export class SetClusterPenalty1703216212241 implements MigrationInterface {
    name = 'SetClusterPenalty1703216212241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cluster_penalization" ("id_cluster_penalization" SERIAL NOT NULL, "penaltyPoints" integer NOT NULL, "idSite" integer, CONSTRAINT "PK_d9e544215ae3a9265607d67da1f" PRIMARY KEY ("id_cluster_penalization"))`);
        await queryRunner.query(`ALTER TABLE "cluster_penalization" ADD CONSTRAINT "FK_51663f7274f1453f8a95db6c583" FOREIGN KEY ("idSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster_penalization" DROP CONSTRAINT "FK_51663f7274f1453f8a95db6c583"`);
        await queryRunner.query(`DROP TABLE "cluster_penalization"`);
    }

}
