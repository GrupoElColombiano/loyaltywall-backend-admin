import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetExpirePointCorrection1697663478383 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
