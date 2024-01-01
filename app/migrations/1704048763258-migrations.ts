import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1704048763258 implements MigrationInterface {
    name = 'Migrations1704048763258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`command\` ADD \`categoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`command\` ADD CONSTRAINT \`FK_46c8c25116beff7bf2dee56313a\` FOREIGN KEY (\`categoryId\`) REFERENCES \`command_category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`command\` DROP FOREIGN KEY \`FK_46c8c25116beff7bf2dee56313a\``);
        await queryRunner.query(`ALTER TABLE \`command\` DROP COLUMN \`categoryId\``);
    }

}
