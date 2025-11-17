import { VscKebabVertical } from "react-icons/vsc"
import EditExpenseCategoryMenu from "../menus/EditExpenseCategoryMenu"

const ExpenseCategoryCard = ({category}) => {
    return (
        <div className="flex flex-col bg-[#0d1518] rounded-lg w-1/5 h-1/5 p-4 gap-4">
            <div className="flex w-full justify-between items-center gap-4">
                <div className="flex w-full items-center gap-4">
                    <div className="bg-[#101a1e] rounded-lg p-2 text-[2rem]">
                        {category.emoji}
                    </div>
                    <p>{category.categoryName}</p>
                </div>
                <EditExpenseCategoryMenu />
            </div>
            
            {
                category.isBudget ? (
                    <p>Total spent: {category.currentSpend} out of {category.totalBudget}</p>
                ) : (
                    <p>Total spent: {category.currentSpend}</p>
                )
            }
        </div>
    )
}

export default ExpenseCategoryCard