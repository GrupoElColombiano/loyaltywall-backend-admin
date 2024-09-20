import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetDb1691512677390 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
