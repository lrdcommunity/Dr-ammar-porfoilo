import React,{useState} from 'react'
import "./navbar.css"

export default function navbar() {
  const [ShowResponsiveNav,SetShowResponsiveNav]=useState(true)
 
  return (
    <div className='navbar'>
      <div className="profile">
        <div className="picture">

        </div>
        <div className="user-name">
            <h3>ammar hussain</h3>
            <h3>lecturer</h3>
        </div>
      </div>
      <div className={ShowResponsiveNav ? "menu close": "menu"}>
        <ul>
            <a href="#main"><li>home</li></a>
           <a href="#portfolio"><li>portfolio</li></a> 
           <a href="#about"><li>about me</li></a>
            <a href="#research"><li>research</li></a>
        </ul>
      <div className="contact-me">
       <a href="#contactme"><button>contact me</button></a> 
      </div>
      </div>
      <div className="hamburger-icon" onClick={()=>SetShowResponsiveNav(!ShowResponsiveNav)}>
        <div></div>
        <div className='middle'></div>
        <div></div>
      </div>
    </div>
  )
}
