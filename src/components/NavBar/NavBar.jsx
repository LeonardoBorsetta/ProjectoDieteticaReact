import React, { useRef } from 'react'
import "./navBar.css"
import handleClick from '../../hooks/handleNavBarClick'
import toogleNavBar from '../../hooks/toogleNavBar'
import homeIcon from '../../assets/navBarimg/homeIcon.png'

function NavBar() {

  const navBarRef = useRef()
  const buttonRef = useRef()

  return (
  <>
    <button onClick={()=>{toogleNavBar({bar : navBarRef, button:buttonRef})}} className='toogle-navBar-button' ref={buttonRef}>Menu</button>
    <div className="navBar" ref={navBarRef}>
      <div className="logo-container">
        <img src="src\assets\logoDietetica.png" alt="Bienestar-Logo" className='navBar-logo'/>
      </div>
      <div className="icons-container">
        <img onClick={handleClick} src={homeIcon} alt="To Home" className='navBar-icon' /><p className='navBar-icon-desc' onClick={handleClick} id="To Home">To Home</p>
        <img onClick={handleClick} src="src\assets\navBarimg\historyIcon.png" alt="To History" id="To History"  className='navBar-icon' /><p className='navBar-icon-desc' onClick={handleClick} id="To History">To History</p>
        <img onClick={handleClick} src="src\assets\navBarimg\productsIcon.png" alt="To Products" id="To Products" className='navBar-icon' /><p className='navBar-icon-desc' onClick={handleClick} id="To Products">To Products</p>
        <img onClick={handleClick} src="src\assets\navBarimg\serviceIcon.png" alt="To Services"  className='navBar-icon' /><p className='navBar-icon-desc' onClick={handleClick} id='To Services'>To Services</p>
        <img onClick={handleClick} src="src\assets\navBarimg\contactoIcon.jpg" alt="To Contact"  className='navBar-icon' /><p className='navBar-icon-desc' onClick={handleClick} id="To Contact">To Contact</p>
        <img onClick={handleClick} src="src\assets\navBarimg\partnersIcon.png" alt="To Partners"  className='navBar-icon' /><p className='navBar-icon-desc' onClick={handleClick} id="To Partners">To Partners</p>
      </div>
      </div>
  </>
  )
}

export default NavBar