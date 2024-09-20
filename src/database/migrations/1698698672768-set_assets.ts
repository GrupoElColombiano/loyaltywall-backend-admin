import { MigrationInterface, QueryRunner } from "typeorm";

export class SetAssets1698698672768 implements MigrationInterface {
    name = 'SetAssets1698698672768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assets" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "base64Data" character varying NOT NULL, "type" character varying NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_da96729a8b113377cfb6a62439c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "assets"`);
    }

}
