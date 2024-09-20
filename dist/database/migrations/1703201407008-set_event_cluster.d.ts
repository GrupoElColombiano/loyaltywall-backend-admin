import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetEventCluster1703201407008 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
