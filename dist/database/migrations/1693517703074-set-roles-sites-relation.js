"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetRolesSitesRelation1693517703074 = void 0;
class SetRolesSitesRelation1693517703074 {
    constructor() {
        this.name = 'SetRolesSitesRelation1693517703074';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "role_site_relation" ("id" SERIAL NOT NULL, "role" character varying NOT NULL, "isActive" boolean DEFAULT false, "idSite" integer, CONSTRAINT "PK_ac23f7934742baa96856e41daa2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "role_site_relation" ADD CONSTRAINT "FK_9b5ee64608a9bd1b6ea763b6041" FOREIGN KEY ("idSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "role_site_relation" DROP CONSTRAINT "FK_9b5ee64608a9bd1b6ea763b6041"`);
        await queryRunner.query(`DROP TABLE "role_site_relation"`);
    }
}
exports.SetRolesSitesRelation1693517703074 = SetRolesSitesRelation1693517703074;
//# sourceMappingURL=1693517703074-set-roles-sites-relation.js.map