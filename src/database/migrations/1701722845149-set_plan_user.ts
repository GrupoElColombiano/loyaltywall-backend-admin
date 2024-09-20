import { MigrationInterface, QueryRunner } from "typeorm";

export class SetPlanUser1701722845149 implements MigrationInterface {
    name = 'SetPlanUser1701722845149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_plan_user_user_admin_entity" ("userPlanId" integer NOT NULL, "userAdminEntityId" integer NOT NULL, CONSTRAINT "PK_c972d61a7b65b9dc4ea0b8bfd1d" PRIMARY KEY ("userPlanId", "userAdminEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1e9a132664dfb1d209d2879dbc" ON "user_plan_user_user_admin_entity" ("userPlanId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d5b715d01d52d6a99de5651f5c" ON "user_plan_user_user_admin_entity" ("userAdminEntityId") `);
        await queryRunner.query(`CREATE TABLE "user_plan_plan_plans" ("userPlanId" integer NOT NULL, "plansIdPlan" integer NOT NULL, CONSTRAINT "PK_cf095f93e19c0401966bf984257" PRIMARY KEY ("userPlanId", "plansIdPlan"))`);
        await queryRunner.query(`CREATE INDEX "IDX_227cc8b76f100170f1fb8301f1" ON "user_plan_plan_plans" ("userPlanId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ead0ef070490b58cc701e7b6df" ON "user_plan_plan_plans" ("plansIdPlan") `);
        await queryRunner.query(`ALTER TABLE "user_plan_user_user_admin_entity" ADD CONSTRAINT "FK_1e9a132664dfb1d209d2879dbc4" FOREIGN KEY ("userPlanId") REFERENCES "user_plan"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_plan_user_user_admin_entity" ADD CONSTRAINT "FK_d5b715d01d52d6a99de5651f5c2" FOREIGN KEY ("userAdminEntityId") REFERENCES "user_admin_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_plan_plan_plans" ADD CONSTRAINT "FK_227cc8b76f100170f1fb8301f1f" FOREIGN KEY ("userPlanId") REFERENCES "user_plan"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_plan_plan_plans" ADD CONSTRAINT "FK_ead0ef070490b58cc701e7b6df8" FOREIGN KEY ("plansIdPlan") REFERENCES "plans"("idPlan") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_plan_plan_plans" DROP CONSTRAINT "FK_ead0ef070490b58cc701e7b6df8"`);
        await queryRunner.query(`ALTER TABLE "user_plan_plan_plans" DROP CONSTRAINT "FK_227cc8b76f100170f1fb8301f1f"`);
        await queryRunner.query(`ALTER TABLE "user_plan_user_user_admin_entity" DROP CONSTRAINT "FK_d5b715d01d52d6a99de5651f5c2"`);
        await queryRunner.query(`ALTER TABLE "user_plan_user_user_admin_entity" DROP CONSTRAINT "FK_1e9a132664dfb1d209d2879dbc4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ead0ef070490b58cc701e7b6df"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_227cc8b76f100170f1fb8301f1"`);
        await queryRunner.query(`DROP TABLE "user_plan_plan_plans"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d5b715d01d52d6a99de5651f5c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1e9a132664dfb1d209d2879dbc"`);
        await queryRunner.query(`DROP TABLE "user_plan_user_user_admin_entity"`);
    }

}
