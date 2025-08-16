import React,{useContext} from 'react'
import './Item.css'
import { assets } from '../../pictures/assets'
import { MyContext } from '../../Context-api/Contextapi'


export default function Item({id, name, price, description, category, image }) {
    const {cart, addToCart, removeFromCart } = useContext(MyContext);

 


    return (
        <div className="items">
            <div className='card'>
                <div className="image">
                <img src={image} alt={name} />
                <div className='addandremove'>
              { cart[id] > 0 ?<div className='addandremove-inner'>
                 <img className='icons' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                 <h4 className='number' >{cart[id]}</h4>
                <img className='icons' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>:
               <img className='icons' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
              }
             
                </div>
                </div>
                <div className="card-item">
                    <h1>{name}</h1>
                    <img src={assets.rating_starts} alt={name} />
                    <h3>{description}</h3>
                    <p>${price}</p>
                </div>
            </div>
        </div>
    )
}
