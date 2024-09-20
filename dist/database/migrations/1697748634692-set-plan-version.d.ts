import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetPlanVersion1697748634692 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
