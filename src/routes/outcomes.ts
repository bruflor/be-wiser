import { Router } from "express";
import { createOutcome, findAllOutcomes } from "../outcomes/outcomesRepository";


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

export {outcomesRoutes}