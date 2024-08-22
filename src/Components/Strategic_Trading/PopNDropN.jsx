import React from 'react'
import './heading.css'
function PopNDropN() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>The Pop 'n' Stop and Drop 'n' Stop</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src=" https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/the-pop-n-stop-and-drop-n-stop-t9vokRmMYe3/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    </>
  )
}

export default PopNDropN