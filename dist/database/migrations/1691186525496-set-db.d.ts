import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetDb1691186525496 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
