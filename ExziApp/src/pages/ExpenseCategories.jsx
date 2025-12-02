import { useEffect, useCallback, useState } from "react"
import { useOutletContext } from "react-router"
import CategoryForm from "../components/forms_general/CategoryForm.jsx"
import Button from "../components/Button"
import { ModalContext } from "../contexts/ModalContext"
import BaseCard from "../components/cards/BaseCard.jsx"
import BaseForm from "../components/forms_general/BaseForm.jsx"

const categories = [
  {
    "key": 2,
    "categoryName": "Food",
    "categoryType": "Expense",
    "currentBalance": 800,
    "emoji": "🍔",
    "isBudget": false,
    "totalBudget": 0,
    "currentSpend": 0
  },
  {
    "key": 3,
    "categoryName": "Rent",
    "categoryType": "Expense",
    "currentBalance": 1650,
    "emoji": "🏠",
    "isBudget": false,
    "totalBudget": 0,
    "currentSpend": 0
  },
  {
    "key": 4,
    "categoryName": "Transport",
    "categoryType": "Expense",
    "currentBalance": 250,
    "emoji": "🚗",
    "isBudget": false,
    "totalBudget": 0,
    "currentSpend": 0
  },
  {
    "key": 5,
    "categoryName": "Utilities",
    "categoryType": "Expense",
    "currentBalance": 180,
    "emoji": "💡",
    "isBudget": true,
    "totalBudget": 0,
    "currentSpend": 0
  },
  {
    "key": 6,
    "categoryName": "Subscriptions",
    "categoryType": "Expense",
    "currentBalance": 75,
    "emoji": "📺",
    "isBudget": true,
    "totalBudget": 0,
    "currentSpend": 0
  },
  {
    "key": 7,
    "categoryName": "Entertainment",
    "categoryType": "Expense",
    "currentBalance": 200,
    "emoji": "🎬",
    "isBudget": true,
    "totalBudget": 0,
    "currentSpend": 0
  }
]

const ExpenseCategories = () => {
    const {headerButton, setHeaderButton, formType, setFormType, setFormHeader, dialogType, setDialogType} = useOutletContext()
    const [displayMode, setDisplayMode] = useState("monthly")
  
    const openAddForm = useCallback(() => {
        setFormType(<CategoryForm type="expense" mode="add" name_label="Enter name" icon_pick_label="Select icon"/>)
        setFormHeader('Add expense category')
    }, [setFormType, setFormHeader])

    const openSubmitDialog = useCallback(() => {
        setDialogType(
          <BaseDialog 
                dialog_type="Confirm" 
                icon="❓" 
                message="Are you sure to add this category?" 
                onClose={() => setDialogType(null)}
          />
        )
    })
       
    useEffect(() => {
        const addButton = <Button text="➕ Add expense category" onClick={openAddForm} />
        setHeaderButton(addButton)

        return () => {
            setHeaderButton(null)
        }
    }, [setHeaderButton, openAddForm])

    const toggleMode = useCallback((mode) => {
      setDisplayMode(mode)
    }, [setDisplayMode])

    return (
      <>
        <main className="flex flex-wrap gap-6 p-4">
            {categories.map((category) => (
                <BaseCard
                    key={category.key} 
                    type="expense"
                    expense_cat={category}
                    display_mode={displayMode}
                />
            ))}
        </main>
        {
          formType && (
            <BaseForm onClose={() => setFormType(null)} display={formType} displayName="Add category" submitTrigger={openSubmitDialog}/>
          )
        }
      </>
    )
}

export default ExpenseCategories