import React, { createContext, useCallback, useEffect, useMemo, useState } from "react"
import { useOutletContext } from 'react-router'
import Button from "../components/Button.jsx"
import ExpectedExpenseCard from "../components/cards/ExpectedExpenseCard.jsx"
import BaseForm from "../components/forms_general/BaseForm.jsx"
import { atom, useAtom, useSetAtom, useAtomValue } from "jotai"
import ReservedExpenseForm from "../components/forms_general/ReservedExpenses/ReservedExpenseForm.jsx"

import {
    formContentAtom,
    formHeaderAtom,
    dialogContentAtom,
} from "../components/forms_general/FormAtoms.js"

import {
    addReservedExpenseAtom,
    updateReservedExpenseAtom,
    reservedExpensesList,
    updateREPaymentAtom
} from "../components/forms_general/ReservedExpenses/REAtoms.js"
import PayReservedExpenseForm from "../components/forms_general/ReservedExpenses/PayReservedExpenseForm.jsx"

const ReservedExpenses = () => {
    const {setHeaderButton} = useOutletContext()

    const formContent = useAtomValue(formContentAtom)
    const formHeader = useAtomValue(formHeaderAtom)
    const dialogType = useAtomValue(dialogContentAtom)

    const [reList, setreList] = useAtom(reservedExpensesList)
        
    const setFormContent = useSetAtom(formContentAtom)
    const setFormHeader = useSetAtom(formHeaderAtom)
    const setDialogType = useSetAtom(dialogContentAtom)

    const createReservedExpense = useSetAtom(addReservedExpenseAtom)
    const updateReservedExpense = useSetAtom(updateReservedExpenseAtom)
    const updateREPayment = useSetAtom(updateREPaymentAtom)

    const finalSubmit = useCallback((formData) => {
        if (formData.mode === 'create') {
            createReservedExpense(formData)
        }
        else if (formData.mode === 'update') {
            updateReservedExpense(formData)
        }
        else if (formData.mode === 'pay') {
            updateREPayment(formData)
        }

        closeForm();
    })

    const closeForm = useCallback(() => {
        setFormContent(null)
    }, [setFormContent])

    const openAddReservedExpenseForm = useCallback(() => {
        setFormContent(
            <ReservedExpenseForm 
                mode="create"
                closeForm={closeForm}
                finalSubmit={finalSubmit}
            />
        )

        setFormHeader('Add reserved expense')
    }, [setFormContent, setFormHeader])

    const openPayReservedExpenseForm = useCallback((reserved_expense) => {
        setFormContent(
            <PayReservedExpenseForm 
                mode="pay"
                initial_data={reserved_expense}
                closeForm={closeForm}
                finalSubmit={finalSubmit}
            />
        )
        setFormHeader("Pay reserved expense")
    }, [setFormContent])

    const openUpdateReservedExpenseForm = useCallback((reserved_expense) => {
        setFormContent(
            <ReservedExpenseForm 
                mode="update"
                initial_data={reserved_expense}
                closeForm={closeForm}
                finalSubmit={finalSubmit}
            />
        )

        setFormHeader('Update reserved expense')
    }, [setFormContent, setFormHeader])

    

    useEffect(() => {
        const addReservedExpenseButton = <Button text="📅 Add Reserved expense" onClick={openAddReservedExpenseForm}></Button>
        setHeaderButton(addReservedExpenseButton)

        return () => {
            setHeaderButton(null)
        }
    }, [setHeaderButton, openAddReservedExpenseForm])

    return (
        <main className="h-full w-full overflow-y-scroll">
            <div className="h-[10%] w-full p-8 sticky top-0 bg-[#0b1215] z-[20]">
                <div className="grid gap-4 grid-cols-5 grid-rows-1 w-[80%]">
                    <h3 className="col-start-1 col-end-2">Name</h3>
                    <h3 className="col-start-2 col-end-3">Amount</h3>
                    <h3 className="col-start-3 col-end-4">Deadline</h3>
                    <h3 className="col-start-4 col-end-5">Status</h3>
                    <h3 className="col-start-5 col-end-6">Paid so far</h3>
                </div>
            </div>
            <div className="flex flex-col w-full h-[90%] gap-4 p-4">
                {
                    reList.map((expected_expense) => (
                        <ExpectedExpenseCard 
                            key={expected_expense.id} 
                            expected_expense={expected_expense}
                            edit={() => openUpdateReservedExpenseForm(expected_expense)}
                            del=""
                            pay={() => openPayReservedExpenseForm(expected_expense)}
                        />
                    ))
                }
            </div>
            {
                formContent && (
                  <BaseForm onClose={() => setFormContent(null)} display={formContent} displayName={formHeader} />
                )
            }
            { dialogType }
        </main>
    )
}

export default ReservedExpenses