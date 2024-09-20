import { MigrationInterface, QueryRunner } from "typeorm";

export class SetUserPoints1703599595004 implements MigrationInterface {
    name = 'SetUserPoints1703599595004'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_points" ("id_user_points" SERIAL NOT NULL, "product" integer NOT NULL, "id_product" integer NOT NULL, "id_user" integer, "id_site" integer, "id_event" integer, CONSTRAINT "PK_277551980cfef409994c2ac867b" PRIMARY KEY ("id_user_points"))`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "userPointsIdUserPoints" integer`);
        await queryRunner.query(`ALTER TABLE "user_points" ADD CONSTRAINT "FK_24f8250719c92f72264235edccc" FOREIGN KEY ("id_user") REFERENCES "user_admin_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_points" ADD CONSTRAINT "FK_70253db05c67cdfd89b9e261453" FOREIGN KEY ("id_site") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_points" ADD CONSTRAINT "FK_37abfd42fa4dbd8bb4328ad99f9" FOREIGN KEY ("id_event") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD CONSTRAINT "FK_0f6f9fa058187f7f6f17fbce3c1" FOREIGN KEY ("userPointsIdUserPoints") REFERENCES "user_points"("id_user_points") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP CONSTRAINT "FK_0f6f9fa058187f7f6f17fbce3c1"`);
        await queryRunner.query(`ALTER TABLE "user_points" DROP CONSTRAINT "FK_37abfd42fa4dbd8bb4328ad99f9"`);
        await queryRunner.query(`ALTER TABLE "user_points" DROP CONSTRAINT "FK_70253db05c67cdfd89b9e261453"`);
        await queryRunner.query(`ALTER TABLE "user_points" DROP CONSTRAINT "FK_24f8250719c92f72264235edccc"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "userPointsIdUserPoints"`);
        await queryRunner.query(`DROP TABLE "user_points"`);
    }

}
