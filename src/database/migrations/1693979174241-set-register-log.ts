import { MigrationInterface, QueryRunner } from "typeorm";

export class SetRegisterLog1693979174241 implements MigrationInterface {
    name = 'SetRegisterLog1693979174241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "register_logs" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "roleId" integer NOT NULL, "activityType" character varying NOT NULL, "description" character varying NOT NULL, "affectedObject" character varying NOT NULL, "success" boolean NOT NULL, "ipAddress" character varying NOT NULL, "userAgent" character varying NOT NULL, "timestamp" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_04bca173f345acc5938d1086863" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "register_logs"`);
    }

}
