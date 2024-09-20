import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPuntosUsuario1702864253637 implements MigrationInterface {
    name = 'SetPuntosUsuario1702864253637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_a5568eedabc078027cbee47cec3"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "eventClusterIdEventCluster"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "eventClusterIdEventCluster" integer`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_a5568eedabc078027cbee47cec3" FOREIGN KEY ("eventClusterIdEventCluster") REFERENCES "event_cluster"("id_event_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
