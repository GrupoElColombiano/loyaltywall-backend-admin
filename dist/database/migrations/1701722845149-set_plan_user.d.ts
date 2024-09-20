import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetPlanUser1701722845149 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
