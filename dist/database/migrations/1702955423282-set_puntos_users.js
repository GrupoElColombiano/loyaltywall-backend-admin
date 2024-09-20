"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPuntosUsers1702955423282 = void 0;
class SetPuntosUsers1702955423282 {
    constructor() {
        this.name = 'SetPuntosUsers1702955423282';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "points_movement" DROP COLUMN "site"`);
        await queryRunner.query(`ALTER TABLE "points_movement" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "points_movement" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "points_movement" ADD "siteIdSite" integer`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "pointsMovementId" integer`);
        await queryRunner.query(`ALTER TABLE "site" ADD "pointsMovementId" integer`);
        await queryRunner.query(`ALTER TABLE "points_movement" ADD CONSTRAINT "FK_ed26822f25586869a43c64880b8" FOREIGN KEY ("userId") REFERENCES "user_admin_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "points_movement" ADD CONSTRAINT "FK_aefcbbe2a361fe9ae3a37421f18" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD CONSTRAINT "FK_edba66ca58913c867dc9a1bac08" FOREIGN KEY ("pointsMovementId") REFERENCES "points_movement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_ab02518d0430b2172bd88ac1e63" FOREIGN KEY ("pointsMovementId") REFERENCES "points_movement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_ab02518d0430b2172bd88ac1e63"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP CONSTRAINT "FK_edba66ca58913c867dc9a1bac08"`);
        await queryRunner.query(`ALTER TABLE "points_movement" DROP CONSTRAINT "FK_aefcbbe2a361fe9ae3a37421f18"`);
        await queryRunner.query(`ALTER TABLE "points_movement" DROP CONSTRAINT "FK_ed26822f25586869a43c64880b8"`);
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "pointsMovementId"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "pointsMovementId"`);
        await queryRunner.query(`ALTER TABLE "points_movement" DROP COLUMN "siteIdSite"`);
        await queryRunner.query(`ALTER TABLE "points_movement" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "points_movement" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "points_movement" ADD "site" integer NOT NULL`);
    }
}
exports.SetPuntosUsers1702955423282 = SetPuntosUsers1702955423282;
//# sourceMappingURL=1702955423282-set_puntos_users.js.map