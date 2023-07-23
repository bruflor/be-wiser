import { Router } from "express";
import { createOutcome, deleteOutcome, findAllOutcomes, findByMonthInYear, findByYear, updateOutcome } from "../outcomes/outcomesRepository";
import { request } from "http";


const outcomesRoutes = Router()

outcomesRoutes.post("/", async(request, response)=>{
    const outcome = request.body

    const create = await createOutcome(outcome)
    return response.status(create.status).json(create.body)
})

outcomesRoutes.get("/", async(request, response)=>{
    const allOutcomes = await findAllOutcomes()
    return response.status(200).json(allOutcomes)
})

outcomesRoutes.get("/:year", async(request, response)=>{
    const params = request.params
    const outcomesByYear = await findByYear(params.year)
    return response.status(outcomesByYear.status).json(outcomesByYear.body)
})

outcomesRoutes.get("/:year/:month", async(request, response)=>{
    const params = request.params
    const outcomesByYear = await findByMonthInYear(params.year, params.month)
    return response.status(outcomesByYear.status).json(outcomesByYear.body)
})

outcomesRoutes.patch("/:id", async(request, response)=>{
    const params = request.params
    const body = request.body

    const updated  = await updateOutcome(params.id, body)

    return response.status(201).json(updated)
})

outcomesRoutes.delete("/:id", async(request, response) => {
    const params = request.params

    const deleted = await deleteOutcome(params.id)
    return response.status(204).json(deleted)
})

export {outcomesRoutes}