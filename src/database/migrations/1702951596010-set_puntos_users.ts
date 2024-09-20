import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPuntosUsers1702951596010 implements MigrationInterface {
    name = 'SetPuntosUsers1702951596010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "points_events" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "points_events" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "points_events" ADD CONSTRAINT "FK_dc0a053b5d0fedf82cf38f248e7" FOREIGN KEY ("userId") REFERENCES "user_admin_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "points_events" DROP CONSTRAINT "FK_dc0a053b5d0fedf82cf38f248e7"`);
        await queryRunner.query(`ALTER TABLE "points_events" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "points_events" RENAME COLUMN "userId" TO "user_id"`);
    }

}
