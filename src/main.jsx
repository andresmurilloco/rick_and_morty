import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

//Componentes
import Layout from './components/Layout'

//Paginas
import Index from './pages/Index'
import About from './pages/About'
import Capitulos from './pages/Capitulos'
import Personajes from './pages/Personajes'

const router = createBrowserRouter([{
  path:'/',
  element: <Layout/>,
  children:[
    {
      index: true,
      element: <Index/>
    },
    {
      path:'/characters',
      element: <Personajes/>
    },
    {
      path:'/episodes',
      element: <Capitulos/>
    },
    {
      path:'/about',
      element:<About/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
