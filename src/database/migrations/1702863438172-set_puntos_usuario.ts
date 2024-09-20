import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPuntosUsuario1702863438172 implements MigrationInterface {
    name = 'SetPuntosUsuario1702863438172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
    }

}
