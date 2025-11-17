import { Field, Input,Listbox, ListboxButton, ListboxOption, ListboxOptions, Textarea } from '@headlessui/react'
import TranscDatePicker from './TranscDatePicker'
import { useState } from 'react'
import CategorySelector from './CategorySelector'
import { DATE_VIEWS } from '@mui/x-date-pickers/internals'

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


const AddTransfer = () => {
    return (
        <div className="h-full flex flex-col justify-between p-4">
            <div className="flex flex-col gap-4 w-full h-full">
                <div className="flex justify-between w-full gap-4 h-[30%]">
                    <Field as="div" className="flex flex-col w-1/2">
                        <label>From</label>
                        <CategorySelector categoryList={people}/>
                    </Field>
                    <Field as="div" className="flex flex-col w-1/2">
                        <label>To</label>
                        <CategorySelector categoryList={people}/>
                    </Field>
                </div>
                <Field as="div" className="flex flex-col h-[20%]">
                    <label>Enter amount</label>
                    <Input className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow"/>
                </Field>
                <Field as="div" className="flex flex-col h-1/2">
                    <label>Enter note</label>
                    <Textarea className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow"/>
                </Field>
            </div>
        </div>
    )
}

export default AddTransfer