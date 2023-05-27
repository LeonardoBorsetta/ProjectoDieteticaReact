import React from 'react'
import "./navBar.css"
import handleClick from '../../hooks/handleNavBarClick'

function NavBar() {
  return (
    <div className="navBar">
      <div className="icons-container">
        <img onClick={handleClick} src="src\assets\navBarimg\homeIcon.png" alt="To Home" className='navBar-icon' />
        <img onClick={handleClick} src="src\assets\navBarimg\historyIcon.png" alt="To History" id="To History"  className='navBar-icon' />
        <img onClick={handleClick} src="src\assets\navBarimg\productsIcon.png" alt="To Products" id="To Products" className='navBar-icon' />
        <img onClick={handleClick} src="src\assets\navBarimg\serviceIcon.png" alt="To Services"  className='navBar-icon' />
        <img onClick={handleClick} src="src\assets\navBarimg\contactoIcon.jpg" alt="To Contact"  className='navBar-icon' />
        <img onClick={handleClick} src="src\assets\navBarimg\partnersIcon.png" alt="To Partners"  className='navBar-icon' />
      </div>
      <div className="logo-container">
        <img src="src\assets\logoDietetica.png" alt="Bienestar-Logo" className='navBar-logo'/>
      </div>
      </div>
  )
}

export default NavBar