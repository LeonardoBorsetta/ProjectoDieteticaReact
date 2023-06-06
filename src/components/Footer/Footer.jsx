import React, { useEffect } from 'react'
import './footer.css'
import getFullYear from '../../hooks/getFullYear'

function Footer() {

  const year = getFullYear()

  return (
    <div className='footer-body'>
      <h3 className='footer-title'>Dieteticas Triuno</h3>
      <div className="footer-content">
        <ul className='list'>
          <li><a href="" className='links'>Mandanos un mail</a></li>
          <li><a href="" className='links'>Llamanos</a></li>
          <li><a href="" className='links'>Legal</a></li>
          <li><a href="" className='links'>Servicios</a></li>
        </ul>
        <p className='copy-tag'>Copyrigth {year}</p>
      </div>
    </div>
  )
}

export default Footer