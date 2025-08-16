import React, { useContext } from 'react'
import { MyContext } from '../../Context-api/Contextapi';
import './Cart.css'
import { food_list } from '../../pictures/assets';

export default function Cart() {
  const { getTotal, items,cart, addToCart, removeFromCart } = useContext(MyContext);

  return (
    <div className='cart'>
      <h1>Your Cart</h1>

      <div className="cart-top">
        <ul>
          <li><h3>Image</h3></li>
         
          <li><h3>Name</h3></li>
          <li><h3>Quantity</h3></li>
          <li><h3>Price</h3></li>
          <li><h3>Total</h3></li>
          <li><h3>Remove</h3></li>
        </ul>

      </div>
      <div className="cart-main">


        {
          // Loop through food_list to find items in the cart

          food_list.map((item, index) => {
            if (cart[item._id] > 0) {
              return (
                <div className="cart-inner">
                  <div className="cart-content">
                    <img src={item.image} alt="" />
                    <p>{item.name} </p>
                    <p>{cart[item._id]} </p>
                    <p>{item.price}$ </p>
                    <p>{item.price * cart[item._id]}$ </p>
                    <p className='x' onClick={() => removeFromCart(item._id)}>X</p>
                  </div>
                  <hr />
                </div>
              )
            }
           
          })
        }


        <div className="cartcheckout">
          <h1>Order Summary</h1>
          <div className="summary">
           <span><h3>Number of Items:</h3><h3>{items}</h3></span>
            <span><h3>SubTotal:</h3><h3>{getTotal()}$</h3></span>
             <span><h3>Delievery Fees:</h3><h3>3$</h3></span>
              <span><h3>Total:</h3><h3>{getTotal() + 3}$</h3></span>
          </div>
          <div className="buttons">
            <button className='btn-1'>Continue Shopping</button>
            <button className='btn-2'>Proceeed To Checkout</button>
          </div>
        </div>

      </div>
    </div>
  )
}
