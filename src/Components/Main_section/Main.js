import React from 'react'
import '../Main_section/main.css'
import Intro from './Intro'
import main_image from '../../assets/images/main_image.png'

export default function Main() {
  return (
    <div className='main'  id='main'>
      <Intro></Intro>
      <div className="image">
        <img src={main_image} alt="" />
      </div>
    </div>
  )
}
