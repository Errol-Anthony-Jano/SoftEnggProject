import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { VscKebabVertical } from 'react-icons/vsc'

function EditIncomeCategoryMenu() {
  return (
    <Menu>
      <MenuButton><VscKebabVertical /></MenuButton>
      <MenuItems anchor="bottom" className="rounded-lg bg-[#0b1215]">
        <MenuItem>
          <a className="block data-focus:bg-gray-900 p-2" href="/settings">
            Edit category name and icon
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-focus:bg-gray-900 p-2" href="/support">
            Delete category
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}

export default EditIncomeCategoryMenu