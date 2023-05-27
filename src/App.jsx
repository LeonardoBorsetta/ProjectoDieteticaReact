import React, { useRef } from 'react'
import "./app.css"
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import History from './components/History/History'
import Products from './components/Products/Products'
import Servicies from './components/Servicies/Servicies'
import Contact from './components/Contact/Contact'

function App() {

  const home = useRef("");

  return (
   <>
    <NavBar/>
    <div className="main">
    <Home/>
    <History/>
    <Products/>
    <Servicies/>
    <Contact/>
    </div>
   </>
  )
}

export default App