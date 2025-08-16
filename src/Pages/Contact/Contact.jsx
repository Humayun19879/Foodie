import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className='contact'>
      <div className="contact-top">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corrupti! Lorem,<div className="remove"> ipsum dolor sit amet consectetur adipisicing elit. Alias, esse?</div></p>
      </div>
      <div className="contact-mid">
        <form action="Submit">
        <span className="form-input"><h3>Name:</h3><input type="text" placeholder='Enter Your Name' /></span>
         <span className="form-input"><h3>Email:</h3><input type="text" placeholder='Enter Your Email' /></span>
          <span className="form-input"><h3>Subject:</h3><input type="text" placeholder='Enter Subject' /></span>
         <span className="form-input"><h3>Message:</h3>  <textarea className='message' placeholder='Enter Message' name="message" required></textarea></span>
         <button className="button">Submit</button>
        </form>

      </div>
      <div className="contact-bottom">
       <h2 className="h1">Additional Contact Information</h2>
       <div className="additional-info">
        <span className='info'><h4>Phone:</h4><h4>0342-4342321</h4></span>
         <span className='info'><h4>Address:</h4><h4>123 Street XYZ City Pakistan</h4></span>
       </div>
      </div>
    </div>
  )
}
