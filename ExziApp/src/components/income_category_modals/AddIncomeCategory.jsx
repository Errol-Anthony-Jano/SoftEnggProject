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

const AddIncomeCategory = () => {
    const [currIcon, selectIcon] = useState(emojiIcons[0])
    return (
        <div className="h-full flex flex-col gap-4 p-4">
            <div className="flex gap-4 h-[20%]">
                <Field as="div" className="flex flex-col gap-2 w-full h-full">
                    <label>Enter category name</label>
                    <Input className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out h-full"/>
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

export default AddIncomeCategory