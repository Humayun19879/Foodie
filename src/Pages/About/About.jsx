import React from 'react'
import { assets } from '../../pictures/assets'
import './About.css'

export default function About() {
  return (
    <div className='about'>
      <div className="about-top">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Modi quae unde pariatur provident rem laboriosam, inventore consequatur architecto quas iste
          doloremque adipisci.<span className='d-none'> Perferendis,Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a ducimus nihil eius quo quisquam recusandae, reprehenderit suscipit aliquam modi reiciendis dolores mollitia molestiae deserunt corrupti repellat, earum deleniti! Ullam sit voluptate blanditiis neque? Veritatis quam et ullam ea culpa?
            repellendus unde debitis amet autem ipsa officia?</span></p>
        <img src={assets.About} alt="" />
      </div>
      <div className="about-mid">
        <h2>Our Mission</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Modi quae unde pariatur provident rem laboriosam, inventore consequatur architecto quas iste
          doloremque adipisci.<span className='d-none'> Perferendis,Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a ducimus nihil eius quo quisquam recusandae, reprehenderit suscipit aliquam modi reiciendis dolores mollitia molestiae deserunt corrupti repellat, earum deleniti! Ullam sit voluptate blanditiis neque? Veritatis quam et ullam ea culpa?
            repellendus unde debitis amet autem ipsa officia?</span></p>
        <img src="https://www.shutterstock.com/image-photo/happy-people-volunteer-writing-clipboard-260nw-2469644121.jpg" alt="" />
      </div>
      <div className="about-bottom">
        <h2>Core values.</h2>
        <div className="cards">
          <div className="card">

            <h3>Costumer first</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint?
          </div>
          <div className="card">

            <h3>Costumer first</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint?
          </div>
          <div className="card">

            <h3>Costumer first</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint?
          </div>
        </div>
      </div>


    </div>
  )
}
