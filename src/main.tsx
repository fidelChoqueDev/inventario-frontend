import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import  HomePage  from "./pages/HomePage";
import  LoginPage  from "./pages/LoginPage";
import  RegisterUserPage  from "./pages/RegisterUserPage";
import DashboardPage from './pages/DashboardPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: '/',
    element: <HomePage/>
  },
  {path: '/login',
    element: <LoginPage/>
  },{
    path: '/register',
    element: <RegisterUserPage/>
  },
  {
    path: '/dashboard',
    element: <DashboardPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
