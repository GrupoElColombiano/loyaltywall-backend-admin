import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPuntosUsuario1702674918918 implements MigrationInterface {
    name = 'SetPuntosUsuario1702674918918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_e3a54c53abb2ad52ca412f7d390"`);
        await queryRunner.query(`ALTER TABLE "event" RENAME COLUMN "idEventClusterIdEventCluster" TO "eventClusterIdEventCluster"`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_a5568eedabc078027cbee47cec3" FOREIGN KEY ("eventClusterIdEventCluster") REFERENCES "event_cluster"("id_event_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_a5568eedabc078027cbee47cec3"`);
        await queryRunner.query(`ALTER TABLE "event" RENAME COLUMN "eventClusterIdEventCluster" TO "idEventClusterIdEventCluster"`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_e3a54c53abb2ad52ca412f7d390" FOREIGN KEY ("idEventClusterIdEventCluster") REFERENCES "event_cluster"("id_event_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
