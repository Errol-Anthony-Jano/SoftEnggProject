//DO NOT DELETE

import { VscKebabVertical } from "react-icons/vsc"
import { VscTrash, VscEdit } from "react-icons/vsc";
import PaymentStatusSelector from "../form_components/PaymentStatusSelector"
import CategorySelector from "../form_components/CategorySelector"
import { formatMeridiem } from "@mui/x-date-pickers/internals";
import { format } from "date-fns"

const ExpectedExpenseCard = ({expected_expense, edit, del, pay}) => {

    const printStatus = (status) => {
        if (status === false) {
            return "Pending"
        }
        else {
            return "Paid"
        }
    }

    console.log(expected_expense)
    return (
        <div className="flex w-full bg-[#0d1518] items-center justify-between">
            <div className="grid  grid-cols-5 grid-rows-1 rounded-lg gap-4 w-[80%] p-4 sticky">
                <p className="col-start-1 col-end-2">{expected_expense.title}</p>
                <p className="col-start-2 col-end-3">{expected_expense.amount}</p>
                <p className="col-start-3 col-end-4">{format(new Date(expected_expense.deadline), 'yyyy/MM/dd')}</p>
                <p className="col-start-4 col-end-5">{printStatus(expected_expense.is_paid)}</p>
                <p className="col-start-5 col-end-6">{expected_expense.paid_so_far}</p>
            </div>
            <div className="flex w-[20%] items-center p-4 justify-around">
                <button className="p-2 bg-[#447083] rounded-lg" onClick={pay}>Pay here</button>
                <button onClick={edit}><VscEdit /></button>
                <button><VscTrash /></button>
            </div>
        </div>
    )
}

export default ExpectedExpenseCard 