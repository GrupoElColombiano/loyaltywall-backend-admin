import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetUserPlan1699619991114 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
