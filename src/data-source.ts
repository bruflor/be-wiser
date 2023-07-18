import "reflect-metadata"
require('dotenv').config()

import { DataSource } from "typeorm"
import { Incomes } from "./entity/Incomes"

import {CreateIncomes1689366975601} from './migration/1689366975601-CreateIncomes'
import { AddDatesColumnsIncomes1689438177752 } from "./migration/1689438177752-AddDatesColumnsIncomes"
import { CreateOutcomes1689443134672 } from "./migration/1689443134672-CreateOutcomes"

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
    migrations: [CreateIncomes1689366975601, AddDatesColumnsIncomes1689438177752, CreateOutcomes1689443134672],
    // migrationsTableName:"migration_table",
    subscribers: [],
})
