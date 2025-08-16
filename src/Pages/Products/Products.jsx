import React from 'react'
import Menu from '../../Components/Menu/Menu'
import Display from '../../Components/Display/Display'
import './Products.css'
export default function Products() {
  return (
    <div className='productssection'>
      <input type="text" placeholder='Search Delicious Food Items Here' />
    <div className="products-contnt">
    <Menu/>
    <Display/>
    </div>
      
    </div>
  )
}
