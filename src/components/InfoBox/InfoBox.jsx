import React from 'react'
import "./infoBox.css"
import servicesInfo from '../../Jsons/services.json'

function InfoBox( {showInfo} ) {

  const serviceToShow = servicesInfo.Services.find((p)=> p.id == showInfo)

    return (
      <>
        <article className='infoBox'>
          <h3 className='infoBoxTitle'>{serviceToShow.name}</h3>
          <img src={serviceToShow.photo} alt="" className='infoBox-img'/>
          <p className='infoBoxDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa neque quisquam ea consequuntur delectus in expedita fuga illum, reprehenderit non aliquam dolorum adipisci temporibus enim officiis eum numquam. Quibusdam fugiat rerum consequatur voluptatibus, voluptatum blanditiis quo, quas perspiciatis pariatur totam omnis consequuntur, nobis cum ipsam. Assumenda porro fuga officia aliquam.</p>
          <h5 className='horario'>Horario : {serviceToShow.timeTable} </h5>
          {serviceToShow.timeTable != "Reservar Cita" ? "" : <button className='agendarCita-Btn'>Reservar Cita</button>}
        </article>
      </>
    )
}

export default InfoBox