"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPuntosUsuario1702864377039 = void 0;
class SetPuntosUsuario1702864377039 {
    constructor() {
        this.name = 'SetPuntosUsuario1702864377039';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
    }
}
exports.SetPuntosUsuario1702864377039 = SetPuntosUsuario1702864377039;
//# sourceMappingURL=1702864377039-set_puntos_usuario.js.map