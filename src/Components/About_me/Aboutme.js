import React from 'react'
import Myself from './Myself'
import my_image from '../../assets/images/my_image.png'
export default function Aboutme() {
  return (
    <div className='wrapper-about-me' id='about'>
        <div className="my-image">
            <img src={my_image} alt="" />
        </div>
      <Myself/>
    </div>
  )
}
