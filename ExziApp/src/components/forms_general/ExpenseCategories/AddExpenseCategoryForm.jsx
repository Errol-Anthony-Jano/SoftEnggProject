import {useState, useContext} from "react"
import { CategoryNameField, IconPicker, BudgetSetter } from "../CategoryFormComponents";
import { FormActionContext } from "../../../contexts/contexts";

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

const AddExpenseCategoryForm = ({mode, initial_data, closeForm, finalSubmit}) => {
    const initialName = (mode === 'update' && initial_data) ? initial_data.categoryName : '';
    
    // Determine the initial icon: Use existing data if in update mode, otherwise use the default icon.
    const initialIcon = (mode === 'update' && initial_data) ? initial_data.emoji : emojiIcons[0];
    const initialBudget = (mode === 'update' && initial_data) ? initial_data.totalBudget : ''
    const initialBudgetSwitch = (mode === 'update' && initial_data) ? initial_data.isBudget : false

    const [currIcon, selectIcon] = useState(initialIcon)
    const [categoryName, setCategoryName] = useState(initialName)
    const [budgetSwitch, toggleBudgetSwitch] = useState(initialBudgetSwitch)
    const [budget, setBudget] = useState(initialBudget)

    const handleCreate = (e) => {
        const finalBudgetLimit = parseFloat(budget) || 0;
        e.preventDefault() 

        let formData;
        if (mode === 'create') {
            formData = {
                categoryName: categoryName,
                isBudget: budgetSwitch,
                emoji: currIcon,
                currentSpend: 0,
                mode: mode
            }

            if (budgetSwitch === true) {
                formData.totalBudget = finalBudgetLimit
            }
            else {
                formData.totalBudget = 0
            }

            console.log(formData)
        }
        else if (mode === 'update') {
            formData = {
                id: initial_data.id,
                categoryName: categoryName,
                emoji: currIcon, 
                mode: mode,
                type: "expense"
            }
            console.log(formData.isBudget)
            if (budgetSwitch === true) {
                formData.isBudget = budgetSwitch
                formData.totalBudget = finalBudgetLimit
            }
            else {
                formData.isBudget = false
                formData.totalBudget = 0
            }
        }

        finalSubmit(formData)
    }

    return (
        <div className="h-full flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-4 h-[90%]"> 
                <CategoryNameField name_label="Enter name" input_state={categoryName} input_setter={setCategoryName}/>
                <BudgetSetter 
                    switch_state={budgetSwitch} 
                    switch_setter={toggleBudgetSwitch} 
                    budget_state={budget}
                    budget_setter={setBudget}
                    budget_set_label="Enable budget limit?" 
                    budget_enter_amount="Enter limit" />
                <IconPicker type="income" icon_pick_label="Select icon" input_state={currIcon} input_setter={selectIcon}/>       
            </div>
            <div className="flex gap-4 h-[10%] justify-center items-center">
                <button className="w-1/4 p-2 bg-white text-black rounded-sm" type="button" onClick={handleCreate}>Submit</button>
                <button className="w-1/4 p-2 rounded-sm border border-white" onClick={closeForm}>Cancel</button>
            </div>
        </div>
    )
}

export default AddExpenseCategoryForm