import React, { useState } from 'react'
import { useContext } from 'react'
import { MyContext } from '../../Context-api/Contextapi.jsx'
import Hero from '../../Components/Hero/Hero.jsx'
import Menu from '../../Components/Menu/Menu.jsx'
import Display from '../../Components/Display/Display.jsx'



export default function Home() {
  const {Name,setName}=useContext(MyContext)
 
  return (
    <div>
      <Hero/>
      <Menu  />
      <Display />
  

    </div>
  )
}

