import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './css/menu.css'

//Componentes
import Layout from './components/Layout'

//Paginas
import Index from './pages/Index'
import About from './pages/About'
import Capitulos from './pages/Capitulos'
import Personajes from './pages/Personajes'
import Localizaciones from './pages/Localizaciones'
import Detallado from './pages/Detallado'
import Cargando from './components/Cargando'

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
    },
    {
      path:'/locations',
      element:<Localizaciones/>
    },
    {
      path:'/detailed/:id',
      element:<Detallado/>
    },
    {
      path:'/loading',
      element:<Cargando/>
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
