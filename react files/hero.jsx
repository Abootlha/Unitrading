import React from 'react'
import Hero from './../assets/images/hero.jpg'
import './css/hero.css'

function hero() {
  return (
    <>

<div className="">
      <img src={Hero} className="hero-image" alt="Hero Image" />
      <div className="gradient-overlay"></div>
    </div>
    
    </>
  )
}

export default hero