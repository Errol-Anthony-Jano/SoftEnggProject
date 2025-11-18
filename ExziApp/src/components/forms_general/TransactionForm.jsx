import { Field, Input,Listbox, ListboxButton, ListboxOption, ListboxOptions, Textarea } from '@headlessui/react'
import TranscDatePicker from '../form_components/TranscDatePicker'
import { useState } from 'react'
import CategorySelector from '../form_components/CategorySelector'

/*
Fetch the ff. here:
Income categories of user
*/

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const IncomeSourceField = ({inc_cat_label, exp_src_label, transaction_type}) => {
    return (
        <Field as="div" className={`${transaction_type === 'expense' ? 'w-1/3' : 'w-1/2'} h-full flex flex-col`}>
            <label>{inc_cat_label || exp_src_label}</label>
            <CategorySelector categoryList={people}/>
        </Field>
    )
}

const ExpenseCategoryField = ({exp_dst_label}) => {
    return (
        <Field as="div" className="flex flex-col w-1/3 h-full">
            <label>{exp_dst_label}</label>
            <CategorySelector categoryList={people}/>
        </Field>
    )
}

const TransferSourceField = ({transfer_src_label}) => {
    return (
        <Field as="div" className="flex flex-col w-1/2">
            <label>{transfer_src_label}</label>
            <CategorySelector categoryList={people}/>
        </Field>
    )
}

const TransferDestField = ({transfer_dst_label}) => {
    return (
        <Field as="div" className="flex flex-col w-1/2">
            <label>{transfer_dst_label}</label>
            <CategorySelector categoryList={people}/>
        </Field>
    )
}

const TransactionForm = ({transaction_type, inc_cat_label, exp_src_label, exp_dst_label, transfer_src_label, transfer_dst_label}) => {
    return (
        <div className="h-full flex flex-col p-4 gap-4">
            <div className="flex justify-between w-full gap-4 h-[30%]">
                {
                    (transaction_type === 'income' || transaction_type === 'expense') && (
                        <>
                            <IncomeSourceField inc_cat_label={inc_cat_label} exp_src_label={exp_src_label} transaction_type={transaction_type}/>

                            { transaction_type === 'expense' && <ExpenseCategoryField exp_dst_label={exp_dst_label}/>}

                            <Field as="div" className={`${transaction_type === 'expense' ? 'w-1/3' : 'w-1/2'} h-full flex flex-col`}>
                                <label>Select date</label>
                                <TranscDatePicker />
                            </Field>
                        </>
                    )
                }
                {
                    (transaction_type === "transfer") && (
                        <div className="flex justify-between w-full gap-4 h-full">
                            <TransferSourceField transfer_src_label={transfer_src_label} />
                            <TransferDestField transfer_dst_label={transfer_dst_label} />
                        </div>
                    )
                }
            </div>
            <Field as="div" className="flex flex-col h-[20%]">
                <label>Enter amount</label>
                <Input className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow"/>
            </Field>
            <Field as="div" className="flex flex-col h-[50%]">
                <label>Enter note</label>
                <Textarea className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow"/>
            </Field>
        </div>
    )
}

export default TransactionForm