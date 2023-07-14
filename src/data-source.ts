import "reflect-metadata"
require('dotenv').config()

import { DataSource } from "typeorm"
import { Incomes } from "./entity/Incomes"

import {CreateIncomes1689366975601} from './migration/1689366975601-CreateIncomes'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: String(process.env.POSTGRES_PW),
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [Incomes],
    migrations: [CreateIncomes1689366975601],
    // migrationsTableName:"migration_table",
    subscribers: [],
})
