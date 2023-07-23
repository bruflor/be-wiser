import { Router } from "express";
import { createIncome, findAllIncomes, updateIncome, deleteIncome, findByMonthInYear, findByYear } from "../incomes/incomesRepository";

const incomesRoutes = Router()

incomesRoutes.post("/", async(request, response)=>{
    const income = request.body;
    const create = await createIncome(income)

    return response.status(create.status).json(create.body)
})

incomesRoutes.get("/", async(request, response)=>{
    const incomes = await findAllIncomes()
    response.status(200).json(incomes)
})

incomesRoutes.get("/:year", async(request, response)=>{
    const params = request.params
    const incomesByMonth = await findByYear(params.year)

    response.status(incomesByMonth.status).json(incomesByMonth.body)
})

incomesRoutes.get("/:year/:month", async(request, response)=>{
    const params = request.params
    const incomesByMonth = await findByMonthInYear(params.year, params.month)

    response.status(incomesByMonth.status).json(incomesByMonth.body)
})

incomesRoutes.patch("/:id", async(request, response)=>{
    const income = request.body
    const params = request.params

    const incomeUpdated = await updateIncome(params.id, income)

    return response.status(201).json(incomeUpdated)

})

incomesRoutes.delete("/:id", async(request, response)=>{
    const params = request.params
    const deleted = deleteIncome(params.id)

    return response.status(204).json(deleted)
})

export {incomesRoutes}