import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { VscKebabVertical } from 'react-icons/vsc'
import { useContext, useCallback } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import UpdateReservedExpense from "../modals_reserved_expense/UpdateReservedExpense.jsx"


const EditExpectedExpense = ({type, general_options, special_options}) => {
  const { setModalType, setModalHeader } = useContext(ModalContext)

  const openEditModal = useCallback((type) => {
    if (type === 'income') {
        setModalType(<CategoryForm type="income" mode="edit" name_label="Enter new name" icon_pick_label="Select new icon" />)
        setModalHeader("Edit income category")
    }
    else if (type === 'expense') {
        setModalType(<CategoryForm type="expense" mode="edit" name_label="Enter new name" icon_pick_label="Select new icon" />)
        setModalHeader("Edit expense category")
    }
  }, [setModalType, setModalHeader])

  return (
    <Menu>
      <MenuButton className="text-lg"><VscKebabVertical /></MenuButton>
      <MenuItems anchor="right" className="bg-[#0b1215] rounded-lg">
        <MenuItem>
          <button className="block data-focus:bg-gray-900 p-2" href="/settings" onClick={(type) => openEditModal}>
            Edit reserved expense
          </button>
        </MenuItem>
        <MenuItem>
          <button className="block data-focus:bg-gray-900 p-2" href="/support">
            Delete reserved expense
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}

export default EditExpectedExpense