import { useEffect, useCallback, useState, useMemo} from "react"
import { useOutletContext } from "react-router"
import Button from "../components/Button"
import CategoryForm from "../components/forms_general/CategoryForm.jsx"
import BaseCard from "../components/cards/BaseCard.jsx"
import BaseForm from "../components/forms_general/BaseForm.jsx"
import BaseDialog from "../components/dialogs/BaseDialog.jsx"
import { FormActionContext } from "../contexts/contexts.js"
import AddIncomeCategoryForm from "../components/forms_general/IncomeCategories/AddIncomeCategoryForm.jsx"


const categories = [
  {
    id: 1,
    categoryName: 'Salary',
    categoryType: 'Income',
    total_income: 5200,
    emoji: '💵',
  },
  {
    id: 2,
    categoryName: 'Food',
    categoryType: 'Expense', // Changed from 'Income' as it's a more common use case
    total_income: 800,
    emoji: '🍔',
  },
  {
    id: 3,
    categoryName: 'Rent',
    categoryType: 'Expense',
    total_income: 1650,
    emoji: '🏠',
  },
  {
    id: 4,
    categoryName: 'Transport',
    categoryType: 'Expense',
    total_income: 250,
    emoji: '🚗',
  },
  {
    id: 5,
    categoryName: 'Utilities',
    categoryType: 'Expense',
    total_income: 180,
    emoji: '💡',
  },
  {
    id: 6,
    categoryName: 'Subscriptions',
    categoryType: 'Expense',
    total_income: 75,
    emoji: '📺',
  },
  {
    id: 7,
    categoryName: 'Entertainment',
    categoryType: 'Expense',
    total_income: 200,
    emoji: '🎬',
  },
  {
    id: 8,
    categoryName: 'Freelance',
    categoryType: 'Income',
    total_income: 600,
    emoji: '💼',
  }
];

const FormActionProvider = ({children, value}) => {
  return (
    <FormActionContext.Provider value={value}>
      {children}
    </FormActionContext.Provider>
  )
}

const IncomeCategories = () => {
    const {headerButton, setHeaderButton, formType, setFormType, setFormHeader, dialogType, setDialogType} = useOutletContext()
    const [displayMode, setDisplayMode] = useState("monthly")

    const openSubmitDialog = useCallback(() => {
        setDialogType(
          <BaseDialog 
                dialog_type="Confirm" 
                icon="❓" 
                message="Are you sure to add this category?" 
                onClose={() => setDialogType(null)}
          />
        )
    }, [setDialogType])

    const closeForm = useCallback(() => {
      setFormType(null)
    }, [setFormType])

    const formActions = useMemo(() => ({
      openSubmitDialog,
      closeForm
    }), [openSubmitDialog, closeForm])

    const openAddForm = useCallback(() => {
      const formWithContext = (
        <FormActionProvider value={formActions}>
          <AddIncomeCategoryForm />
        </FormActionProvider>
      )

      setFormType(formWithContext)
      setFormHeader('Add category')
    }, [setFormType, setFormHeader, formActions])

    useEffect(() => {
        const addButton = <Button text="➕ Add income category" onClick={openAddForm} />
        setHeaderButton(addButton)

        return () => {
            setHeaderButton(null)
        }
    }, [setHeaderButton, openAddForm])

    return (
      <>
        <main className="flex flex-wrap gap-6 p-4">
            {categories.map((category) => (
                <BaseCard 
                    key={category.id}
                    type="income" 
                    income_cat={category}
                    display_mode={displayMode}
                />
            ))}
        </main>
        {
          formType && (
            <BaseForm onClose={() => setFormType(null)} display={formType} displayName="Add category"/>
          )
        }
        { dialogType }
      </>  
        
    )
}

export default IncomeCategories