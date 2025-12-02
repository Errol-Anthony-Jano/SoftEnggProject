import { CategoryNameField, IconPicker } from "../CategoryFormComponents";
import { useContext, useState } from "react";
import { FormActionContext } from "../../../contexts/contexts";
import { Form } from "react-router";

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

const AddIncomeCategoryForm = () => {
    const [currIcon, selectIcon] = useState(emojiIcons[0])
    const [categoryName, setCategoryName] = useState('')
    
    const {openSubmitDialog, closeForm} = useContext(FormActionContext)

    return (
        <div className="h-full flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-4 h-[90%]"> 
                <CategoryNameField name_label="Enter name" input_state={categoryName} input_setter={setCategoryName}/>
                <IconPicker type="income" icon_pick_label="Select icon" input_state={currIcon} input_setter={selectIcon}/>
            </div>
            <div className="flex gap-4 h-[10%] justify-center items-center">
                <button className="w-1/4 p-2 bg-white text-black rounded-sm" type="button" onClick={openSubmitDialog}>Submit</button>
                <button className="w-1/4 p-2 rounded-sm border border-white" onClick={closeForm}>Cancel</button>
            </div>
        </div>
    )
}

export default AddIncomeCategoryForm