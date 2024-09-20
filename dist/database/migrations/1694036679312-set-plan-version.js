"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPlanVersion1694036679312 = void 0;
class SetPlanVersion1694036679312 {
    constructor() {
        this.name = 'SetPlanVersion1694036679312';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "plans" DROP CONSTRAINT "FK_a58b4d5e0d2a96b339f53c7ee1a"`);
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_65d5b0e46ec56af87f8fcb1c0a8"`);
        await queryRunner.query(`CREATE TABLE "plan_versions" ("idPlanVersion" SERIAL NOT NULL, "idPlan" integer NOT NULL, "idVersionPlan" integer NOT NULL, "description" character varying NOT NULL, "name" character varying NOT NULL, "userType" character varying NOT NULL, "isActive" boolean NOT NULL, "time" character varying NOT NULL, "typeDuration" character varying NOT NULL, "duration" integer NOT NULL, "rate" integer NOT NULL, "renewalRate" integer NOT NULL, "isSpecialRateActive" boolean NOT NULL, "specialRate" integer NOT NULL, "renewalSpecialRate" integer NOT NULL, "startDate" date, "endDate" date, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a57879accc5906769d5817c83cd" PRIMARY KEY ("idPlanVersion"))`);
        await queryRunner.query(`ALTER TABLE "plans" DROP COLUMN "idSite"`);
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "sitesPlanId"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "site" ADD "sitesPlanId" integer`);
        await queryRunner.query(`ALTER TABLE "plans" ADD "idSite" integer`);
        await queryRunner.query(`DROP TABLE "plan_versions"`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_65d5b0e46ec56af87f8fcb1c0a8" FOREIGN KEY ("sitesPlanId") REFERENCES "sites_plan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "plans" ADD CONSTRAINT "FK_a58b4d5e0d2a96b339f53c7ee1a" FOREIGN KEY ("idSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.SetPlanVersion1694036679312 = SetPlanVersion1694036679312;
//# sourceMappingURL=1694036679312-set-plan-version.js.map