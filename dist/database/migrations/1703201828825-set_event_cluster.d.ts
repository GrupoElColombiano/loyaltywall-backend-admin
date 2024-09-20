import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetEventCluster1703201828825 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
