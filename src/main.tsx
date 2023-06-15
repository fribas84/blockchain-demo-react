import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css'
import Layout from './components/Layout.tsx';
import Index from './pages/Index.tsx';
import Blockchain from './pages/Blockchain.tsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index: true,
        element: <Index />
      },
      {
        path:'/blockchain',
        element:<Blockchain/>
      }

      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <RouterProvider router={router}/>

  </React.StrictMode>,
)
