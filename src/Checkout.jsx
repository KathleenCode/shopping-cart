import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./App.css";

export default function Checkout({ cart, removeFromCart  }) {
    const navigate = useNavigate();

  return (
    <div>
        <button className="btn" onClick={() => navigate(-1)}>
         Go Back
        </button>
        
        <h2>Checkout</h2>
        <ul className='list'>
          {cart.map(item => (
            <li key={item.id}>
             {item.name} - ${item.price}
             <img src={item.src} alt={item.alt} />
             <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
         ))}
      </ul>
      {/* <NavLink to="/order-success">
        <button>Proceed to Order</button>
      </NavLink> */}

        <button className="btn" onClick={() => navigate('/order-success')}>
          Place Order
       </button>
    </div>
  )
}
