import { createContext, useContext } from "react";

export const FormActionContext = createContext()

export const ModalStateContext = createContext({
    // Standard function to open any form
    openModal: (formJSX, headerTitle) => {}, 
    // Specialized function to open an update form with specific data
    openEditCategory: (categoryObject, type) => {}, 
});

