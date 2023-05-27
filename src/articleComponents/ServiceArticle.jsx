import React, { useState } from 'react'
import servicesJson from '../Jsons/services.json'
import InfoBox from "../components/InfoBox/InfoBox"


function ServiceArticle() {
  const [showInfo, setShowInfo] = useState("");

  return (
    <>
    <div className="services">
      {servicesJson.Services.map(serv => {
        return (
        <article className='service-article' key={serv.id}>
          <h5 className='service-name'>{serv.name}</h5>
          <img src={serv.photo} alt={serv.name} className='service-img' />
          <p className='service-desc'>{serv.desc}</p>
          <button className='more-btn' onClick={()=>{
            setShowInfo(serv.id);
            scrollTo(0,4400)
          }}>Saber mas</button>
      </article>)
      })}
    </div>
    {showInfo 
      ? <>
          <InfoBox showInfo={showInfo}/>
          <button className="closing-Btn" onClick={()=>{setShowInfo("")}}>X</button>
        </>
      : ""}
    </>
  )
}

export default ServiceArticle