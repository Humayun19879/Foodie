import React from 'react'
import { menu_list } from '../../pictures/assets'
import './Menu.css'
import { useSelector, useDispatch } from 'react-redux'
import { setMenu } from '../../ReduxStore/Slices/Menu'


export default function Menu() {
  const dispatch = useDispatch();
  const currentMenu =useSelector((state)=>state.menu.currentMenu)
 
  return (
    <>
    <div className="display-comp">
    <h1>Menu</h1>
    <div className='display'>
     
        {
            menu_list.map((item)=>{
                return(
                <div className='menu-item' onClick={()=>dispatch(setMenu(item.menu_name))} >
                    <img className={currentMenu===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
                )
            })
        }
      
    </div>
    </div>
    </>
  )
}
