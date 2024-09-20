import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetUserPoints1703599595004 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
