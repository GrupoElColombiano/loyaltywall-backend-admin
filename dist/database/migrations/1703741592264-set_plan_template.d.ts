import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetPlanTemplate1703741592264 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}