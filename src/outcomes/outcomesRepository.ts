import { AppDataSource } from "../data-source";
import { Outcomes } from "../entity/Outcomes";


const outcomesRepository = AppDataSource.getRepository(Outcomes)

const findByDateNameAmount = async({name, outcome_date, amount}) => {
    const foundOutcome  = await outcomesRepository.findOneByOrFail({name, outcome_date, amount})
    return foundOutcome
}


const createOutcome = async(outcomeBody) => {
    try{
        const found = await findByDateNameAmount(outcomeBody)
        return {status: 200, body:{message:"outcome already exists"}}
    }catch{

        const outcome = outcomesRepository.create(outcomeBody)
        
        const savedRepository = await outcomesRepository.save(outcome)
        return {status: 200, body:{outcome}}
    }
}

const findAllOutcomes = async() => {
    const all = await outcomesRepository.find()
    return all
}

export {createOutcome, findAllOutcomes}