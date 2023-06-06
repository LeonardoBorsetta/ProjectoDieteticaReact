import React from 'react'
import './telymail.css'
import phoneJPG from '../../assets/navBarimg/contactoIcon.jpg'

function TelYmail() {
  return (
    <div className='telYMail-body'>
      <h4 className='telYMail-title'>Medios tradicionales.</h4>
      <div className='telYMail-container'>
        <div className='tel-card'><img src={phoneJPG} alt="Phone Image"/>
        <h4>Tel: <a href="">+54 9 294 4212992</a></h4>
        <h4>Servicio al cliente: <a href="">0800 999 2225</a></h4> 
        </div>
        <div className='email-card'><img src={phoneJPG} alt="Email Image"/>
        <h4>Email Clientes: <a href="">clientes@triuno.com</a></h4>
        <h4>Email Empresas: <a href="">empresas@triuno.com</a></h4> 
        </div>
      </div>
    </div>
  )
}

export default TelYmail