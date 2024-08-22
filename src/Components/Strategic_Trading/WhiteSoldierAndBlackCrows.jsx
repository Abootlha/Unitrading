import React from 'react'
import './heading.css'
function WhiteSoldierAndBlackCrows() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>Three White Soldiers and Three Black Crows</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src="https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/three-white-soldiers-and-three-black-crows-u2HHcT388ng/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    </>
  )
}

export default WhiteSoldierAndBlackCrows