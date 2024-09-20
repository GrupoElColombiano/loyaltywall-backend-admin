import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetGamifications1697571726195 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
