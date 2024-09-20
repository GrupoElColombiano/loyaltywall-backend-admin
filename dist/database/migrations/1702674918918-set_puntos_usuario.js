"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPuntosUsuario1702674918918 = void 0;
class SetPuntosUsuario1702674918918 {
    constructor() {
        this.name = 'SetPuntosUsuario1702674918918';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_e3a54c53abb2ad52ca412f7d390"`);
        await queryRunner.query(`ALTER TABLE "event" RENAME COLUMN "idEventClusterIdEventCluster" TO "eventClusterIdEventCluster"`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_a5568eedabc078027cbee47cec3" FOREIGN KEY ("eventClusterIdEventCluster") REFERENCES "event_cluster"("id_event_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_a5568eedabc078027cbee47cec3"`);
        await queryRunner.query(`ALTER TABLE "event" RENAME COLUMN "eventClusterIdEventCluster" TO "idEventClusterIdEventCluster"`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_e3a54c53abb2ad52ca412f7d390" FOREIGN KEY ("idEventClusterIdEventCluster") REFERENCES "event_cluster"("id_event_cluster") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.SetPuntosUsuario1702674918918 = SetPuntosUsuario1702674918918;
//# sourceMappingURL=1702674918918-set_puntos_usuario.js.map