import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../../ReduxStore/Slices/Page/Page'
export default function Hero() {
const dispatch = useDispatch();
const currentPage =useSelector((state)=>state.Page.currentPage)
  return (
    <div className='hero'>
      <div className="hero-content">
        <h1>Welcome to Foodie</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quibusdam laborum veniam sunt animi aspernatur nemo suscipit commodi vel distinctio?</p>
     <Link to={'./products'}> <button onClick={()=>{dispatch(setPage('products'))}} >Order</button></Link>
      </div>
    </div>
  )
}
