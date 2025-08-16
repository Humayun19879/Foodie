import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import About from './Pages/About/About.jsx'
import Footer from './Components/Footer/Footer.jsx'
import './App.css'
import Products from './Pages/Products/Products.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Cart from './Pages/Cart/Cart.jsx'
function App() {


  return (
    <>
    <Navbar/>
    <div className="midle">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default App

