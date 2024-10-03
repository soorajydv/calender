import { MigrationInterface, QueryRunner } from "typeorm";

export class Mg1727970890663 implements MigrationInterface {
    name = 'Mg1727970890663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "days" ALTER COLUMN "guid" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "days" ALTER COLUMN "guid" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "holiday_settings" ALTER COLUMN "guid" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "holiday_settings" ALTER COLUMN "guid" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "academic_years" ALTER COLUMN "guid" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "academic_years" ALTER COLUMN "guid" SET DEFAULT uuid_generate_v4()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "academic_years" ALTER COLUMN "guid" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "academic_years" ALTER COLUMN "guid" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "holiday_settings" ALTER COLUMN "guid" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "holiday_settings" ALTER COLUMN "guid" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "days" ALTER COLUMN "guid" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "days" ALTER COLUMN "guid" SET DEFAULT uuid_generate_v4()`);
    }

}
