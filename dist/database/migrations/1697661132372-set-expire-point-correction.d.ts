import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetExpirePointCorrection1697661132372 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
