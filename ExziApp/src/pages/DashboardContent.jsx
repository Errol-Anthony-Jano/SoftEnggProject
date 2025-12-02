import { useCallback, useEffect, useState } from "react"
import { useOutletContext } from 'react-router'
import Button from "../components/Button.jsx"
import AddTransactionPopup from "../components/modal_components/AddTransactionPopup.jsx"
import BaseForm from "../components/forms_general/BaseForm.jsx"
import BaseDialog from "../components/dialogs/BaseDialog.jsx"
import { FormActionContext } from "../contexts/contexts.js"
import { useContext, useMemo } from "react"

const FormActionProvider = ({children, value}) => {
    return (
        <FormActionContext.Provider value={value}>
            {children}
        </FormActionContext.Provider>
    )
}

const DashboardContent = () => {
    const {headerButton, setHeaderButton, formType, setFormType, setFormHeader, dialogType, setDialogType} = useOutletContext()
    
    const closeForm = useCallback(() => {
        setFormType(null)
    }, [setFormType])

    const openSubmitDialog = useCallback(() => {
        setDialogType(
            <BaseDialog 
                dialog_type="Confirm" 
                icon="❓" 
                message="Are you sure to record the details on this form? This cannot be undone." 
                onClose={() => setDialogType(null)}
            />
        )
    }, [setDialogType])
    
    const formActions = useMemo(() => ({
        openSubmitDialog,
        closeForm
    }), [openSubmitDialog, closeForm])

    const openAddForm = useCallback(() => {
        const formWithContext = (
            <FormActionProvider value={formActions}>
                <AddTransactionPopup />
            </FormActionProvider>
        )

        setFormType(formWithContext)
        setFormHeader('Add transaction')
    }, [setFormType, setFormHeader, formActions])

    useEffect(() => {
        const addTransactionButton = <Button text="➕ Add transaction" onClick={openAddForm}/>
        
        setHeaderButton(addTransactionButton)

        return () => {
            setHeaderButton(null)
        }
    }, [setHeaderButton, openAddForm])

    return(
        <>
            <FormActionContext value={formActions}>
                <main className="h-full grid gap-8 grid-rows-12 grid-cols-12 p-4">
                    <section className="rounded-md p-4 h-full row-start-[1] row-end-[5] col-start-[1] col-end-[7] bg-[linear-gradient(137deg,rgba(58,254,254,1)_0%,rgba(251,36,233,1)_100%)]">
                        <h2>Total Budget</h2>
                        <h1>10,000.00</h1>
                    </section>
                    <section className="flex justify-between items-center rounded-lg p-4 col-start-[7] col-end-[13] row-start-[1] row-end-[3] bg-[#0d1518]">
                        <h2>Budget for November 2025</h2>
                        <p className="text-green-400 text-3xl font-bold">10,000.00</p> 
                    </section>
                    <section className="flex justify-between items-center bg-[#0d1518] p-4 rounded-sm col-start-[7] col-end-[13] row-start-[3] row-end-[5]">
                        <h2>Expenses in November 2025</h2>
                        <p className="text-red-700 text-3xl font-bold">10,000.00</p>
                    </section>
                    <section className="bg-[#0d1518] rounded-sm p-4 col-start-[1] col-end-[7] row-start-[5] row-end-[13]">
                        <h2>Recent Transactions</h2>
                    </section>
                    <section className="bg-[#0d1518] p-4 col-start-[7] col-end-[13] row-start-[5] row-end-[13]">
                        <h2>Expense Summary</h2>
                    </section>
                </main>
                {
                    formType && (
                        <BaseForm onClose={() => setFormType(null)} display={formType} displayName="Add transaction"/>
                    )
                }   
                { dialogType }
            </FormActionContext>
        </>
    )
}

export default DashboardContent