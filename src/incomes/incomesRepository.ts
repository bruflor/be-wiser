import { AppDataSource } from "../data-source";
import { Incomes } from "../entity/Incomes";

const incomesRepository  = AppDataSource.getRepository(Incomes)

const createIncome = async({amount,category, currency, description, name}) => {

    const income = new Incomes()
    
    income.amount = amount
    income.category = category
    income.currency = currency
    income.description = description
    income.name = name

    await incomesRepository.save(income)
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

export {createIncome, findAllIncomes, updateIncome}