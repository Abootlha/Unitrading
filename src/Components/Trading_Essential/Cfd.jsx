import React from 'react'
import './heading.css'
import Mcqs from './MCQs/CFDQuiz.jsx'

function Cfd() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>What's a CFD?</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src="https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/whats-a-cfd-DImuu2ak4Sq/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    <Mcqs/>
    
    </>
  )
}

export default Cfd