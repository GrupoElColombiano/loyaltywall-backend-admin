"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetExpirePointCorrection1697661132372 = void 0;
class SetExpirePointCorrection1697661132372 {
    constructor() {
        this.name = 'SetExpirePointCorrection1697661132372';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "expire_time_point" ("id_expire_time" SERIAL NOT NULL, "expire_time" integer NOT NULL, "is_active" boolean NOT NULL, "site_id" integer, CONSTRAINT "PK_03462fbba18ae4ec5e03b8534d2" PRIMARY KEY ("id_expire_time"))`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD CONSTRAINT "FK_5f1e2bbf113080136d8690f5997" FOREIGN KEY ("site_id") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP CONSTRAINT "FK_5f1e2bbf113080136d8690f5997"`);
        await queryRunner.query(`DROP TABLE "expire_time_point"`);
    }
}
exports.SetExpirePointCorrection1697661132372 = SetExpirePointCorrection1697661132372;
//# sourceMappingURL=1697661132372-set-expire-point-correction.js.map