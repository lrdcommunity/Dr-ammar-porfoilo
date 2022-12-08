import React from 'react'
import '../My_Education/education.css'
import education1 from '../../assets/images/education1.png'
import education2 from '../../assets/images/education2.png'
import education3 from '../../assets/images/education3.png'

export default function Educations() {
  return (
    <div className='container-my-education'>
      <span className='education'>
        education
      </span>
      <h2>qualification</h2>
       <div className="cards-wrapper">
       <div className="cards">
        <div className="card">
           <div className="image">
           <img src={education1} alt="" />
           </div>
           <div className="text">
            <span>
            <span>year</span>
            <span>2014-2019</span>
            </span>
            <span>
            <span>degree</span>
            <span>PhD.(consumer behavior)</span>
            </span>
            <span>
            <span>institude</span>
            <span>The University of Bedfordshire UK.</span>
            </span>
           </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
           <div className="image">
           <img src={education2} alt="" />
           </div>
           <div className="text">
            <span>
            <span>year</span>
            <span>2011-2013</span>
            </span>
            <span>
            <span>degree</span>
            <span>ms (marketing)</span>
            </span>
            <span>
            <span>institude</span>
            <span>Zulfiqar Ali Bhutto Institute of Science and Technology Pakistan</span>
            </span>
           </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
           <div className="image">
           <img src={education3} alt="" />
           </div>
           <div className="text">
            <span>
            <span>year</span>
            <span>2003-2005</span>
            </span>
            <span>
            <span>degree</span>
            <span>MBA (Marketing)</span>
            </span>
            <span>
            <span>institude</span>
            <span>University of Arid Agriculture Rawalpindi</span>
            </span>
           </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
           <div className="image">
           <img src={education3} alt="" />
           </div>
           <div className="text">
            <span>
            <span>year</span>
            <span>1998-2003</span>
            </span>
            <span>
            <span>degree</span>
            <span>B.Sc. (Hons) Agriculture</span>
            </span>
            <span>
            <span>institude</span>
            <span>University of Arid Agriculture Rawalpindi</span>
            </span>
           </div>
        </div>
      </div>
       </div>
    </div>
  )
}
