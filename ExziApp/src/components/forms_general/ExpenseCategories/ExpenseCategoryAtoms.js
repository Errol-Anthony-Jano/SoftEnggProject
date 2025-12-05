import { atom } from "jotai";
import { formContentAtom, formHeaderAtom, dialogContentAtom } from "../FormAtoms";

const categories = [
  {
    "id": 2,
    "categoryName": "Food",
    "emoji": "🍔",
    "isBudget": false,
    "totalBudget": 0,
    "currentSpend": 0
  },
  {
    "id": 3,
    "categoryName": "Rent",
    "emoji": "🏠",
    "isBudget": false,
    "totalBudget": 0,
    "currentSpend": 0
  },
  {
    "id": 4,
    "categoryName": "Transport",
    "emoji": "🚗",
    "isBudget": false,
    "totalBudget": 0,
    "currentSpend": 0
  },
  {
    "id": 5,
    "categoryName": "Utilities",
    "emoji": "💡",
    "isBudget": true,
    "totalBudget": 0,
    "currentSpend": 0
  },
  {
    "id": 6,
    "categoryName": "Subscriptions",
    "emoji": "📺",
    "isBudget": true,
    "totalBudget": 0,
    "currentSpend": 0
  },
  {
    "id": 7,
    "categoryName": "Entertainment",
    "emoji": "🎬",
    "isBudget": true,
    "totalBudget": 0,
    "currentSpend": 0
  }
]

export const expenseCategoryListAtom = atom(categories)

const getLastID = (categoryList) => {
    const maxID = Math.max(...categoryList.map(cat => cat.id));
    return maxID + 1;
}

export const addCategoryAtom = atom(null, (get, set, formData) => {
    const prevCategories = get(expenseCategoryListAtom)
    const newCategory = {
        ...formData, 
        id: getLastID(prevCategories),
        currentSpend: 0
    };

    set(expenseCategoryListAtom, [...prevCategories, newCategory])
    set(dialogContentAtom, null)
})

export const updateCategoryAtom = atom(null, (get, set, formData) => {
    const updatedCategoryID = formData.id
        set(expenseCategoryListAtom, prevCategories => (
            prevCategories.map(category => {
                if (category.id === updatedCategoryID) {
                    return { ...category, ...formData };
                }
            return category;
        })
    ))
})