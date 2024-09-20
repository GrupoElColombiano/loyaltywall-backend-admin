import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPuntosUsers1702954240827 implements MigrationInterface {
    name = 'SetPuntosUsers1702954240827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "points_events" RENAME COLUMN "site" TO "siteIdSite"`);
        await queryRunner.query(`ALTER TABLE "site" ADD "pointsEventsId" integer`);
        await queryRunner.query(`ALTER TABLE "points_events" ALTER COLUMN "siteIdSite" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "points_events" ADD CONSTRAINT "FK_80b087bd8d6927fc9be6ba734bb" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_46ba93fc73b6e2d11638400c165" FOREIGN KEY ("pointsEventsId") REFERENCES "points_events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_46ba93fc73b6e2d11638400c165"`);
        await queryRunner.query(`ALTER TABLE "points_events" DROP CONSTRAINT "FK_80b087bd8d6927fc9be6ba734bb"`);
        await queryRunner.query(`ALTER TABLE "points_events" ALTER COLUMN "siteIdSite" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "pointsEventsId"`);
        await queryRunner.query(`ALTER TABLE "points_events" RENAME COLUMN "siteIdSite" TO "site"`);
    }

}
