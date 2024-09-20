import { MigrationInterface, QueryRunner } from "typeorm";

export class SetConfigAccess1697669377747 implements MigrationInterface {
    name = 'SetConfigAccess1697669377747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP CONSTRAINT "FK_a3d30d366b574eacb7e01374c15"`);
        await queryRunner.query(`CREATE TABLE "categorys_access" ("id" integer NOT NULL, "amount" integer, "unlimited" boolean NOT NULL DEFAULT false, "frequency" character varying, "typeDuration" character varying, "duration" integer, "idCategory" integer, CONSTRAINT "PK_e26f80c432f93fe3ebdfd857663" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "idCategory"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "unlimited"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "frequency"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "typeDuration"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP CONSTRAINT "PK_03462fbba18ae4ec5e03b8534d2"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP COLUMN "id_expire_time"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "cluster" DROP CONSTRAINT "UQ_17b12576c3d23df5bcf9d160fb5"`);
        await queryRunner.query(`ALTER TABLE "cluster" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "id" integer`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD CONSTRAINT "PK_bb6cc37696a7829d0f7e57e3dca" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "categorys_access" ADD CONSTRAINT "FK_b52d8c1b0f9c9a362b3154f3702" FOREIGN KEY ("idCategory") REFERENCES "categories"("idCategory") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD CONSTRAINT "FK_d308f091ca9ae02c6ec4d2b63ad" FOREIGN KEY ("id") REFERENCES "categorys_access"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP CONSTRAINT "FK_d308f091ca9ae02c6ec4d2b63ad"`);
        await queryRunner.query(`ALTER TABLE "categorys_access" DROP CONSTRAINT "FK_b52d8c1b0f9c9a362b3154f3702"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP CONSTRAINT "PK_bb6cc37696a7829d0f7e57e3dca"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cluster" ADD "isActive" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "cluster" ADD CONSTRAINT "UQ_17b12576c3d23df5bcf9d160fb5" UNIQUE ("isActive")`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD "id_expire_time" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD CONSTRAINT "PK_03462fbba18ae4ec5e03b8534d2" PRIMARY KEY ("id_expire_time")`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "duration" integer`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "typeDuration" character varying`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "frequency" character varying`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "unlimited" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "amount" integer`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD "idCategory" integer`);
        await queryRunner.query(`DROP TABLE "categorys_access"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD CONSTRAINT "FK_a3d30d366b574eacb7e01374c15" FOREIGN KEY ("idCategory") REFERENCES "categories"("idCategory") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
