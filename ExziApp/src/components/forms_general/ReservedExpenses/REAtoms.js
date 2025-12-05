import { dialogContentAtom } from "../FormAtoms";
import { atom } from "jotai"

const reserved_expenses = [
    {
        "id": 1,
        "amount": 1250.00,
        "title": "Rent / Mortgage",
        "deadline": "2025-12-01",
        "is_paid": false,
        "paid_so_far": 0.00 // Added attribute
    },
    {
        "id": 2,
        "amount": 85.50,
        "title": "Electricity Bill",
        "deadline": "2025-11-15",
        "is_paid": true,
        "paid_so_far": 0.00 // Added attribute
    },
    {
        "id": 3,
        "amount": 59.99,
        "title": "Internet Bill",
        "deadline": "2025-11-20",
        "is_paid": false,
        "paid_so_far": 0.00 // Added attribute
    },
    {
        "id": 4,
        "amount": 45.00,
        "title": "Water Bill",
        "deadline": "2025-11-20",
        "is_paid": false,
        "paid_so_far": 0.00 // Added attribute
    },
    {
        "id": 5,
        "amount": 110.00,
        "title": "Phone Plan",
        "deadline": "2025-11-22",
        "is_paid": false,
        "paid_so_far": 0.00 // Added attribute
    },
    {
        "id": 6,
        "amount": 65.00,
        "title": "Streaming Services",
        "deadline": "2025-11-18",
        "is_paid": true,
        "paid_so_far": 0.00 // Added attribute
    },
    {
        "id": 7,
        "amount": 250.00,
        "title": "Student Loan",
        "deadline": "2025-11-28",
        "is_paid": false,
        "paid_so_far": 0.00 // Added attribute
    },
    {
        "id": 8,
        "amount": 250.00,
        "title": "Student Loan",
        "deadline": "2025-11-28",
        "is_paid": false,
        "paid_so_far": 0.00 // Added attribute
    },
    {
        "id": 9,
        "amount": 250.00,
        "title": "Student Loan",
        "deadline": "2025-11-28",
        "is_paid": false,
        "paid_so_far": 0.00 // Added attribute
    },
    {
        "id": 10,
        "amount": 250.00,
        "title": "Student Loan",
        "deadline": "2025-11-28",
        "is_paid": false,
        "paid_so_far": 0.00 // Added attribute
    }
]

export const reservedExpensesList = atom(reserved_expenses)

const getLastID = (reserved_expenses) => {
    const maxID = Math.max(...reserved_expenses.map(cat => cat.id))
    return maxID + 1;
}

export const addReservedExpenseAtom = atom(null, (get, set, formData) => {
    const prevList = get(reservedExpensesList)
    const newReservedExpense = {
        ...formData,
        id: getLastID(prevList),
        is_paid: false,
    }

    set(reservedExpensesList, [...prevList, newReservedExpense])
    set(dialogContentAtom, null)
})

export const updateReservedExpenseAtom = atom(null, (get, set, formData) => {
    const updatedCategoryID = formData.id
    set(reservedExpensesList, prevCategories => (
        prevCategories.map(category => {
          if (category.id === updatedCategoryID) {
              return {...category, ...formData }
          }
          return category
        })
    ))
})

export const updateREPaymentAtom = atom(null, (get, set, formData) => {
  const updatedCategoryID = formData.id
  set(reservedExpensesList, reservedExpenses => (
    reservedExpenses.map(reservedExpense => {
      if (updatedCategoryID === reservedExpense.id) {
        return {...reservedExpense, ...formData }
      }
      return reservedExpense
    })
  ))
})