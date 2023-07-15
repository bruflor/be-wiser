import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"

@Entity()
export class Incomes {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    amount: number

    @Column()
    category: string

    @Column()
    currency: string

    @Column()
    name: string

    @Column({type:"varchar", nullable:true})
    description: string

    @Column({type: "timestamp", nullable:true})
    income_date: string

    @CreateDateColumn({type: "timestamp"})
    created_at: string;

    @UpdateDateColumn({type: "timestamp", nullable: true})
    updated_at: string;

}