import { useEffect, useCallback, useMemo } from "react"
import { useOutletContext } from "react-router"
import Button from "../components/Button"
import { ModalContext } from "../contexts/ModalContext"
import CategoryForm from "../components/forms_general/CategoryForm.jsx"
import BaseCard from "../components/cards/BaseCard.jsx"


const categories = [
  {
    key: 1,
    categoryName: 'Salary',
    categoryType: 'Income',
    currentBalance: 5200,
    emoji: '💵',
  },
  {
    key: 2,
    categoryName: 'Food',
    categoryType: 'Expense', // Changed from 'Income' as it's a more common use case
    currentBalance: 800,
    emoji: '🍔',
  },
  {
    key: 3,
    categoryName: 'Rent',
    categoryType: 'Expense',
    currentBalance: 1650,
    emoji: '🏠',
  },
  {
    key: 4,
    categoryName: 'Transport',
    categoryType: 'Expense',
    currentBalance: 250,
    emoji: '🚗',
  },
  {
    key: 5,
    categoryName: 'Utilities',
    categoryType: 'Expense',
    currentBalance: 180,
    emoji: '💡',
  },
  {
    key: 6,
    categoryName: 'Subscriptions',
    categoryType: 'Expense',
    currentBalance: 75,
    emoji: '📺',
  },
  {
    key: 7,
    categoryName: 'Entertainment',
    categoryType: 'Expense',
    currentBalance: 200,
    emoji: '🎬',
  },
  {
    key: 8,
    categoryName: 'Freelance',
    categoryType: 'Income',
    currentBalance: 600,
    emoji: '💼',
  }
];

const IncomeCategories = () => {
    const { setHeaderButton, setModalType, setModalHeader } = useOutletContext()
    
    const openAddModal = useCallback(() => {
        setModalType(<CategoryForm type="income" mode="add" name_label="Enter name" icon_pick_label="Select icon"/>)
        setModalHeader('Add income category')
    }, [setModalType, setModalHeader])

    useEffect(() => {
        const addButton = <Button text="➕ Add income category" onClick={openAddModal} />
        setHeaderButton(addButton)

        return () => {
            setHeaderButton(null)
        }
    }, [setHeaderButton, openAddModal])

    return (
        <main className="flex flex-wrap gap-6 p-4">
            {categories.map((category) => (
                <BaseCard 
                    key={category.key}
                    type="income" 
                    name={category.categoryName}
                    icon={category.emoji}
                    total_income={category.currentBalance} 
                />
            ))}
        </main>
    )
}

export default IncomeCategories