import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetClusterRelations1697641854617 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
