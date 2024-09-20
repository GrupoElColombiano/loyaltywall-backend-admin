"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDb1691708514379 = void 0;
class SetDb1691708514379 {
    constructor() {
        this.name = 'SetDb1691708514379';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "my_site" ("idMySite" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text NOT NULL, "url" character varying(255) NOT NULL, "isActive" boolean NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_6794ad6a0a39b194360d209e819" UNIQUE ("name"), CONSTRAINT "UQ_cae803417d3133fcd01ba998f85" UNIQUE ("url"), CONSTRAINT "PK_22c67c00ba975fbe51384cc64e7" PRIMARY KEY ("idMySite"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "my_site"`);
    }
}
exports.SetDb1691708514379 = SetDb1691708514379;
//# sourceMappingURL=1691708514379-set-db.js.map