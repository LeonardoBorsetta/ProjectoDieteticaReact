import React from 'react'
import products from '../Jsons/products.json'

function DisplayAllProd() {
  return (
    <>
    <ul className='product-list'>
    {products.FrutosSecos.map(item => {
      return <li className="product" key={item.id}>
      <h4 className='prodName'>{item.pName}</h4>
      <p className='prodPrice'>{item.precio}</p>
      <img src={item.photo} alt="photoProduct" className='productPhoto' />
    </li>
    })}
    {products.Disecados.map(item => {
      return <li className="product" key={item.id}>
      <h4 className='prodName'>{item.pName}</h4>
      <p className='prodPrice'>{item.precio}</p>
      <img src={item.photo} alt="photoProduct" className='productPhoto' />
    </li>
    })}
    {products.Vegano.map(item => {
      return <li className="product" key={item.id}>
      <h4 className='prodName'>{item.pName}</h4>
      <p className='prodPrice'>{item.precio}</p>
      <img src={item.photo} alt="photoProduct" className='productPhoto' />
    </li>
    })}
    {products.Vegetarianos.map(item => {
      return <li className="product" key={item.id}>
      <h4 className='prodName'>{item.pName}</h4>
      <p className='prodPrice'>{item.precio}</p>
      <img src={item.photo} alt="photoProduct" className='productPhoto' />
    </li>
    })}
    {products.Hierbas.map(item => {
      return <li className="product" key={item.id}>
      <h4 className='prodName'>{item.pName}</h4>
      <p className='prodPrice'>{item.precio}</p>
      <img src={item.photo} alt="photoProduct" className='productPhoto' />
    </li>
    })}
    </ul>
    </>
  )
}

function DisplayFilter({flag}){
  const prod = flag;
  console.log(prod);
  return(
    <>
    <ul className="product-list">
    {products[prod].map(item => {
      return <li className="product" key={item.id}>
      <h4 className='prodName'>{item.pName}</h4>
      <p className='prodPrice'>{item.precio}</p>
      <img src={item.photo} alt="photoProduct" className='productPhoto'/>
    </li>
    })}
    </ul>
  </>
  )
}

export default function DisplayProd({prodFilter}){
    return (prodFilter == "all") 
    ? <DisplayAllProd/> 
    : <DisplayFilter flag = { prodFilter }/>
}