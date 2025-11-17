import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { VscKebabVertical } from 'react-icons/vsc'

function EditExpectedExpense({ expected_expense }) {
  return (
    <Menu>
      <MenuButton className="text-lg"><VscKebabVertical /></MenuButton>
      <MenuItems anchor="right" className="bg-[#0b1215] rounded-lg">
        <MenuItem>
          <a className="block data-focus:bg-gray-900 p-2" href="/settings">
            Edit reserved expense
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-focus:bg-gray-900 p-2" href="/support">
            Delete reserved expense
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}

export default EditExpectedExpense