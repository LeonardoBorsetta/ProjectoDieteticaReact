import React from 'react'
import "./home.css"

function Home() {
  return (
    <div className="home" id='home'>
      <img src="logoDietetica.jpg" className='home-logo'/>
      <div className="card">
      <h2 className="home-slogan">Una vida saludable</h2>
      <h2 className='home-slogan under'>nos une...</h2>
      <button className='home-button' onClick={()=>{scrollTo(0,650)}}>Bienvenido</button>
      </div>
    </div>
  )
}

export default Home