import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetGamifications1698896974435 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
