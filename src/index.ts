import express = require('express')
import { AppDataSource } from './data-source'

const app = express()

app.use(express.json())

app.listen(3333, ()=>{
    console.log(`server is running on port 3333`)
    
    AppDataSource.initialize().then(() => {
                // here you can start to work with your database
    }).catch((error) => console.log(error))
    })
