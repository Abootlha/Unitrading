import React from 'react'
import './heading.css'
function GartleyPattern() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>The Gartley Pattern</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src=" https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/the-gartley-pattern-k0hxzy88sKB/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    </>
  )
}

export default GartleyPattern