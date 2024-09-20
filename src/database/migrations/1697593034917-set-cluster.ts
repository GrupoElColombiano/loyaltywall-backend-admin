import { MigrationInterface, QueryRunner } from "typeorm";

export class SetCluster1697593034917 implements MigrationInterface {
    name = 'SetCluster1697593034917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster" ADD "isActive" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "cluster" ADD CONSTRAINT "UQ_17b12576c3d23df5bcf9d160fb5" UNIQUE ("isActive")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster" DROP CONSTRAINT "UQ_17b12576c3d23df5bcf9d160fb5"`);
        await queryRunner.query(`ALTER TABLE "cluster" DROP COLUMN "isActive"`);
    }

}
