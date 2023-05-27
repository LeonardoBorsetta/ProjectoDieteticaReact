import React from 'react'
import { useState } from 'react';
import './products.css'
import DisplayProd from '../../articleComponents/DisplayProd'

function Products() {

  let [prodFilter, setProdFilter] = useState("all");

  function handleFilterClick(event){
    const button = event.target.textContent;
    if (button == "Frutos Secos"){
      setProdFilter("FrutosSecos")
    }
    if (button == "Disecados"){
      setProdFilter("Disecados")
    }
    if (button == "Hierbas"){
      setProdFilter("Hierbas")
    }
    if (button == "Vegetarianos"){
      setProdFilter("Vegetarianos")
    }
    if (button == "Veganos"){
      setProdFilter("Vegano")
    }
    if (button == "Todos"){
      setProdFilter("all")
    }
  }

  return (
    <div className='products'>
    <h3 className='products-title' id="productSection">Nuestros Productos</h3>
    <div className="filter">
    <button onClick={handleFilterClick} className='product-filter-button'>Todos</button>
      <button onClick={handleFilterClick} className='product-filter-button'>Frutos Secos</button>
      <button onClick={handleFilterClick} className='product-filter-button'>Disecados</button>
      <button onClick={handleFilterClick} className='product-filter-button'>Vegetarianos</button>
      <button onClick={handleFilterClick} className='product-filter-button'>Veganos</button>
      <button onClick={handleFilterClick} className='product-filter-button'>Hierbas</button>
    </div>
    {DisplayProd( { prodFilter } )}
    </div>
  )
}

export default Products