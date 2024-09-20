import { MigrationInterface, QueryRunner } from "typeorm";

export class SetUserPlan1699619991114 implements MigrationInterface {
    name = 'SetUserPlan1699619991114'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_plan" ("id" SERIAL NOT NULL, CONSTRAINT "PK_aa22a94c276c9921fe6590c1557" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "id" ("userPlanId" integer NOT NULL, "userAdminEntityId" integer NOT NULL, CONSTRAINT "PK_6ecb8f7724f8d513ae18e1ae0f2" PRIMARY KEY ("userPlanId", "userAdminEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_39e838c56a45ebfca69c5eb547" ON "id" ("userPlanId") `);
        await queryRunner.query(`CREATE INDEX "IDX_30712fd9df63e4652aa084aa2c" ON "id" ("userAdminEntityId") `);
        await queryRunner.query(`CREATE TABLE "idPlan" ("userPlanId" integer NOT NULL, "plansIdPlan" integer NOT NULL, CONSTRAINT "PK_0520f312ad4c2efe968fa2a33c1" PRIMARY KEY ("userPlanId", "plansIdPlan"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6367c554ed019952110866c10f" ON "idPlan" ("userPlanId") `);
        await queryRunner.query(`CREATE INDEX "IDX_40a5e0116ca8c97d71c7f3ea0e" ON "idPlan" ("plansIdPlan") `);
        await queryRunner.query(`ALTER TABLE "id" ADD CONSTRAINT "FK_39e838c56a45ebfca69c5eb5475" FOREIGN KEY ("userPlanId") REFERENCES "user_plan"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "id" ADD CONSTRAINT "FK_30712fd9df63e4652aa084aa2ca" FOREIGN KEY ("userAdminEntityId") REFERENCES "user_admin_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "idPlan" ADD CONSTRAINT "FK_6367c554ed019952110866c10ff" FOREIGN KEY ("userPlanId") REFERENCES "user_plan"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "idPlan" ADD CONSTRAINT "FK_40a5e0116ca8c97d71c7f3ea0ec" FOREIGN KEY ("plansIdPlan") REFERENCES "plans"("idPlan") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "idPlan" DROP CONSTRAINT "FK_40a5e0116ca8c97d71c7f3ea0ec"`);
        await queryRunner.query(`ALTER TABLE "idPlan" DROP CONSTRAINT "FK_6367c554ed019952110866c10ff"`);
        await queryRunner.query(`ALTER TABLE "id" DROP CONSTRAINT "FK_30712fd9df63e4652aa084aa2ca"`);
        await queryRunner.query(`ALTER TABLE "id" DROP CONSTRAINT "FK_39e838c56a45ebfca69c5eb5475"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_40a5e0116ca8c97d71c7f3ea0e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6367c554ed019952110866c10f"`);
        await queryRunner.query(`DROP TABLE "idPlan"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_30712fd9df63e4652aa084aa2c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_39e838c56a45ebfca69c5eb547"`);
        await queryRunner.query(`DROP TABLE "id"`);
        await queryRunner.query(`DROP TABLE "user_plan"`);
    }

}
