import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetPuntosUsuario1702864253637 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}