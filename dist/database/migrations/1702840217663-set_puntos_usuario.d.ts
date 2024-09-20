import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetPuntosUsuario1702840217663 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
