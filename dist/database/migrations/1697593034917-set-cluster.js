"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetCluster1697593034917 = void 0;
class SetCluster1697593034917 {
    constructor() {
        this.name = 'SetCluster1697593034917';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cluster" ADD "isActive" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "cluster" ADD CONSTRAINT "UQ_17b12576c3d23df5bcf9d160fb5" UNIQUE ("isActive")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cluster" DROP CONSTRAINT "UQ_17b12576c3d23df5bcf9d160fb5"`);
        await queryRunner.query(`ALTER TABLE "cluster" DROP COLUMN "isActive"`);
    }
}
exports.SetCluster1697593034917 = SetCluster1697593034917;
//# sourceMappingURL=1697593034917-set-cluster.js.map