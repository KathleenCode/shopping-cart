import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Checkout from './Checkout'
import BottomBar from './BottomBar'
import OrderSummary from './OrderSummary'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    alert(`${ product.name } added successfully`)
    setCart([...cart, { ...product }]);
  };
  
  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(item => item.id !== productToRemove.id);
    setCart(updatedCart);
  };

  return (
    <>
     <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/products' element={<Products addToCart={addToCart} />} />
         <Route path='/checkout' element={<Checkout cart={cart} removeFromCart={removeFromCart} />} />
         <Route path='/order-success' element={<OrderSummary/>} />
         {/* <Route path="*" element={<NoMatch />} /> */}
     </Routes>

     <BottomBar/>
    </>
  )
}

export default App
