"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDb1691181176026 = void 0;
class SetDb1691181176026 {
    constructor() {
        this.name = 'SetDb1691181176026';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "plans" ("idPlan" SERIAL NOT NULL, "idVersionPlan" integer NOT NULL DEFAULT '1', "description" character varying NOT NULL, "name" character varying NOT NULL, "userType" character varying NOT NULL, "isActive" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_af3c256f4edc5a9a4d49c3b42f1" PRIMARY KEY ("idPlan"))`);
        await queryRunner.query(`CREATE TABLE "PlansProductCategory" ("idPlansProductCategory" integer NOT NULL, "amount" integer NOT NULL, "unlimited" boolean NOT NULL, "frequency" character varying NOT NULL, "typeDuration" character varying NOT NULL, "duration" integer NOT NULL, "sitesIdSite" integer, "idPlan" integer, CONSTRAINT "PK_a30433595707fb3f8c6f01bce52" PRIMARY KEY ("idPlansProductCategory"))`);
        await queryRunner.query(`CREATE TABLE "site" ("idSite" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text NOT NULL, "url" character varying(255) NOT NULL, "isActive" boolean NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_9669a09fcc0eb6d2794a658f647" UNIQUE ("name"), CONSTRAINT "UQ_cfeaa7e14361e11b3fdfd9fc69f" UNIQUE ("url"), CONSTRAINT "PK_5733d365f4c4c98065f277ab9ed" PRIMARY KEY ("idSite"))`);
        await queryRunner.query(`CREATE TABLE "product" ("idProduct" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(255), "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "siteIdSite" integer, CONSTRAINT "PK_318999ba9feeaa49ff117c91f64" PRIMARY KEY ("idProduct"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("idCategory" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "rules" character varying NOT NULL, "siteIdSite" integer, "productIdProduct" integer, CONSTRAINT "PK_aff1975ddbbca8a721af0ef170f" PRIMARY KEY ("idCategory"))`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD CONSTRAINT "FK_cfe9c416caaabe7aa810b1eaa2a" FOREIGN KEY ("sitesIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" ADD CONSTRAINT "FK_1cfbe8c6655a8d0d92649a42022" FOREIGN KEY ("idPlan") REFERENCES "plans"("idPlan") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_35c00517e74eb50de31c6c1b343" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_d1f695b7b6024f9de5be0ddb8eb" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_b3351b0fd1acbaa06953535b8c4" FOREIGN KEY ("productIdProduct") REFERENCES "product"("idProduct") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_b3351b0fd1acbaa06953535b8c4"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_d1f695b7b6024f9de5be0ddb8eb"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_35c00517e74eb50de31c6c1b343"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP CONSTRAINT "FK_1cfbe8c6655a8d0d92649a42022"`);
        await queryRunner.query(`ALTER TABLE "PlansProductCategory" DROP CONSTRAINT "FK_cfe9c416caaabe7aa810b1eaa2a"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "site"`);
        await queryRunner.query(`DROP TABLE "PlansProductCategory"`);
        await queryRunner.query(`DROP TABLE "plans"`);
    }
}
exports.SetDb1691181176026 = SetDb1691181176026;
//# sourceMappingURL=1691181176026-set-db.js.map