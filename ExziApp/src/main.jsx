import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import PageContent from './components/top_level_components/PageContent.jsx'
import DashboardContent from './pages/DashboardContent.jsx';
import AnalyticsContent from './pages/AnalyticsContent.jsx';
import Categories from './pages/Categories.jsx'
import Profile from './pages/Profile.jsx'
import ExpectedExpenses from './pages/ExpectedExpenses.jsx'
import IncomeCategories from './pages/IncomeCategories.jsx';
import ExpenseCategories from './pages/ExpenseCategories.jsx';

const router = createBrowserRouter([
    {
      path: '/', 
      element: <App/>,
      children: [
        {
          element: <PageContent/>,
          children: [
            {
              index: true,
              handle: {
                main_msg: "Good morning, Errol!",
                sub_msg: "Here's your financial overview.",
              },
              element: <DashboardContent/>,
            },
            {
              handle: {
                main_msg: "Income Categories",
                sub_msg: "Your income categories"
              },
              path: 'income_categories',
              element: <IncomeCategories />
            },
            {
              handle: {
                main_msg: "Expense Categories",
                sub_msg: "Your expense categories"
              },
              path: 'expense_categories',
              element: <ExpenseCategories />
            },
            {
              handle: {
                main_msg: "Expected Expenses",
                sub_msg: "Your schedules expenses",
              },
              path: 'expected_expenses',
              element: <ExpectedExpenses />
            },
            {
              handle: {
                main_msg: "Analytics",
                sub_msg: "Your spending insights and trends",
              },
              path: 'analytics',
              element: <AnalyticsContent/>
            },
            {
              handle: {
                main_msg: "Profile",
                sub_msg: "Edit your personal information here"
              },
              path: 'profile',
              element: <Profile/>
            }
          ]
        }
      ]
    }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
