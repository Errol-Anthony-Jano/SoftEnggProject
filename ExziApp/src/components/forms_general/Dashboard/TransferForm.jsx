import { Field, Input, Textarea, Switch } from '@headlessui/react'
import { useContext, useState } from 'react'
import {DatePicker, IncomeSourceField, ExpenseCategoryField, TransferSourceField, TransferDestField} from '../TransactionFormComponents.jsx'
import { FormActionContext } from '../../../contexts/contexts.js'

const TransferForm = () => {
    const [amount, setAmount] = useState('')
    const [note, setNote] = useState('')
    const [transferSrc, setTransferSrc] = useState('')
    const [transferDst, setTransferDst] = useState('')    

    const {openSubmitDialog, closeForm} = useContext(FormActionContext)

    return (
        <div className="h-full flex flex-col p-4 gap-4">
            <div className="flex flex-col h-[90%] gap-4">
                <div className="flex justify-between w-full gap-4 shrink-0">
                    <TransferSourceField 
                        input_state={transferSrc}
                        input_setter={setTransferSrc}  
                        transfer_src_label="From"
                    />
                    <TransferDestField 
                        input_state={transferDst}
                        input_setter={setTransferDst}
                        transfer_dst_label="To"
                    />
                </div>
                <Field as="div" className="flex flex-col shrink-0">
                        <label>Enter amount</label>
                        <Input value={amount} onChange={(e) => setAmount(e.target.value)} className="p-4 border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow"/>
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

export default TransferForm 