import React, { useState } from 'react'
import './history.css'
import HistoryArticle from '../../articleComponents/HistoryArticle';

let count = 0;

function moveHistory(event){
  count<2 ? count++ : count = 0;
  let value = count * 520;
  const button = event.target.parentElement;
  const history = event.target.parentElement.previousSibling.firstChild;
  history.style.transform = `translateY(${-value}px)`;
  (count == 2) ? button.style.transform = `rotateZ(90deg)` :  button.style.transform = `rotateZ(-90deg)`;
}

function History() {
  
  return (
    <div className="history" >
      <h3 id="historySection">Nuestra Historia</h3>
      <div className="history-container">
        <div className="translate-container">
          <HistoryArticle/>
        </div>
      </div>
      <button className='button-history' onClick={moveHistory}><img src="src\assets\iconFlecha.png"/></button>
    </div>
  )
}

export default History