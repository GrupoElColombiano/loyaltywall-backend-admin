import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPuntosUsers1702952283713 implements MigrationInterface {
    name = 'SetPuntosUsers1702952283713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "pointsEventsId" integer`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD CONSTRAINT "FK_4953e1f257a5e64bb5c1fbbf893" FOREIGN KEY ("pointsEventsId") REFERENCES "points_events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP CONSTRAINT "FK_4953e1f257a5e64bb5c1fbbf893"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "pointsEventsId"`);
    }

}
