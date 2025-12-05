import CategorySelector from "../../form_components/CategorySelector"
import { IncomeSourceField, DatePicker, ExpenseCategoryField} from "../TransactionFormComponents"
import { useState } from "react"
import { Field, Input } from "@headlessui/react"
import { isValid } from "date-fns"

const safeParseDate = (dateString) => {
    if (!dateString) return null;
    
    // Convert the string (e.g., "2025-12-01") into a Date object.
    const dateObject = new Date(dateString);
    
    // Ensure the resulting object is a valid date
    return isValid(dateObject) ? dateObject : null;
};

const ReservedExpenseForm = ({mode, initial_data, closeForm, finalSubmit}) => {
    const initialName = (mode === 'update' && initial_data) ? initial_data.title : '';
    const initialDeadline = (mode === 'update' && initial_data) ?  safeParseDate(initial_data.deadline) : null;
    const initialAmount = (mode === 'update' && initial_data) ? initial_data.amount : 0;
    const currentPaid = (mode === 'update' && initial_data) ? initial_data.paid_so_far : 0;

    const [deadline, setDeadline] = useState(initialDeadline)
    const [name, setName] = useState(initialName)
    const [amount, setAmount] = useState(initialAmount)
    
    const handleCreate = (e) => {
        const newAmount = Number(amount)

        e.preventDefault()
        let formData;
        if (mode === 'create') {
            formData = {
                mode: mode,
                title: name,
                deadline: deadline ? deadline.toISOString() : null,
                amount: amount,
                is_paid: false,
                paid_so_far: 0,
            }
        }
        else if (mode === 'update') {
            const newIsPaid = currentPaid >= newAmount
            formData = {
                mode: mode, 
                id: initial_data.id,
                title: name,
                deadline: deadline,
                amount: amount,
                is_paid: newIsPaid
            }
        }

        finalSubmit(formData)
    }
    return (
        <div className="h-full flex flex-col p-4 gap-4">
            <div className="flex flex-col h-[90%] gap-4">
                <DatePicker 
                    transaction_type="reserved_expense"
                    input_state={deadline}
                    input_setter={setDeadline}
                />
            </div>
            <Field as="div" className="flex flex-col shrink-0">
                <label>Enter name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} className="p-4 border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow"/>
            </Field>
            <Field as="div" className="flex flex-col shrink-0">
                <label>Enter amount</label>
                <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="p-4 border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow"/>
            </Field>
            <div className="flex gap-4 justify-center items-center h-[10%]">
                <button className="w-1/4 p-2 bg-white text-black rounded-sm" type="button" onClick={handleCreate}>Submit</button>
                <button className="w-1/4 p-2 rounded-sm border border-white" onClick={closeForm}>Cancel</button>
            </div>
        </div>
    )
}

export default ReservedExpenseForm