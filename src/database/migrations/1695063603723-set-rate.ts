import { MigrationInterface, QueryRunner } from "typeorm";

export class SetRate1695063603723 implements MigrationInterface {
    name = 'SetRate1695063603723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rates" ("id" SERIAL NOT NULL, "time" character varying(255) NOT NULL, "rate" numeric(10,2) NOT NULL, "rate_special" numeric(10,2) NOT NULL, "rate_special_renewal" numeric(10,2) NOT NULL, "rate_renewal" numeric(10,2) NOT NULL, "duration" integer NOT NULL, "is_special" boolean NOT NULL, "date_start" date, "date_end" date, "idPlan" integer, CONSTRAINT "PK_2c804ed4019b80ce48eedba5cec" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "typeDuration"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "rate"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "renewal_rate"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "special_rate_enabled"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "special_rate"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "renewal_special_rate"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "start_date"`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "end_date"`);
        await queryRunner.query(`ALTER TABLE "rates" ADD CONSTRAINT "FK_7640d79bd0aa599a18867eb0ce2" FOREIGN KEY ("idPlan") REFERENCES "plans"("idPlan") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rates" DROP CONSTRAINT "FK_7640d79bd0aa599a18867eb0ce2"`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "end_date" date`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "start_date" date`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "renewal_special_rate" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "special_rate" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "special_rate_enabled" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "renewal_rate" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "rate" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "duration" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "typeDuration" character varying`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "time" character varying`);
        await queryRunner.query(`DROP TABLE "rates"`);
    }

}
