import { useEffect, useCallback } from "react"
import { useOutletContext } from "react-router"
import AddIncomeCategory from "../components/income_category_modals/AddIncomeCategory"
import Button from "../components/Button"
import IncomeCategoryCard from "../components/cards/IncomeCategoryCard"

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
    
    const openModal = useCallback(() => {
        setModalType(<AddIncomeCategory />)
        setModalHeader('Add income category')
    }, [setModalType, setModalHeader])
    
    useEffect(() => {
        const addButton = <Button text="➕ Add income category" onClick={openModal} />
        setHeaderButton(addButton)

        return () => {
            setHeaderButton(null)
        }
    }, [setHeaderButton, openModal])

    return (
        <main className="flex flex-wrap gap-6 p-4">
            {categories.map((category) => (
                <IncomeCategoryCard 
                    key={category.categoryName} 
                    category={category}        
                />
            ))}
        </main>
    )
}

export default IncomeCategories