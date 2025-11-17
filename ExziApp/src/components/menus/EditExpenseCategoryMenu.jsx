import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useContext } from 'react'
import { VscKebabVertical } from 'react-icons/vsc'

function EditExpenseCategoryMenu() {
  return (
    <Menu>
      <MenuButton><VscKebabVertical /></MenuButton>
      <MenuItems anchor="bottom" className="rounded-lg">
        <MenuItem>
          <a className="block bg-[#0b1215] data-focus:bg-gray-900 p-2" href="/settings">
            Edit category name and icon
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block bg-[#0b1215] data-focus:bg-gray-900 p-2" href="/support">
            Delete category
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block bg-[#0b1215] data-focus:bg-gray-900 p-2" href="/support">
            Add budget
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block bg-[#0b1215] data-focus:bg-gray-900 p-2" href="/support">
            Delete budget
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}

export default EditExpenseCategoryMenu