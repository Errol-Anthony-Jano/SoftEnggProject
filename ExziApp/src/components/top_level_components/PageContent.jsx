//page content switcher
import Header from './Header.jsx'
import BaseModal from '../modal_components/BaseModal.jsx'
import { Outlet , useMatches } from 'react-router'
import { useState } from 'react'
const PageContent = () => {
    const matches = useMatches();
    const { handle } = matches[matches.length - 1] || {}
    const { main_msg, sub_msg } = handle || {};

    const [headerButton, setHeaderButton] = useState(null)
    const [modalType, setModalType] = useState(null) // null -> no modal is to be shown
    const [modalHeader, setModalHeader] = useState(null)
    // setModalType -> opens modal depending on 
    
    const closeModal = () => {
        setModalType(null)
    }
    return (
        <div className="h-full grid grid-rows-12 grid-cols-12 w-full">
            <Header className="row-start-[1] row-end-[3] col-start-[1] col-end-[13]" main_msg={main_msg} sub_msg={sub_msg} button={headerButton}></Header>
            
            <div className="row-start-[3] row-end-[13] col-start-[1] col-end-[13]">
                <Outlet context={{setHeaderButton, setModalType, setModalHeader}} className="row-start-[3] row-end-[13] col-start-[1] col-end-[13]"/>
            </div>
            {
                
                    modalType && (
                        <BaseModal onClose={closeModal} display={modalType} displayName={modalHeader}>
                            {modalType}
                        </BaseModal>
                    )
                
            }
        </div>
    )
}

export default PageContent