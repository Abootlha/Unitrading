import React from 'react'
import './heading.css'
import Mcqs from './MCQs/MiningQuiz.jsx'
function Mining() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>Mining</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src=" https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/mining-2S1WvAMlbko/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    <Mcqs/>
    
    </>
  )
}

export default Mining