import React from 'react'
import {useState } from 'react'
import "./App.css"
import bag from "./assets/img/bag.jpg";
import shirt from "./assets/img/t-shirt.jpg";
import watch from "./assets/img/watch.jpg";
import lipstick from "./assets/img/lipstick.jpg"
export default function Products({ addToCart }) {
  const products = [
    { id: 1, name: 'Bag', price: 10,  src: bag,
      alt: "bag", },
    { id: 2, name: 'T-Shirt', price: 20,  src: shirt,
      alt: "shirt", },
    { id: 3, name: 'Watch', price: 15,  src: watch,
      alt: "watch", },
    { id: 4, name: 'Lipstick', price: 15,  src: lipstick,
      alt: "lipstick", },
  ];

  return (
    <div className='products'>
        Products
        <h2>Products</h2>
        <ul className='list'>
         {products.map(product => (
           <li key={product.id}>
             {product.name} - ${product.price}
             <img src={product.src} alt={product.alt} />
             <button onClick={() => addToCart(product)}>Add to Cart</button>
           </li>
         ))}
        </ul>
        {/* <ul className='list'>
         <li value={one}>
            <img src="./src/assets/img/bag.jpg" alt="bag" />
            <input type="button" value="Add to Cart" onClick={() => addTo()} />
         </li>
         <li value={two}>
            <img src="./src/assets/img/t-shirt.jpg" alt="t-shirt" />
            <input type="button" value="Add to Cart" onClick={() => addTo()} />
         </li>
         <li value={three}>
            <img src="./src/assets/img/watch.jpg" alt="watch" />
            <input type="button" value="Add to Cart" onClick={() => addTo()} />
         </li>
        </ul> */}
    </div>
  )
}
