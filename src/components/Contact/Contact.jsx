import React from 'react'
import Map from '../../contactComponents/googleMap/Map'
import SocialNetWork from '../../contactComponents/socialNetWork/SocialNetWork'
import TelYmail from '../../contactComponents/telefonoYMail/TelYmail'
import './contact.css'

function Contact() {
  return (
    <div className='contact-section'>
    <h3 className='contact-title' id="contactSection">Como Contactarnos?</h3>
    <div className="comp-container">
    <SocialNetWork/>
    <TelYmail/>
    <Map/>
    </div>
    </div>
  )
}

export default Contact