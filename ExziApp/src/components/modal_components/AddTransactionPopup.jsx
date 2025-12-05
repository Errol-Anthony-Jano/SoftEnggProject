import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useContext } from 'react'
import IncomeForm from "../forms_general/Dashboard/IncomeForm.jsx"
import ExpenseForm from '../forms_general/Dashboard/ExpenseForm.jsx'
import TransferForm from '../forms_general/Dashboard/TransferForm.jsx'

const AddTransactionPopup = () => {
    return (
        <TabGroup defaultIndex={0} as="div" className="flex flex-col justify-between w-full h-full p-2">
            <TabList as="div" className="w-full bg-[#101010] p-1 rounded-lg h-[10%]">
                <Tab className="h-full w-1/3 rounded-lg data-[selected]:bg-white data-[selected]:text-black transition duration-300 ease-in-out">Income</Tab>
                <Tab className="h-full w-1/3 rounded-lg data-[selected]:bg-white data-[selected]:text-black transition duration-300 ease-in-out">Expense</Tab>
                <Tab className="h-full w-1/3 rounded-lg data-[selected]:bg-white data-[selected]:text-black transition duration-300 ease-in-out">Transfer</Tab>
            </TabList>
            <TabPanels as="div" className="h-[90%]">
                <TabPanel as="div" className="h-full">
                    <IncomeForm />
                </TabPanel>
                <TabPanel as="div" className="h-full">
                    <ExpenseForm />
                </TabPanel>
                <TabPanel as="div" className="h-full">
                    <TransferForm />
                </TabPanel>
            </TabPanels>
        </TabGroup>
    )
}

export default AddTransactionPopup