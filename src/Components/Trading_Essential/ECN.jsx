import React from 'react'
import './heading.css'
import Mcqs from './MCQs/ECNQuiz.jsx'
function ECN() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>What is ECN?</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src=" https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/what-is-ecn-5gcEMobYyHt/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    <Mcqs/>
    
    </>
  )
}

export default ECN