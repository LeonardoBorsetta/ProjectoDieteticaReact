import React, { useRef } from 'react'
import "./navBar.css"
import handleClick from '../../hooks/handleNavBarClick'
import toogleNavBar from '../../hooks/toogleNavBar'
import homeIcon from '../../assets/navBarimg/homeIcon.png'
import historyIcon from '../../assets/navBarimg/historyIcon.png'
import productIcon from '../../assets/navBarimg/productsIcon.png'
import servicesIcon from '../../assets/navBarimg/serviceIcon.png'
import contactIcon from '../../assets/navBarimg/contactoIcon.png'
import partnersIcon from '../../assets/navBarimg/partnersIcon.png'

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
        <img onClick={handleClick} src={historyIcon} alt="To History" id="To History"  className='navBar-icon' /><p className='navBar-icon-desc' onClick={handleClick} id="To History">To History</p>
        <img onClick={handleClick} src={productIcon} alt="To Products" id="To Products" className='navBar-icon' /><p className='navBar-icon-desc' onClick={handleClick} id="To Products">To Products</p>
        <img onClick={handleClick} src={servicesIcon} alt="To Services"  className='navBar-icon' /><p className='navBar-icon-desc' onClick={handleClick} id='To Services'>To Services</p>
        <img onClick={handleClick} src={contactIcon} alt="To Contact"  className='navBar-icon' /><p className='navBar-icon-desc' onClick={handleClick} id="To Contact">To Contact</p>
        <img onClick={handleClick} src={partnersIcon} alt="To Partners"  className='navBar-icon' /><p className='navBar-icon-desc' onClick={handleClick} id="To Partners">To Partners</p>
      </div>
      </div>
  </>
  )
}

export default NavBar