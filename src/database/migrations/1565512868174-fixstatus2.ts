import {MigrationInterface, QueryRunner} from "typeorm";

export class fixstatus21565512868174 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "status" SET DEFAULT 'ACTIVE'`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "status" SET DEFAULT 'ACTIVO'`);
    }

}
