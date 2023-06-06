import React from 'react'
import "./home.css"
import logoDietetica from '../../assets/logoDietetica.png'
import handleClick from '../../hooks/handleNavBarClick'

function Home() {
  return (
    <div className="home" id='home'>
      <img src={logoDietetica} className='home-logo'/>
      <div className="card">
      <h2 className="home-slogan">Una vida saludable</h2>
      <h2 className='home-slogan under'>nos une...</h2>
      <button className='home-button' onClick={handleClick} id="To History">Bienvenido</button>
      </div>
    </div>
  )
}

export default Home