import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateIncomes1689366975601 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"Incomes",
                columns:[
                    {
                        name: "id",
                        type:"int",
                        isPrimary: true,
                    },
                    {
                        name: "amount",
                        type:"float",
                    },
                    {
                        name: "category",
                        type:"varchar",
                    },
                    {
                        name: "currency",
                        type:"varchar",
                    },
                    {
                        name: "name",
                        type:"varchar",
                    },
                    {
                        name: "description",
                        type:"varchar",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Incomes")
    }

}
