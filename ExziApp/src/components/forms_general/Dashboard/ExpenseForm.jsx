import { Field, Input, Textarea, Switch } from '@headlessui/react'
import { useContext, useState } from 'react'
import {DatePicker, IncomeSourceField, ExpenseCategoryField, TransferSourceField, TransferDestField} from '../TransactionFormComponents.jsx'
import { FormActionContext } from '../../../contexts/contexts.js'

const ExpenseForm = () => {
    const [incomeSource, setIncomeSource] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [expenseCategory, setExpenseCategory] = useState('')
    const [note, setNote] = useState('')

    const {openSubmitDialog, closeForm} = useContext(FormActionContext)

    return (
        <div className="h-full flex flex-col p-4 gap-4">
            <div className="flex flex-col h-[90%] gap-4">
                <div className="flex justify-between w-full gap-4 shrink-0">
                    <IncomeSourceField 
                        input_state={incomeSource} 
                        input_setter={setIncomeSource} 
                        inc_cat_label="Income source"
                    />
                    <ExpenseCategoryField 
                        input_state={expenseCategory} 
                        input_setter={setExpenseCategory} 
                        exp_dst_label="Expense"
                    />
                    <DatePicker
                        input_state={date} 
                        input_setter={setDate} 
                    />
                </div>
                <Field as="div" className="flex flex-col shrink-0">
                        <label>Enter amount</label>
                        <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="p-4 border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow"/>
                </Field>
                <Field as="div" className="flex flex-col shrink-0 grow">
                    <label>Enter note</label>
                    <Textarea value={note} onChange={(e) => setNote(e.target.value)} className="p-4 border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow"/>
                </Field>
            </div>
            <div className="flex gap-4 justify-center items-center h-[10%]">
                <button className="w-1/4 p-2 bg-white text-black rounded-sm" type="button" onClick={openSubmitDialog}>Submit</button>
                <button className="w-1/4 p-2 rounded-sm border border-white" onClick={closeForm}>Cancel</button>
            </div>
        </div>
    )
}

export default ExpenseForm