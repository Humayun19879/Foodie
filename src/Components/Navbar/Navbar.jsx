
import { Link } from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../pictures/assets'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../../ReduxStore/Slices/Page/Page'
import { MyContext } from '../../Context-api/Contextapi'
import { useContext } from 'react'



export default function Navbar() {
  const dispatch = useDispatch();
  const currentPage =useSelector((state)=>state.Page.currentPage)
  const {getTotal}=useContext(MyContext);


function click() {
    let responsive = document.querySelector(".responsive");
    responsive.classList.toggle("active");
    

}


    return (
        <>
            <nav>
                <div className="left">
                    <img className='foodie-logo' src={assets.logo} alt="Foodie Logo" />
                </div>
                <div className="responsive">
                    <div className="mid">
                        <ul>
                            <li className={currentPage=='home' ? 'nav-active' : ''} onClick={()=>{dispatch(setPage('home'));click()}}><Link  to={"/"}>Home</Link></li>
                            <li className={currentPage=='about' ? 'nav-active' : ''} onClick={()=>{dispatch(setPage('about'));click()}}><Link to={"/about"}>About</Link></li>
                            <li className={currentPage=='products' ? 'nav-active' : ''} onClick={()=>{dispatch(setPage('products'));click()}}><Link to={"/products"}>Products</Link></li>
                            <li className={currentPage=='contact' ? 'nav-active' : ''} onClick={()=>{dispatch(setPage('contact'));click()}}><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="right">

                        <div class="search-container">
                            <form onsubmit="handleSearch(event)">
                                <input type="text" placeholder="Search..." name="search" />
                                <button type="submit">Go</button>
                            </form>
                        </div>
                        <div className="l-sing">
                            <button>Signup</button>
                           <Link to={"/cart"}> <img onClick={()=>{click()}} src={assets.basket_icon} alt="" />{getTotal()>0? <div className="reddot"></div>:<></> }</Link>

                        </div>
                    </div>

                </div>
               
                   
                    <i onClick={click} className='bxr  bx-menu-wider'  ></i>
            
            </nav>
        </>
    )
}
