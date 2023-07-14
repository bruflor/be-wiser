import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

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

    @Column()
    description: string

}