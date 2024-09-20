import { MigrationInterface, QueryRunner } from "typeorm";

export class SetClusterPenalty1703216696814 implements MigrationInterface {
    name = 'SetClusterPenalty1703216696814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster_penalization" RENAME COLUMN "penaltyPoints" TO "penalty_cluster"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster_penalization" RENAME COLUMN "penalty_cluster" TO "penaltyPoints"`);
    }

}
