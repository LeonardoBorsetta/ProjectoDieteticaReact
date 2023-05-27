import React from 'react'
import historyData from '../Jsons/historyData.json'

function HistoryArticle() {
  return (
    <>
     {historyData.History.map(art => {
      return (
        <article key={art.id}>
          <p className='text1'>{art.text}</p>
          <div className="img-container">
            <img src={art.photo1} alt="" className='history-img img11'/>
            <img src={art.photo2} alt="" className='history-img img12'/>
          </div>
        </article>)
     })}
    </>
  )
}

export default HistoryArticle