import { MigrationInterface, QueryRunner } from "typeorm";

export class SetDb1691708514379 implements MigrationInterface {
    name = 'SetDb1691708514379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "my_site" ("idMySite" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text NOT NULL, "url" character varying(255) NOT NULL, "isActive" boolean NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_6794ad6a0a39b194360d209e819" UNIQUE ("name"), CONSTRAINT "UQ_cae803417d3133fcd01ba998f85" UNIQUE ("url"), CONSTRAINT "PK_22c67c00ba975fbe51384cc64e7" PRIMARY KEY ("idMySite"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "my_site"`);
    }

}
