import { Input, Field, RadioGroup, Switch, Label, Fieldset} from "@headlessui/react"
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

export const CategoryNameField = ({name_label}) => {
    return (
        <Field as="div" className="flex flex-col gap-2 w-full shrink-0">
            <label>{name_label}</label>
            <Input className="p-4 border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out h-full"/>
        </Field>
    )
}

export const IconPicker = ({type, icon_pick_label}) => {
    return (
        <Field as="div" className={`flex flex-col min-h-0`}>
            <label>{icon_pick_label}</label>
            <div className="w-full flex flex-wrap overflow-y-scroll gap-2 p-4 grow">
                {emojiIcons.map((icon) => (
                    <button key={icon} className="text-4xl hover:bg-[#101a1e] rounded-sm" type="button" onClick={() => {console.log(icon)}}>{icon}</button>
                ))}
            </div>
        </Field>
    )
}

export const BudgetSetter = ({budget_set_label, budget_enter_amount}) => {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className="flex justify-between items-center shrink-0 w-full bg-[#0d1518] rounded-lg p-2">
            <Fieldset as="div" className="flex justify-between w-full">
                <Field as="div" className="flex w-1/2 justify-around items-center">
                    <label>{budget_set_label}</label>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-blue-600"
                    >
                        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                    </Switch>
                </Field>
                <Field disabled={!enabled} as="div" className="flex flex-col w-1/2">
                    <Label>{budget_enter_amount}</Label>
                    <Input className="p-1 border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out"></Input>
                </Field>
            </Fieldset>
        </div>
    )
}