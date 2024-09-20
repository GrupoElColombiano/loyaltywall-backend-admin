import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetPlanVersion1697772060360 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
