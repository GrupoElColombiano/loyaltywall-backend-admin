import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetVersionplanId1699453863680 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
