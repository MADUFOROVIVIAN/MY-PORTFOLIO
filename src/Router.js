import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
const Router = () => {
  return useRoutes(
   [
    { path: '/', 
    element: <Home/> },

    { path: '/about',
     element: <About/> },

    { path: '/contact', 
    element: <Contact/> },
   ] 
  )
}

export default Router