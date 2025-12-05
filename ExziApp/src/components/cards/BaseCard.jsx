//DO NOT DELETE
import { VscKebabVertical } from "react-icons/vsc"
import { VscTrash, VscEdit } from "react-icons/vsc";


const BaseCard = ({type, income_cat, expense_cat, display_mode, edit, del}) => {
    const categoryObject = income_cat ?? expense_cat

    const display = {
        name: income_cat?.categoryName || expense_cat?.categoryName,
        type: type,
        icon: income_cat?.emoji || expense_cat?.emoji,
        monthlyIncome: income_cat?.monthly_income,
        totalIncome: income_cat?.total_income,
        monthlyExpense: expense_cat?.monthly_expense ?? 0,
        totalExpense: expense_cat?.total_expense ?? 0,
        isBudget: expense_cat?.isBudget ?? "n/a",
        spendLimit: expense_cat?.totalBudget ?? "n/a"
    }

    const renderIncomeInformation = (type, display_mode) => {
        if (type === 'income') {
            if (display_mode === 'monthly') {
                return (
                    <>
                        <h3>This Month's Income</h3>
                        <p>{display.totalIncome}</p> 
                    </>
                )
            }
            else {
                return (
                    <>
                        <h3>Total Income</h3>
                        <p>{display.totalIncome}</p>
                    </>
                )
            }
        }
    }
    
    const renderExpenseInformation = (type, display_mode) => {
        if (type === 'expense') {
            console.log(display.isBudget)
            if (display.isBudget === true) {
                return (
                    <>
                        <h3>Spent this month</h3>
                        <p>{display.monthlyExpense} out of {display.spendLimit}</p>
                    </>
                )
            }
            else {
                return (
                    <>
                        <h3>Spent this month</h3>
                        <p>{display.monthlyExpense}</p>
                    </>
                )
            }
        }
    }
   
    return (
        <div className="flex flex-col bg-[#0d1518] rounded-lg min-w-[20%] max-h-[30%] p-4 gap-2">
            <div className="w-full flex flex-row-reverse gap-4">
                <button onClick={del}><VscTrash /></button>
                <button onClick={edit}><VscEdit /></button>
            </div>
            <div className="flex w-full justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-[#101a1e] rounded-lg p-2 text-[2rem]">
                        {display.icon}
                    </div>
                    <p>{display.name}</p>
                </div>
            </div>
            <div>
                {renderIncomeInformation(type, display_mode)}
                {renderExpenseInformation(type, display_mode)}
            </div>
        </div>
    )
}

export default BaseCard