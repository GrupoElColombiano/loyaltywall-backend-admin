"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPuntosUsuario1702865068530 = void 0;
class SetPuntosUsuario1702865068530 {
    constructor() {
        this.name = 'SetPuntosUsuario1702865068530';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" ADD "points" integer DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_cluster" DROP COLUMN "points"`);
    }
}
exports.SetPuntosUsuario1702865068530 = SetPuntosUsuario1702865068530;
//# sourceMappingURL=1702865068530-set_puntos_usuario.js.map