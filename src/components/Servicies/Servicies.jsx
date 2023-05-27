import React, {useState} from 'react'
import "./services.css"
import ServiceArticle from '../../articleComponents/ServiceArticle'

function Servicies() {

  return (
    <div className="service-section">
      <h3 className='services-title' id='serviceSection'>Nuestros Servicios</h3>
      <ServiceArticle/>
    </div>
  )
}

export default Servicies