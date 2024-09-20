import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPuntosUsuario1702840217663 implements MigrationInterface {
    name = 'SetPuntosUsuario1702840217663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
    }

}
