"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPuntosUsers1702954240827 = void 0;
class SetPuntosUsers1702954240827 {
    constructor() {
        this.name = 'SetPuntosUsers1702954240827';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "points_events" RENAME COLUMN "site" TO "siteIdSite"`);
        await queryRunner.query(`ALTER TABLE "site" ADD "pointsEventsId" integer`);
        await queryRunner.query(`ALTER TABLE "points_events" ALTER COLUMN "siteIdSite" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "points_events" ADD CONSTRAINT "FK_80b087bd8d6927fc9be6ba734bb" FOREIGN KEY ("siteIdSite") REFERENCES "site"("idSite") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_46ba93fc73b6e2d11638400c165" FOREIGN KEY ("pointsEventsId") REFERENCES "points_events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_46ba93fc73b6e2d11638400c165"`);
        await queryRunner.query(`ALTER TABLE "points_events" DROP CONSTRAINT "FK_80b087bd8d6927fc9be6ba734bb"`);
        await queryRunner.query(`ALTER TABLE "points_events" ALTER COLUMN "siteIdSite" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "pointsEventsId"`);
        await queryRunner.query(`ALTER TABLE "points_events" RENAME COLUMN "siteIdSite" TO "site"`);
    }
}
exports.SetPuntosUsers1702954240827 = SetPuntosUsers1702954240827;
//# sourceMappingURL=1702954240827-set_puntos_users.js.map