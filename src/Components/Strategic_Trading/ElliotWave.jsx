import React from 'react'
import './heading.css'

function ElliotWave() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>Introduction to Elliott Wave Theory</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src="https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/introduction-to-elliott-wave-theory-rI1QwSoikn5/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    </>
  )
}

export default ElliotWave