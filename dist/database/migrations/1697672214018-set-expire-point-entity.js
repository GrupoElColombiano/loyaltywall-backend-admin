"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetExpirePointEntity1697672214018 = void 0;
class SetExpirePointEntity1697672214018 {
    constructor() {
        this.name = 'SetExpirePointEntity1697672214018';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP CONSTRAINT "PK_bb6cc37696a7829d0f7e57e3dca"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD "id_expire_time" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD CONSTRAINT "PK_03462fbba18ae4ec5e03b8534d2" PRIMARY KEY ("id_expire_time")`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP CONSTRAINT "PK_03462fbba18ae4ec5e03b8534d2"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" DROP COLUMN "id_expire_time"`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "expire_time_point" ADD CONSTRAINT "PK_bb6cc37696a7829d0f7e57e3dca" PRIMARY KEY ("id")`);
    }
}
exports.SetExpirePointEntity1697672214018 = SetExpirePointEntity1697672214018;
//# sourceMappingURL=1697672214018-set-expire-point-entity.js.map