import { Router } from "express";
import { incomesRoutes } from "./incomes";
import { AppDataSource } from "../data-source";
import { Incomes } from "../entity/Incomes";
import { createIncome, deleteIncome, findAllIncomes, updateIncome } from "../incomes/incomesRepository";


AppDataSource.initialize().then(() => {
    // here you can start to work with your database
}).catch((error) => console.log(error))


const router = Router()

// router.use("/incomes", incomesRoutes)

router.post("/incomes", async(request, response)=>{
    const income = request.body;
    const create = createIncome(income)
    return response.status(201).json(create)
})

router.get("/incomes", async(request, response)=>{
    const incomes = await findAllIncomes()
    response.status(200).json(incomes)
})

router.patch("/incomes/:id", async(request, response)=>{
    const income = request.body
    const params = request.params

    const incomeUpdated = await updateIncome(params.id, income)

    return response.status(201).json(incomeUpdated)

})

router.delete("/incomes/:id", async(request, response)=>{
    const params = request.params
    const deleted = deleteIncome(params.id)

    return response.status(204).json(deleted)
})

export {router}