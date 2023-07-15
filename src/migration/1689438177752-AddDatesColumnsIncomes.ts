import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddDatesColumnsIncomes1689438177752 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "incomes",
            new TableColumn({
                name: "income_date",
                type: "Date",
                isNullable:true
            }),
        )
        await queryRunner.addColumn(
            "incomes",
            new TableColumn({
                name: "created_at",
                type: "timestamp",
                default: "now()",
            })
        )
        await queryRunner.addColumn(
            "incomes",
            new TableColumn({
                name: "updated_at",
                type: "timestamp",
                isNullable:true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("incomes","income_date")
        await queryRunner.dropColumn("incomes","created_at")
        await queryRunner.dropColumn("incomes","updated_at")
    }

}
