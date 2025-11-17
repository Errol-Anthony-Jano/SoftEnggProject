import { useCallback } from "react"
import { useOutletContext } from "react-router"
import AddBudgetPopup from "../components/modal_components/AddBudgetPopup"
import { useEffect } from "react"
import Button from "../components/Button.jsx"

const Budgets = () => {
    const { setHeaderButton, setModalType, setModalHeader }  = useOutletContext()

    const openBudgetModal = useCallback(() => {
        setModalType(<AddBudgetPopup />)
        setModalHeader("Add budget")
    }, [setModalType, setModalHeader])

    useEffect(() => {
        const addBudgetButton = <Button text="Add budget" onClick={openBudgetModal} />
        setHeaderButton(addBudgetButton)

        return () => {
            setHeaderButton(null)
        }
    }, [setHeaderButton, openBudgetModal])
}

export default Budgets;