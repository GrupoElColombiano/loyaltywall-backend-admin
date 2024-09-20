import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetCategory1700110057860 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
