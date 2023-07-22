import { AppDataSource } from "../data-source";
import { Incomes } from "../entity/Incomes";

const incomesRepository  = AppDataSource.getRepository(Incomes)

const findByDate = async(dateReference)=>{
 const foundIncome = await incomesRepository.findOneByOrFail({income_date: dateReference})

 return foundIncome
}

const findByMonth = async(monthSearched:string) => {
    const monthsReferences = {
        "january": "01",
        "february": "02",
        "march":"03",
        "july": "07"
    }
    const month = (new Date('2022-05-30').getMonth() + 1)
    const something = await incomesRepository.createQueryBuilder("incomes").where('EXTRACT(month FROM incomes.income_date) = :month', {month: month}).getMany()    
    return  something
}

const findByName = async(nameReference)=>{
 const foundIncome = await incomesRepository.findOneByOrFail({name: nameReference})

 return foundIncome
}
const findByAmount = async(amount)=>{
 const foundIncome = await incomesRepository.findBy({amount: amount})

 return foundIncome
}

const findByDateNameAmount = async({name, income_date, amount}) => {
    const foundIncome = await incomesRepository.findOneByOrFail({name, income_date, amount})
    return foundIncome
}

const createIncome = async(incomeBody) => {
    
    try{
        const found = await findByDateNameAmount(incomeBody)
        return { status: 200, body:{message: "Income already exists"}}
    }
    catch{
        const income = incomesRepository.create(incomeBody)
        
        const saveInTable = await incomesRepository.save(income)
        return {status:201, body:income}
    }
}

const findAllIncomes =async() => {
    const all = await incomesRepository.find()
    return all
}

const updateIncome = async(incomeID, updatedIncome) => {
    await incomesRepository.update(incomeID, updatedIncome)
    const incomeUpdated = incomesRepository.findOneByOrFail({id: incomeID})

    return incomeUpdated
}

const deleteIncome = async(incomeID) =>{
    const deleted = await incomesRepository.delete(incomeID)
    return deleted
}

export {createIncome, findAllIncomes, updateIncome, deleteIncome}