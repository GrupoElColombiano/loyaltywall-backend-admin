"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetUserPoints1703608039712 = void 0;
class SetUserPoints1703608039712 {
    constructor() {
        this.name = 'SetUserPoints1703608039712';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" ADD "porcentual_value" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "event" ADD "pointsEventsId" integer`);
        await queryRunner.query(`ALTER TABLE "user_points" DROP COLUMN "product"`);
        await queryRunner.query(`ALTER TABLE "user_points" ADD "product" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_2671ad705325336d3ae1be4ea60" FOREIGN KEY ("pointsEventsId") REFERENCES "points_events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_2671ad705325336d3ae1be4ea60"`);
        await queryRunner.query(`ALTER TABLE "user_points" DROP COLUMN "product"`);
        await queryRunner.query(`ALTER TABLE "user_points" ADD "product" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "pointsEventsId"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "porcentual_value"`);
    }
}
exports.SetUserPoints1703608039712 = SetUserPoints1703608039712;
//# sourceMappingURL=1703608039712-set_user_points.js.map