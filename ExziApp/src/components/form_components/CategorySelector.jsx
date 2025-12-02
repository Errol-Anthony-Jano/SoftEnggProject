import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'

const CategorySelector = ({ categoryList, input_state, input_setter}) => {

    const buttonText = input_state?.name || "Click to select category";

    return (
        <Listbox as="div" className="w-full h-full" value={input_state} onChange={input_setter}>
            <ListboxButton className="w-full h-full border border-[#646464] rounded-sm data-focus:border-white hover:border hover:border-white hover:transition duration-300 ease-in-out">{buttonText}</ListboxButton>
            <ListboxOptions anchor="bottom" className="z-[1001] w-(--button-width) border border-[#646464] rounded-sm">
                {categoryList.map((person) => (
                    <ListboxOption key={person.id} value={person} className="bg-black data-focus:bg-gray-900">
                        {person.name}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    )
}

export default CategorySelector