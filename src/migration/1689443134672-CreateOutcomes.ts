import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateOutcomes1689443134672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"Outcomes",
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
                    {
                        name: "outcome_date",
                        type: "Date",
                        isNullable:true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        isNullable:true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Outcomes")

    }

}
