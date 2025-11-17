import { Input, Field, ListboxButton, Listbox, ListboxOption, ListboxOptions} from "@headlessui/react"
import { useState } from 'react'

const emojiIcons = [
  // --- Income & Business ---
  "💰", "💵", "🤑", "💸", "💼", "📈", "💹", "🏦", "🏛️", "💻",
  "🛠️", "🧑‍🏫", "🎁", "🧧", "🏠", "💲",

  // --- Home & Utilities ---
  "🏡", "🔑", "🧾", "💡", "⚡️", "💧", "🔥", "💨", "🗑️", "🌐",
  "📱", "☎️", "🛋️", "🪴", "🌱", "🧼", "🧻", "🧹", "🔨", "🔧",

  // --- Food & Dining ---
  "🛒", "🍓", "🥦", "🍞", "🥩", "🧀", "🍔", "🍕", "🍽️", "🥡",
  "☕️", "🍵", "🍩", "🍪", "🍻", "🍷", "🍸",

  // --- Transportation ---
  "🚗", "🚙", "🚌", "🚐", "🚆", "🚇", "✈️", "🚢", "⛽️", "🅿️",
  "🚦", "🗺️", "🚲", "🛴", "🚕", "🛡️",

  // --- Personal & Shopping ---
  "🛍️", "👕", "👖", "👗", "👟", "👠", "👜", "🎒", "💍", "🕶️",
  "💄", "💅", "🧴", "✂️", "💈", "💝", "💖", "💎",

  // --- Health & Wellness ---
  "🩺", "💊", "⚕️", "🏥", "🚑", "🦷", "👓", "💪", "🏋️‍♀️", "🧘",
  "🧠", "🥗", "🏃", "❤️",

  // --- Entertainment & Leisure ---
  "🎬", "🎟️", "🎭", "📺", "🎮", "👾", "🎨", "🖌️", "🎵", "🎶",
  "🎧", "🎤", "📚", "📖", "🏕️", "🏖️", "🏝️", "🥂", "🥳", "🎉",

  // --- Family & Kids ---
  "👶", "🍼", "🧸", "🪁", "🏫", "🖍️", "👨‍👩‍👧‍👦", "🐶", "🐱",
  "🐾", "🦴",

  // --- Finance & Other ---
  "🐷", "💳", "📉", "💯", "🪙", "🎓", "⚖️", "📦", "❓",
  "📎", "✏️", "🕊️", "🙏"
];

const AddCategoryPopup = () => {
    const categoryType = ['Income', 'Expense']
    const [currType, selectType] = useState(categoryType[0])
    const [currIcon, selectIcon] = useState(emojiIcons[0])

    const handleClick = (icon) => {
        if (icon !== currIcon) {
            
        }
    }

    return (
        <div className="h-full flex flex-col gap-4 p-4">
            <div className="flex gap-4 h-[20%]">
                <Field as="div" className="flex flex-col gap-2 w-1/2 h-full">
                    <label>Enter category name</label>
                    <Input className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out h-full"/>
                </Field>
                <Field as="div" className="flex flex-col gap-2 w-1/2 h-full">
                    <label>Select type</label>
                    <Listbox value={currType} onChange={selectType}>
                        <ListboxButton className="w-full h-full border border-[#646464] rounded-sm data-focus:border-white hover:border hover:border-white hover:transition duration-300 ease-in-out">
                            {currType}
                        </ListboxButton>
                        <ListboxOptions anchor="bottom" className="z-[1001] w-(--button-width) border border-[#646464] rounded-sm">
                            <ListboxOption key='1' value='Income' className="bg-black data-focus:bg-blue-100">
                                Income
                            </ListboxOption>
                            <ListboxOption key='2' value='Expense' className="bg-black data-focus:bg-blue-100">
                                Expense
                            </ListboxOption>
                        </ListboxOptions>
                    </Listbox>
                </Field>
            </div>
            <Field as="div" className="h-[70%] flex flex-col">
                <label>Select icon</label>
                <div className="w-full flex flex-wrap overflow-y-scroll gap-2 p-4 flex-grow">
                    {emojiIcons.map((icon) => (
                        <button key={icon} className="text-4xl hover:bg-[#101a1e] rounded-sm" type="button" onClick={() => {console.log(icon)}}>{icon}</button>
                    ))}
                </div>
            </Field>
        </div>
    )   
}

export default AddCategoryPopup