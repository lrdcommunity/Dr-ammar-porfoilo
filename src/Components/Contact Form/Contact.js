import React from 'react'
import '../Contact Form/contact.css'
export default function Contact() {
  return (
    <div className='contact-container' id='contactme'>
      <span className='touch'>get in touch</span>
      <h2>Contact me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <div className="form">
        <form action="">
            <div className="inputs-top">
            <div className="input">
                <label htmlFor="">First name</label>
                <input type="text" />
            </div>
            <div className="input">
                <label htmlFor="Last name">Last name</label>
                <input type="text" />
            </div>
            <div className="input">
                <label htmlFor="">Email</label>
                <input type="email" />
            </div>
            <div className="input">
                <label htmlFor="" >Phone number</label>
                <input type="number" />
            </div>
            </div>
            <div className="choose-one">
                <label htmlFor="">choose a topic</label>
                <select>
                <option value="Select one" >Select one...</option>
                <option value="">xyz...</option>
                <option value="">xyz...</option>
                <option value="">xyz...</option>

             </select>
            </div>
            <div className="text-area">
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </form>
            <div className="checkbox">
                <input type="checkbox" />
                <span>I accept the terms</span>
            </div>
            <div className="button">
                <button>submit</button>
            </div>
      </div>
    </div>
  )
}
