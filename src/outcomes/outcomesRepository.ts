import { AppDataSource } from "../data-source";
import { Outcomes } from "../entity/Outcomes";


const outcomesRepository = AppDataSource.getRepository(Outcomes)

const findByDate = async(dateReference)=>{
    const foundOutcome = await outcomesRepository.findOneByOrFail({outcome_date: dateReference})

    return foundOutcome
}

const findByName = async(nameReference)=>{
    const foundOutcome = await outcomesRepository.findOneByOrFail({name: nameReference})

    return foundOutcome
}
const findByAmount = async(amount)=>{
    const foundOutcome = await outcomesRepository.findBy({amount: amount})

    return foundOutcome
}

const findByDateNameAmount = async({name, outcome_date, amount}) => {
    const foundOutcome  = await outcomesRepository.findOneByOrFail({name, outcome_date, amount})
    return foundOutcome
}

const findByMonthInYear = async(yearSearched:string, monthSearched:string) => {
    const monthsReferences = {
        "january": "01",
        "february": "02",
        "march":"03",
        "april": "04",
        "may":"05",
        "june":"06",
        "july": "07",
        "august":"08",
        "september":"09",
        "ouctober":"10",
        "november":"11",
        "december":"12"
    }
    const outcomesByMonth = await outcomesRepository.createQueryBuilder("outcomes").where('EXTRACT(year FROM outcomes.outcome_date) = :year', {year: yearSearched}).andWhere('EXTRACT(month FROM outcomes.outcome_date) = :month', {month: monthsReferences[monthSearched]}).getMany()    
    if(outcomesByMonth.length >= 1 ){
        return {status: 200, body:outcomesByMonth}
    }else{
        return {status: 200, body: {message:"there is no income registered in this month"}}
    }
}

const findByYear = async(yearSearched:string) => {
    const outcomesByYear = await outcomesRepository.createQueryBuilder("outcomes").where('EXTRACT(year FROM outcomes.outcome_date) = :year', {year: yearSearched}).getMany()    
    if(outcomesByYear.length >= 1 ){
        return {status: 200, body:outcomesByYear}
    }else{
        return {status: 200, body: {message:"there is no income registered in this year"}}
    }
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

const updateOutcome = async(outcomeID, outcomeBody) => {
    await outcomesRepository.update(outcomeID, outcomeBody)
    const updated = outcomesRepository.findBy({id: outcomeID})

    return updated
}

const deleteOutcome = async(outcomeID) => {
    const deleted = await outcomesRepository.delete(outcomeID)
    return deleted

}
export {createOutcome, findAllOutcomes,findByMonthInYear, findByYear, updateOutcome, deleteOutcome}