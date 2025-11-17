import { createContext, useContext } from "react";

export const ModalContext = createContext(null)

export const useModal = (() => {
    const context = useContext(ModalContext)

    return context
})