import { useEffect, useCallback, useState, useMemo} from "react"
import { useOutletContext } from "react-router"
import Button from "../components/Button"
import BaseCard from "../components/cards/BaseCard.jsx"
import BaseForm from "../components/forms_general/BaseForm.jsx"
import BaseDialog from "../components/dialogs/BaseDialog.jsx"
import { FormActionContext } from "../contexts/contexts.js"
import AddIncomeCategoryForm from "../components/forms_general/IncomeCategories/AddIncomeCategoryForm.jsx"
import {atom, useAtom, useSetAtom, useAtomValue } from "jotai"

import {
    formContentAtom,
    formHeaderAtom,
    dialogContentAtom,
} from "../components/forms_general/FormAtoms.js"

import {
    categoryListAtom,    // <-- New Import
    addCategoryAtom,
    updateCategoryAtom     // <-- New Import
} from "../components/forms_general/IncomeCategories/CategoryAtoms.js" // Verify path

const IncomeCategories = () => {
    const {setHeaderButton} = useOutletContext()

    const formContent = useAtomValue(formContentAtom)
    const formHeader = useAtomValue(formHeaderAtom)
    const dialogType = useAtomValue(dialogContentAtom)

    const [categoryList, setCategoryList] = useAtom(categoryListAtom)
    
    const setFormContent = useSetAtom(formContentAtom)
    const setFormHeader = useSetAtom(formHeaderAtom)
    const setDialogType = useSetAtom(dialogContentAtom)

    
    const closeForm = useCallback(() => {
      setFormContent(null)
    }, [setFormContent])

    const createCategory = useSetAtom(addCategoryAtom)

    const updateCategory = useSetAtom(updateCategoryAtom)

    const handleDelete = useCallback((categoryObject) => {
        setCategoryList(prevCategories => 
          prevCategories.filter(cat => cat.id !== categoryObject.id)
        );

        setDialogType(null)
    }, [setCategoryList, setDialogType])

    const openDeleteDialog = useCallback((categoryObject) => {
      const confirmDeleteAction = () => {
        handleDelete(categoryObject)
      }

      setDialogType(
        <BaseDialog 
          dialog_type="Warning"
          icon="🗑️"
          message={`Are you sure you want to delete ${categoryObject.categoryName}? All funds will be transferred to Uncategorized.`}
          onClose={() => setDialogType(null)}
          onConfirm={confirmDeleteAction}
          onCancel={() => setDialogType(null)}
        />
      )
    }, [setDialogType, handleDelete])

    const finalSubmit = useCallback((formData) => { // ⬅️ Accepts data from the form
        let success = false;
    
        if (formData.mode === 'add') {
            success = createCategory(formData); // Call your creation logic
        } 
        else if (formData.mode === 'update') {
            success = updateCategory(formData)
        }
    
        closeForm(); 
    }, [createCategory, updateCategory, closeForm]);

    const openAddForm = useCallback(() => {
      setFormContent(
          <AddIncomeCategoryForm 
              mode="add"
              closeForm={closeForm}
              finalSubmit={finalSubmit}
          />
      )
      setFormHeader('Add category')
    }, [setFormContent, setFormHeader])

    const openUpdateForm = useCallback((categoryObject, type) => {
      setFormContent(
          <AddIncomeCategoryForm 
              mode="update"
              initial_data={categoryObject}
              closeForm={closeForm}
              finalSubmit={finalSubmit}
          />
      )
      setFormHeader('Update category')
    }, [setFormContent, setFormHeader])

    useEffect(() => {
        const addButton = <Button text="➕ Add income category" onClick={openAddForm} />
        setHeaderButton(addButton)

        return () => {
            setHeaderButton(null)
        }
    }, [setHeaderButton, openAddForm])
    return (
      <>
        <main className="flex flex-wrap gap-6 p-4 overflow-y-scroll h-full">
            {categoryList.map((category) => (
                <BaseCard 
                    key={category.id}
                    type="income" 
                    income_cat={category}
                    edit={() => openUpdateForm(category, "income")}
                    del={() => openDeleteDialog(category)}
                />
            ))}
        </main>
        {
          formContent && (
            <BaseForm onClose={() => setFormContent(null)} display={formContent} displayName={formHeader}/>
          )
        }
        { dialogType }
      </>  
    )
}

export default IncomeCategories