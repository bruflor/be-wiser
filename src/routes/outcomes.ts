import { Router } from "express";
import { createOutcome } from "../outcomes/outcomesRepository";


const outcomesRoutes = Router()

outcomesRoutes.post("/", async(request, response)=>{
    const outcome = request.body

    const create = await createOutcome(outcome)
    return response.status(201).json(create)
})

export {outcomesRoutes}