"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPuntosUsers1702951596010 = void 0;
class SetPuntosUsers1702951596010 {
    constructor() {
        this.name = 'SetPuntosUsers1702951596010';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "points_events" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "points_events" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "points_events" ADD CONSTRAINT "FK_dc0a053b5d0fedf82cf38f248e7" FOREIGN KEY ("userId") REFERENCES "user_admin_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "points_events" DROP CONSTRAINT "FK_dc0a053b5d0fedf82cf38f248e7"`);
        await queryRunner.query(`ALTER TABLE "points_events" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "points_events" RENAME COLUMN "userId" TO "user_id"`);
    }
}
exports.SetPuntosUsers1702951596010 = SetPuntosUsers1702951596010;
//# sourceMappingURL=1702951596010-set_puntos_users.js.map