import { Router } from "express";

const incomesRoutes = Router()

incomesRoutes.post("/", (request, response)=>{
    const income = request.body;
    console.log("working")
    return response.status(201).json(income)
})

export {incomesRoutes}