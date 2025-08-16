import React from 'react'
import './Display.css'
import { food_list } from '../../pictures/assets'
import Item from '../Item/Item'
import { useSelector, useDispatch } from 'react-redux'
import { setMenu } from '../../ReduxStore/Slices/Menu'


export default function Display() {
const dispatch = useDispatch();
const currentMenu =useSelector((state)=>state.menu.currentMenu)
  return (
    <div className='items'>
        {
            food_list.map((item,index)=>{
                if(currentMenu =='all' || currentMenu==item.category){ 
                return(

                    <Item id={item._id}  price={item.price} description={item.description} key={index} category={item.category} name={item.name} image={item.image} />

                )}
            })
        }
      
    </div>
  )
}
