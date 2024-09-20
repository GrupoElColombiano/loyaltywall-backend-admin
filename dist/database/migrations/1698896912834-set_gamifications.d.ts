import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetGamifications1698896912834 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
