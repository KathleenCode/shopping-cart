import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css";

export default function BottomBar() {
  return (
    <nav>
       <ul className='uli'>
         <li className='lii'>
           <Link to="/">Home</Link>
         </li>
         <li className='lii'>
           <Link to="/products">Products</Link>
         </li>
         <li className='lii'>
           <Link to="/checkout">Checkout</Link>
         </li>
         <li className='lii'>
           <Link to="/order-success">Order Summary</Link>
         </li>
       </ul>
     </nav>
  )
}
