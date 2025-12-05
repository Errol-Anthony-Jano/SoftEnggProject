//page content switcher
import Header from './Header.jsx'
import BaseForm from "../forms_general/BaseForm.jsx"
import BaseDialog from '../dialogs/BaseDialog.jsx'
import { Outlet , useMatches } from 'react-router'
import { useState, createContext, useMemo } from 'react'
import { ModalContext } from '../../contexts/ModalContext.js'
import { DialogContext } from '../../contexts/DialogContext.js'
import { useAtomValue, useSetAtom } from "jotai"
import {
    formContentAtom,
    formHeaderAtom,
    dialogContentAtom,
} from "../forms_general/FormAtoms.js"

const PageContent = () => {
    const matches = useMatches();
    const { handle } = matches[matches.length - 1] || {}
    const { main_msg, sub_msg } = handle || {};

    const [headerButton, setHeaderButton] = useState(null)

    const outletContextValue = useMemo(() => ({
        setHeaderButton,
    }), [setHeaderButton])

    return (
        <div className="h-full grid grid-rows-12 grid-cols-12 w-full">
            <Header className="row-start-[1] row-end-[3] col-start-[1] col-end-[13]" main_msg={main_msg} sub_msg={sub_msg} button={headerButton}></Header>
            <div className="row-start-[3] row-end-[13] col-start-[1] col-end-[13]">
                <Outlet context={outletContextValue} className="row-start-[3] row-end-[13] col-start-[1] col-end-[13]"/>
            </div>
        </div>
    )
}

export default PageContent