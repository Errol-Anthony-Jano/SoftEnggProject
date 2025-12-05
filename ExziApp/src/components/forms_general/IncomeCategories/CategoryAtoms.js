import { atom } from "jotai";
import { formContentAtom, formHeaderAtom, dialogContentAtom } from "../FormAtoms";
const categories = [
  {
    id: 1,
    categoryName: 'Salary',
    categoryType: 'Income',
    total_income: 5200,
    emoji: '💵',
  },
  {
    id: 2,
    categoryName: 'Food',
    categoryType: 'Expense', // Changed from 'Income' as it's a more common use case
    total_income: 800,
    emoji: '🍔',
  },
  {
    id: 3,
    categoryName: 'Rent',
    categoryType: 'Expense',
    total_income: 1650,
    emoji: '🏠',
  },
  {
    id: 4,
    categoryName: 'Transport',
    categoryType: 'Expense',
    total_income: 250,
    emoji: '🚗',
  },
  {
    id: 5,
    categoryName: 'Utilities',
    categoryType: 'Expense',
    total_income: 180,
    emoji: '💡',
  },
  {
    id: 6,
    categoryName: 'Subscriptions',
    categoryType: 'Expense',
    total_income: 75,
    emoji: '📺',
  },
  {
    id: 7,
    categoryName: 'Entertainment',
    categoryType: 'Expense',
    total_income: 200,
    emoji: '🎬',
  },
  {
    id: 8,
    categoryName: 'Freelance',
    categoryType: 'Income',
    total_income: 600,
    emoji: '💼',
  }
];

export const categoryListAtom = atom(categories)

const getLastID = (categoryList) => {
    const maxID = Math.max(...categoryList.map(cat => cat.id));
    return maxID + 1;
}

export const addCategoryAtom = atom(null, (get, set, formData) => {
    const prevCategories = get(categoryListAtom)
    const newCategory = {
        ...formData,
        id: getLastID(prevCategories),
        total_income: 0,
    };

    set(categoryListAtom, [...prevCategories, newCategory])
    set(dialogContentAtom, null)
})

export const updateCategoryAtom = atom(null, (get, set, formData) => {
    const updatedCategoryID = formData.id
    set(categoryListAtom, prevCategories => (
        prevCategories.map(category => {
            if (category.id === updatedCategoryID) {
                return { ...category, ...formData };
            }
            return category;
        })
    ))
})