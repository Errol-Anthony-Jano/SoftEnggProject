import { Field, Input } from "@headlessui/react"
import IconSelector from "../form_components/IconSelector"

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]



const AddBudgetPopup = () => {
    return (
        <div className="h-full gap-4">
            <div className="h-[20%] flex flex-col">
                <label>Enter name</label>
                <Input className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow p-2"></Input>
            </div>
            <Field as="div" className="h-[70%] flex flex-col">
                <label>Select icon</label>
                <IconSelector />
            </Field>
        </div>
    )
}

export default AddBudgetPopup