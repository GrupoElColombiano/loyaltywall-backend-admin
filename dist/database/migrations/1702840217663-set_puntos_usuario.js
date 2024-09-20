"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPuntosUsuario1702840217663 = void 0;
class SetPuntosUsuario1702840217663 {
    constructor() {
        this.name = 'SetPuntosUsuario1702840217663';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
    }
}
exports.SetPuntosUsuario1702840217663 = SetPuntosUsuario1702840217663;
//# sourceMappingURL=1702840217663-set_puntos_usuario.js.map