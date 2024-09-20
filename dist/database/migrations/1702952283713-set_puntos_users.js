"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPuntosUsers1702952283713 = void 0;
class SetPuntosUsers1702952283713 {
    constructor() {
        this.name = 'SetPuntosUsers1702952283713';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD "pointsEventsId" integer`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" ADD CONSTRAINT "FK_4953e1f257a5e64bb5c1fbbf893" FOREIGN KEY ("pointsEventsId") REFERENCES "points_events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP CONSTRAINT "FK_4953e1f257a5e64bb5c1fbbf893"`);
        await queryRunner.query(`ALTER TABLE "user_admin_entity" DROP COLUMN "pointsEventsId"`);
    }
}
exports.SetPuntosUsers1702952283713 = SetPuntosUsers1702952283713;
//# sourceMappingURL=1702952283713-set_puntos_users.js.map