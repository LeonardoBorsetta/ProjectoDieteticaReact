import React from 'react'
import logo from '../../assets/partnersImg/logoDietetica.png'
import './partners.css'

function Partners() {
  return (
    <>
    <h3 id='partnerSection'>Nuestros Asociados</h3>
    <div className="partners-img-container" >
      <a href="http://"><img src={logo} alt=""/></a>
      <a href="http://"><img src={logo} alt={logo}/></a>
      <a href="http://"><img src={logo} alt={logo}/></a>
      <a href="http://"><img src={logo} alt={logo}/></a>
    </div>
    </>
  )
}

export default Partners