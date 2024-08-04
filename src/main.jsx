import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MisProyectos from './componentes/MisProyectos.jsx'
import './index.css'
import {createHashRouter, RouterProvider} from 'react-router-dom'


const router = createHashRouter([
  {
    path:'/',
    element: <App/>,
  },
  {
    path:'/misProyectos',
    element: <MisProyectos/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
