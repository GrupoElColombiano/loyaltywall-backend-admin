"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPuntosUsuario1702674682362 = void 0;
class SetPuntosUsuario1702674682362 {
    constructor() {
        this.name = 'SetPuntosUsuario1702674682362';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
    }
}
exports.SetPuntosUsuario1702674682362 = SetPuntosUsuario1702674682362;
//# sourceMappingURL=1702674682362-set_puntos_usuario.js.map