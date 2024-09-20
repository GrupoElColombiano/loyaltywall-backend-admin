import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetCategory1700110730940 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
