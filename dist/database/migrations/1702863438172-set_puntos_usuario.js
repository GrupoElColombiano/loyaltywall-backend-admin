"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPuntosUsuario1702863438172 = void 0;
class SetPuntosUsuario1702863438172 {
    constructor() {
        this.name = 'SetPuntosUsuario1702863438172';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
    }
}
exports.SetPuntosUsuario1702863438172 = SetPuntosUsuario1702863438172;
//# sourceMappingURL=1702863438172-set_puntos_usuario.js.map