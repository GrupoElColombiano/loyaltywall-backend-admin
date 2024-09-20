import { MigrationInterface, QueryRunner } from "typeorm";

export class SetEventCluster1703202681481 implements MigrationInterface {
    name = 'SetEventCluster1703202681481'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
    }

}
