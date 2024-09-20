"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetGamifications1697575515993 = void 0;
class SetGamifications1697575515993 {
    constructor() {
        this.name = 'SetGamifications1697575515993';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "expire_time_point" ("id" integer NOT NULL, "expire_time" integer NOT NULL, "is_active" boolean NOT NULL, "site_id" integer, CONSTRAINT "PK_bb6cc37696a7829d0f7e57e3dca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD CONSTRAINT "FK_5f1e2bbf113080136d8690f5997" FOREIGN KEY ("site_id") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP CONSTRAINT "FK_5f1e2bbf113080136d8690f5997"`);
        await queryRunner.query(`DROP TABLE "expire_time_point"`);
    }
}
exports.SetGamifications1697575515993 = SetGamifications1697575515993;
//# sourceMappingURL=1697575515993-set-gamifications.js.map