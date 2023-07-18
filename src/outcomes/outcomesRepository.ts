import { AppDataSource } from "../data-source";
import { Outcomes } from "../entity/Outcomes";


const outcomesRepository = AppDataSource.getRepository(Outcomes)

const createOutcome = async(outcomeBody) => {
    const outcome = outcomesRepository.create(outcomeBody)
   
    const savedRepository = await outcomesRepository.save(outcome)
    return savedRepository
}

export {createOutcome}