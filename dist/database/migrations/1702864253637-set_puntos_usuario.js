"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPuntosUsuario1702864253637 = void 0;
class SetPuntosUsuario1702864253637 {
    constructor() {
        this.name = 'SetPuntosUsuario1702864253637';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_a5568eedabc078027cbee47cec3"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "eventClusterIdEventCluster"`);
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "eventClusterIdEventCluster" integer`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_a5568eedabc078027cbee47cec3" FOREIGN KEY ("eventClusterIdEventCluster") REFERENCES "event_cluster"("id_event_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.SetPuntosUsuario1702864253637 = SetPuntosUsuario1702864253637;
//# sourceMappingURL=1702864253637-set_puntos_usuario.js.map