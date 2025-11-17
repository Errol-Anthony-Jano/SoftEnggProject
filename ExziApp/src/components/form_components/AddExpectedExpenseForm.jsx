import { Field, Input,Listbox, ListboxButton, ListboxOption, ListboxOptions, Textarea } from '@headlessui/react'
import TranscDatePicker from './TranscDatePicker'
import CategorySelector from './CategorySelector'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const AddExpectedExpenseForm = () => {
    return (
        <div class="w-full flex flex-col gap-4 h-full p-4">
            <Field as="div" className="flex gap-4 justify-between w-full h-[20%]">
                <div className="flex flex-col gap-2 w-1/3">
                    <label>Select source of funds</label>
                    <CategorySelector categoryList={people} />
                </div>
                <div className="flex flex-col gap-2 w-1/3">
                    <label>Select category</label>
                    <CategorySelector categoryList={people} />
                </div>
                <div className="flex flex-col gap-2 w-1/3">
                    <label>Enter date</label>
                    <TranscDatePicker/>
                </div>
            </Field>
            <Field as="div" className="h-[20%]">
                <div className="flex flex-col justify-between items-start w-full h-full">
                    <label>Enter amount</label>
                    <Input name="input-amount" className="bg-[#101010] rounded w-full data-focus:border border-[#969696] grow"/>
                </div>
            </Field>
            <Field as="div" className="h-[60%]">
                <div className="flex flex-col justify-between items-start w-full h-full">
                    <label>Enter note</label>
                    <Textarea className="bg-[#101010] rounded w-full grow"></Textarea>
                </div>
            </Field>
        </div>
    )
}

export default AddExpectedExpenseForm