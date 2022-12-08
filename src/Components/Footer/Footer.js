import React,{useState} from 'react'
import '../Footer/footer.css'
import facebook from '../../assets/icons/facebook.png'
import insta from '../../assets/icons/insta.png'
import twitter from '../../assets/icons/twitter.png'
import linkdin from '../../assets/icons/linkdin.png'
import heart from '../../assets/icons/heart.png'



export default function Footer() { 
  const [ToggleFooter,SetToogleFooter]=useState(false)
  return (
<>

<div className='footer-wrapper'>
      <div className={ToggleFooter ? "top footer-close":"top"}>
        <div className="menu">
            <ul>
               <a href="#main"><li>home</li></a> 
               <a href="#portfolio"><li>portfolio</li></a>
               <a href="#about"><li>aboutme</li></a> 
                <a href="contactme"><li>contact</li></a> 
               <a href="awards"><li>testimonials</li></a> 
            </ul>
            
        </div>
        <div className="icons">
          <div className="facebook">
            <img src={facebook} alt="" />
          </div>
          <div className="insta">
            <img src={insta} alt="" />
          </div>
          <div className="twitter">
            <img src={twitter} alt="" />
          </div>
          <div className="linkdin">
            <img src={linkdin} alt="" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="love">
          <span>Designed and Developed by LRDC
            <img className="heart" alt='' src= {heart}/>
            </span>
        </div>
        <div className="terms">
          <span>privacy policy</span>
          <span>Term of services</span>
        </div>
      </div>
      <div className="hamburger-icon" onClick={()=>SetToogleFooter(!ToggleFooter)}>
        <div></div>
        <div className='middle'></div>
        <div></div>
      </div>
    </div>
</>
  )
}
