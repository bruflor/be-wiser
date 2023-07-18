import { Router } from "express";
import { incomesRoutes } from "./incomes";
import { AppDataSource } from "../data-source";
import { outcomesRoutes } from "./outcomes";


AppDataSource.initialize().then(() => {
    // here you can start to work with your database
}).catch((error) => console.log(error))


const router = Router()

router.use("/incomes", incomesRoutes)
router.use("/outcomes", outcomesRoutes)


export {router}