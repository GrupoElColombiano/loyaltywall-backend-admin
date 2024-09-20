import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetGamifications1697509329123 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
